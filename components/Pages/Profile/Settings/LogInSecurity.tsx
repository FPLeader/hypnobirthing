import { useState, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import API from '@/services/API'
import { CategoryRuleInput } from '@/components/Inputs'
import { UploadButton } from '@/components/Buttons'
import { SecurityUpdateModal } from '@/components/Modals'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

export default function LogInSecurity() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2',
    }

    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const { currentUser } = useAppSelector((state) => state.auth);
    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);

    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    //values
    const [checkSend, setCheckSend] = useState<boolean>(false);
    const [firstName, setFirstName] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [lastName, setLastName] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [phoneNumber, setPhoneNumber] = useState({ ...initialValue, rules: ['required', 'phone'] });
    const [email, setEmail] = useState({ ...initialValue, rules: ['required', 'email'] });
    const [newPassword, setNewPassword] = useState({ ...initialValue, rules: ['required', 'min:8'] });
    const [confirmPassword, setConfirmPassword] = useState({ ...initialValue, rules: ['required', 'match'] });

    //modals
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleChangeValue = (value: any, setValue: any) => (event: any) => {
        checkValidity({ ...value, value: event.target.value }, setValue);
    };

    const checkValidity = (value: any, setValue: any) => {
        let message = '';
        for (const rule of value.rules) {
            if (rule === 'required') {
                if (value.value.length === 0) {
                    message = 'This field should not be empty.';
                }
            } else if (rule === 'name') {
                let emailRegex = /^[A-Za-z]+$/;
                if (!emailRegex.test(value.value)) {
                    message = 'Invalid name.';
                }
            } else if (rule === 'phone') {
                let phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
                if (!phoneRegex.test(value.value)) {
                    message = 'Invalid phone number.';
                }
            } else if (rule === 'email') {
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value.value)) {
                    message = 'Invalid email.';
                }
            } else if (rule === 'min:8') {
                if (value.value.length < 8) {
                    message = 'This field should greater than 8.';
                }
            } else if (rule === 'match') {
                if (value.value !== newPassword.value) {
                    message = 'Passwords do not match.';
                }
            }
        }

        setValue({
            ...value,
            errorMessage: message,
        });
    };

    useLayoutEffect(() => {
        if (currentUser) {
            let nameParts = currentUser.nm_user.split(' ');
            const _firstName = nameParts[0];
            const _lastName = nameParts.slice(1).join(' ');
            setFirstName({ ...initialValue, value: _firstName, rules: ['required', 'name'] });
            setLastName({ ...initialValue, value: _lastName, rules: ['required', 'name'] });
            setEmail({ ...initialValue, value: currentUser.ds_email, rules: ['required', 'email'] });
            setPhoneNumber({ ...initialValue, value: currentUser.ds_phonenumber, rules: ['required', 'phone'] });
            setCheckSend(currentUser.ic_sendme);
        }
    }, [currentUser]);

    const isSaveButtonActive = () => {
        if (currentUser &&
            !!firstName.value.length &&
            !firstName.errorMessage.length &&
            !!lastName.value.length &&
            !lastName.errorMessage.length &&
            !!phoneNumber.value.length &&
            !phoneNumber.errorMessage.length &&
            !!email.value.length &&
            !email.errorMessage.length &&
            !newPassword.errorMessage.length &&
            !confirmPassword.errorMessage.length &&
            !loadingOpen
        ) {
            if (!!newPassword.value) {
                if (confirmPassword.value !== newPassword.value)
                    return false;
            }
            let _name = firstName.value + ' ' + lastName.value;
            // console.log('------------------------');
            // console.log(_name.toLowerCase() !== currentUser.nm_user.toLowerCase());
            // console.log(email.value !== currentUser.ds_email);
            // console.log(phoneNumber.value !== currentUser.ds_phonenumber);
            // console.log(checkSend !== currentUser.ic_sendme);
            return _name.toLowerCase() !== currentUser.nm_user.toLowerCase() ||
                email.value !== currentUser.ds_email ||
                phoneNumber.value !== currentUser.ds_phonenumber ||
                checkSend !== currentUser.ic_sendme;
        }
        return false;
    }

    const handleSave = () => {
        if (isSaveButtonActive()) {
            if (email.value === currentUser.ds_email)
                openModal();
            else {
                setLoadingOpen(true);
                API.post('user/sendcodenewemail', {
                    ds_email: email.value,
                })
                    .then((result) => {
                        if (result.data.status === 'success') {
                            openModal();
                            toast.success('Check the code has been sent to your new email.');
                            setLoadingOpen(false);
                        }
                    })
                    .catch((err) => {
                        if (err.request?.response === '')
                            toast.error('Something went wrong.');
                        else {
                            try {
                                let errorMessage = JSON.parse(err.request?.response).message;
                                if (errorMessage === 'jwt expired') {
                                    dispatch(logout(router, '/login'));
                                    toast.error('Your session was expired, Log in again here.');
                                } else
                                    toast.error(errorMessage);
                            } catch (error) {
                                console.error('Error parsing response:', err.request?.response);
                                toast.error('Something went wrong.');
                            }
                        }
                        setLoadingOpen(false);
                    })
            }
            // interface requestParamsProps {
            //     nm_user: string;
            //     ds_email: string;
            //     ds_phonenumber: string;
            //     ds_password: string;
            // }

            // let requestParams: requestParamsProps = {
            //     nm_user: firstName.value + ' ' + lastName.value,
            //     ds_email: email.value,
            //     ds_phonenumber: phoneNumber.value,
            //     ds_password: confirmPassword.value,
            // };

            // API.post('auth/login', requestParams)
            //     .then((result: any) => {
            //         if (result.data.status === 'success') {
            //             toast.success('Updated successfully.');
            //             localStorage.removeItem('token');
            //             localStorage.token = result.data.data.token;
            //             setLoadingOpen(false)
            //             dispatch(setUser(result.data.data.user));
            //         }
            //     })
            //     .catch((err) => {
            //         if (err.request?.response === '')
            //             toast.error('Something went wrong.');
            //         else {
            //             toast.error(JSON.parse(err.request?.response).message);
            //         }
            //         setLoadingOpen(false)
            //     });
        }
    }

    return (
        <div className='w-full max-w-[800px]'>
            <SecurityUpdateModal
                isOpen={isOpen}
                closeModal={closeModal}
                cd_educator={currentUser.cd_educator}
                nm_user={firstName.value + ' ' + lastName.value}
                ds_phonenumber={phoneNumber.value}
                ds_email={email.value}
                ds_password={newPassword.value}
                ic_sendme={checkSend}
            />
            <div className='grid md:grid-cols-2 gap-[10px]'>
                <CategoryRuleInput
                    category='First name'
                    placeholder='Enter your name'
                    inputValue={firstName}
                    handleChange={handleChangeValue(firstName, setFirstName)}
                    type='text'
                />
                <CategoryRuleInput
                    category='Last name'
                    placeholder='Enter your name'
                    inputValue={lastName}
                    handleChange={handleChangeValue(lastName, setLastName)}
                    type='text'
                />
                <CategoryRuleInput
                    category='Phone number'
                    placeholder='+972 12 345 6789'
                    inputValue={phoneNumber}
                    handleChange={handleChangeValue(phoneNumber, setPhoneNumber)}
                    type='text'
                />
                <CategoryRuleInput
                    category='Email'
                    placeholder='user@example.com'
                    inputValue={email}
                    handleChange={handleChangeValue(email, setEmail)}
                    type='text'
                />
                <CategoryRuleInput
                    category='New Password'
                    placeholder='Password (8 or more characters)'
                    inputValue={newPassword}
                    handleChange={handleChangeValue(newPassword, setNewPassword)}
                    type='password'
                />
                <CategoryRuleInput
                    category='Confirm Password'
                    placeholder='Password (8 or more characters)'
                    inputValue={confirmPassword}
                    handleChange={handleChangeValue(confirmPassword, setConfirmPassword)}
                    type='password'
                />
            </div>
            <div className='mt-[20px] flex items-center gap-[10px]'>
                <input
                    type='checkbox'
                    id='checkbox-send'
                    onChange={() => setCheckSend(!checkSend)}
                    className='opacity-0 absolute w-[26px] h-[26px]'
                    checked={checkSend}
                />
                <div className={style.CheckBox}>
                    <svg className='hidden pointer-events-none' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14.5 1.125L5.5625 10.0625L1.5 6' stroke='#2B2525' strokeWidth='1.6666' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </div>
                <label htmlFor='checkbox-send' className='text-dark text-[14px] select-none'>
                    Send me helpful emails to find rewarding work and job leads.
                </label>
            </div>
            <div className='mt-[30px]'>
                <div className='w-max' onClick={handleSave}>
                    <UploadButton
                        text='Save changes'
                        disabled={!isSaveButtonActive()}
                        loadingOpen={loadingOpen}
                    />
                </div>
            </div>
        </div>
    )
}