import { useState, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import API from '@/services/API'
import { CategoryRuleInput } from '@/components/Inputs'
import { CategoryCheckbox } from '@/components/Checkbox'
import { UploadButton } from '@/components/Buttons'
import { SecurityUpdateModal } from '@/components/Modals'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'
import { CategorySelect } from '@/components/Select'
import { LanguageOptions } from '@/services/Constants/SelectOptions'

export default function LogInSecurity() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2',
    }

    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const [selectedLangauge, setSelectedLanguage] = useState(LanguageOptions[0]);
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
    const [firstNameEn, setFirstNameEn] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [lastNameEn, setLastNameEn] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [firstNameHe, setFirstNameHe] = useState({ ...initialValue, rules: ['required'] });
    const [lastNameHe, setLastNameHe] = useState({ ...initialValue, rules: ['required'] });
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
            if (currentUser.nm_user[0] !== '')
                setSelectedLanguage(LanguageOptions[0]);
            if (currentUser.nm_user[1] !== '')
                setSelectedLanguage(LanguageOptions[1]);
            if (currentUser.nm_user[0] !== '' && currentUser.nm_user[1] !== '')
                setSelectedLanguage(LanguageOptions[2]);

            console.log(currentUser.nm_user)

            // english name
            if (currentUser.nm_user[0] !== '') {
                let nameParts = currentUser.nm_user[0].split(' ');
                const _firstName = nameParts[0];
                const _lastName = nameParts.slice(1).join(' ');
                setFirstNameEn({ ...initialValue, value: _firstName, rules: ['required', 'name'] });
                setLastNameEn({ ...initialValue, value: _lastName, rules: ['required', 'name'] });
            }
            // hebrew name
            if (currentUser.nm_user[1] !== '') {
                let nameParts = currentUser.nm_user[1].split(' ');
                const _firstName = nameParts[0];
                const _lastName = nameParts.slice(1).join(' ');
                setFirstNameHe({ ...initialValue, value: _firstName, rules: ['required'] });
                setLastNameHe({ ...initialValue, value: _lastName, rules: ['required'] });
            }
            setEmail({ ...initialValue, value: currentUser.ds_email, rules: ['required', 'email'] });
            setPhoneNumber({ ...initialValue, value: currentUser.ds_phonenumber, rules: ['required', 'phone'] });
            setCheckSend(currentUser.ic_sendme);
        }
    }, [currentUser]);

    const isSaveButtonActive = () => {
        if (currentUser &&
            !!phoneNumber.value.length &&
            !phoneNumber.errorMessage.length &&
            !!email.value.length &&
            !email.errorMessage.length &&
            !newPassword.errorMessage.length &&
            !confirmPassword.errorMessage.length &&
            !loadingOpen &&
            (selectedLangauge.id === 0 ?
                (!!firstNameEn.value.length &&
                    !firstNameEn.errorMessage.length &&
                    !!lastNameEn.value.length &&
                    !lastNameEn.errorMessage.length)
                :
                selectedLangauge.id === 1 ?
                    (!!firstNameHe.value.length &&
                        !firstNameHe.errorMessage.length &&
                        !!lastNameHe.value.length &&
                        !lastNameHe.errorMessage.length)
                    :
                    (!!firstNameEn.value.length &&
                        !firstNameEn.errorMessage.length &&
                        !!lastNameEn.value.length &&
                        !lastNameEn.errorMessage.length &&
                        !!firstNameHe.value.length &&
                        !firstNameHe.errorMessage.length &&
                        !!lastNameHe.value.length &&
                        !lastNameHe.errorMessage.length)
            )
        ) {
            if (!!newPassword.value) {
                if (confirmPassword.value !== newPassword.value)
                    return false;
            }
            // console.log('------------------------');
            // console.log(_name.toLowerCase() !== currentUser.nm_user.toLowerCase());
            // console.log(email.value !== currentUser.ds_email);
            // console.log(phoneNumber.value !== currentUser.ds_phonenumber);
            // console.log(checkSend !== currentUser.ic_sendme);
            const nameEnChanged = (firstNameEn.value + ' ' + lastNameEn.value).toLowerCase() !== currentUser.nm_user[0].toLowerCase();
            const nameHeChanged = (firstNameHe.value + ' ' + lastNameHe.value).toLowerCase() !== currentUser.nm_user[1].toLowerCase();
            if (selectedLangauge.id === 0 && nameEnChanged)
                return true;
            if (selectedLangauge.id === 1 && nameHeChanged)
                return true;
            else if (selectedLangauge.id === 2 && (nameEnChanged || nameHeChanged))
                return true;
            if (email.value !== currentUser.ds_email ||
                phoneNumber.value !== currentUser.ds_phonenumber ||
                checkSend !== currentUser.ic_sendme)
                return true;
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
        }
    }

    return (
        <div className='w-full max-w-[800px]'>
            <SecurityUpdateModal
                isOpen={isOpen}
                closeModal={closeModal}
                cd_educator={currentUser.cd_educator}
                nameLngId={selectedLangauge.id}
                nm_user={
                    [firstNameEn.value + ' ' + lastNameEn.value,
                    firstNameHe.value + ' ' + lastNameHe.value]
                }
                ds_phonenumber={phoneNumber.value}
                ds_email={email.value}
                ds_password={newPassword.value}
                ic_sendme={checkSend}
            />
            <div className='grid gap-[10px] border border-beighe rounded-[10px] p-[10px]'>
                <CategorySelect
                    category=''
                    selectItems={LanguageOptions}
                    inputValue={selectedLangauge}
                    handleChange={setSelectedLanguage}
                />
                <div className='grid md:grid-cols-2 gap-[10px]'>
                    {
                        (selectedLangauge.id === 0 || selectedLangauge.id === 2) &&
                        <>
                            <CategoryRuleInput
                                lngId={0}
                                category='First name'
                                placeholder='Enter your name'
                                inputValue={firstNameEn}
                                handleChange={handleChangeValue(firstNameEn, setFirstNameEn)}
                                type='text'
                            />
                            <CategoryRuleInput
                                lngId={0}
                                category='Last name'
                                placeholder='Enter your name'
                                inputValue={lastNameEn}
                                handleChange={handleChangeValue(lastNameEn, setLastNameEn)}
                                type='text'
                            />
                        </>
                    }
                    {
                        (selectedLangauge.id === 1 || selectedLangauge.id === 2) &&
                        <>
                            <CategoryRuleInput
                                lngId={1}
                                category='שם פרטי'
                                placeholder='הזן את שמך'
                                inputValue={firstNameHe}
                                handleChange={handleChangeValue(firstNameHe, setFirstNameHe)}
                                type='text'
                            />
                            <CategoryRuleInput
                                lngId={1}
                                category='שם משפחה'
                                placeholder='הזן את שמך'
                                inputValue={lastNameHe}
                                handleChange={handleChangeValue(lastNameHe, setLastNameHe)}
                                type='text'
                            />
                        </>
                    }
                </div>
            </div>
            <div className='mt-[10px] grid md:grid-cols-2 gap-[10px]'>
                <CategoryRuleInput
                    lngId={lngId}
                    category={t('Phone number')}
                    placeholder='+972 12 345 6789'
                    inputValue={phoneNumber}
                    handleChange={handleChangeValue(phoneNumber, setPhoneNumber)}
                    type='text'
                />
                <CategoryRuleInput
                    lngId={lngId}
                    category={t('Email')}
                    placeholder='user@example.com'
                    inputValue={email}
                    handleChange={handleChangeValue(email, setEmail)}
                    type='text'
                />
                <CategoryRuleInput
                    lngId={lngId}
                    category={t('New Password')}
                    placeholder={t('Password (8 or more characters)')}
                    inputValue={newPassword}
                    handleChange={handleChangeValue(newPassword, setNewPassword)}
                    type='password'
                />
                <CategoryRuleInput
                    lngId={lngId}
                    category={t('Confirm Password')}
                    placeholder={t('Password (8 or more characters)')}
                    inputValue={confirmPassword}
                    handleChange={handleChangeValue(confirmPassword, setConfirmPassword)}
                    type='password'
                />
            </div>
            <div className='mt-[20px]'>
                <CategoryCheckbox
                    id='check-send'
                    text={t('Send me helpful emails to find rewarding work and job leads.')}
                    checkValue={checkSend}
                    setCheckValue={setCheckSend}
                />
            </div>
            <div className='mt-[30px]'>
                <div className='w-max' onClick={handleSave}>
                    <UploadButton
                        text={t('Save changes')}
                        disabled={!isSaveButtonActive()}
                        loadingOpen={loadingOpen}
                    />
                </div>
            </div>
        </div>
    )
}