import { useRouter } from 'next/router'
import { useState, useLayoutEffect } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { CategoryRuleInput } from '../Inputs'
import { CategorySelect } from '../Select'
import { SkillSet, TypeOptions } from '@/services/Constants/SelectOptions'

import { register } from '@/services/Actions/Auth.action'
import { useAppDispatch } from '@/services/Hooks'

interface SingUpPageProps {
    typeId: number,
}

export default function SignUp({
    typeId,
}: SingUpPageProps) {
    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2',
        LinkStyle: 'text-dark text-[14px] font-medium underline underline-offset-4 decoration decoration-dark'
    }

    const router = useRouter();
    const dispatch = useAppDispatch();
    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
    // Values
    const [firstName, setFirstName] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [lastName, setLastName] = useState({ ...initialValue, rules: ['required', 'name'] });
    const [phoneNumber, setPhoneNumber] = useState({ ...initialValue, rules: ['required', 'phone'] });
    const [email, setEmail] = useState({ ...initialValue, rules: ['required', 'email'] });
    const [newPassword, setNewPassword] = useState({ ...initialValue, rules: ['required', 'min:8'] });
    const [confirmPassword, setConfirmPassword] = useState({ ...initialValue, rules: ['required', 'match'] });

    interface MultiSelectOption {
        value: any;
        label: string;
        key?: string;
        disabled?: boolean;
    }
    
    const [profileType, setProfileType] = useState(TypeOptions[0]);
    const [skills, setSkills] = useState<MultiSelectOption[]>([]);
    const [personalTitle, setPersonalTitle] = useState({ ...initialValue, rules: ['required'] });
    // const [CheckOne, setCheckOne] = useState<boolean>(false);
    const [CheckTwo, setCheckTwo] = useState<boolean>(false);

    useLayoutEffect(() => {
        // console.log(typeId)
        setProfileType(TypeOptions[typeId]);
    }, [typeId]);


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

    const isFormValid = () => {
        return (
            CheckTwo &&
            !!firstName.value.length &&
            !firstName.errorMessage.length &&
            !!lastName.value.length &&
            !lastName.errorMessage.length &&
            !!phoneNumber.value.length &&
            !phoneNumber.errorMessage.length &&
            !!email.value.length &&
            !email.errorMessage.length &&
            skills.length > 0 &&
            !!personalTitle.value.length &&
            !personalTitle.errorMessage.length &&
            !!newPassword.value.length &&
            !newPassword.errorMessage.length &&
            !!confirmPassword.value.length &&
            !confirmPassword.errorMessage.length
        );
    };

    const SignUpHandler = () => {
        if (!loadingOpen) {
            let _skills: string[] = [];
            for (let x of skills) {
                _skills.push(x.label as string);
            }

            interface requestParamsProps {
                nm_user: string;
                ds_email: string;
                ds_phonenumber: string;
                ds_password: string;
                ds_category: string;
                ar_skills: string[];
                ar_personaltitle: string[];
            }

            let requestParams: requestParamsProps = {
                nm_user: firstName.value + ' ' + lastName.value,
                ds_email: email.value,
                ds_phonenumber: phoneNumber.value,
                ds_password: confirmPassword.value,
                ds_category: profileType.value,
                ar_skills: _skills,
                ar_personaltitle: []
            };
            requestParams.ar_personaltitle.push(personalTitle.value);
            requestParams.ar_personaltitle.push('');
            setLoadingOpen(true);
            dispatch(register(requestParams, setLoadingOpen, router));
        }
    }

    return (
        <div className='pt-[70px] lg:pt-[90px] min-h-screen w-full flex justify-center items-center'>
            <div className='w-full mx-[20px] my-[30px] lg:my-[40px] max-w-[700px] p-[20px] md:p-[30px] lg:p-[40px] bg-bcg_2 rounded-[20px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-center text-dark font-medium text-[26px] lg:text-[32px]'>Sign up</div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='grid md:grid-cols-2 gap-[10px]'>
                            <CategoryRuleInput
                                category='First name *'
                                placeholder='Enter your name'
                                inputValue={firstName}
                                handleChange={handleChangeValue(firstName, setFirstName)}
                                type='text'
                            />
                            <CategoryRuleInput
                                category='Last name *'
                                placeholder='Enter your name'
                                inputValue={lastName}
                                handleChange={handleChangeValue(lastName, setLastName)}
                                type='text'
                            />
                            <CategoryRuleInput
                                category='Phone number *'
                                placeholder='+972 12 345 6789'
                                inputValue={phoneNumber}
                                handleChange={handleChangeValue(phoneNumber, setPhoneNumber)}
                                type='text'
                            />
                            <CategoryRuleInput
                                category='Email *'
                                placeholder='user@example.com'
                                inputValue={email}
                                handleChange={handleChangeValue(email, setEmail)}
                                type='email'
                            />
                            <CategoryRuleInput
                                category='Password *'
                                placeholder='Password (8 or more characters)'
                                inputValue={newPassword}
                                handleChange={handleChangeValue(newPassword, setNewPassword)}
                                type='password'
                            />
                            <CategoryRuleInput
                                category='Confirm Password *'
                                placeholder='Password (8 or more characters)'
                                inputValue={confirmPassword}
                                handleChange={handleChangeValue(confirmPassword, setConfirmPassword)}
                                type='password'
                            />
                        </div>
                        <CategorySelect
                            category='Pashut Laledet Certification'
                            selectItems={TypeOptions}
                            inputValue={profileType}
                            handleChange={setProfileType}
                        />
                        <div className='w-full flex flex-col gap-[6px]'>
                            <label className='text-sm text-dark'>Professional Expertise</label>
                            <MultiSelect
                                options={SkillSet}
                                value={skills}
                                onChange={setSkills}
                                labelledBy='Select'
                                hasSelectAll={false}
                            />
                        </div >
                        <CategoryRuleInput
                            category='Personal Title'
                            placeholder='Example: Modern Applied Psychology & Personal Development'
                            inputValue={personalTitle}
                            handleChange={handleChangeValue(personalTitle, setPersonalTitle)}
                            type='text'
                        />
                    </div>
                    <div className='flex flex-col gap-[17px]'>
                        {/* <div className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        id='checkbox-one'
                                        onChange={() => setCheckOne(!CheckOne)}
                                        className='opacity-0 absolute w-[26px] h-[26px]'
                                    />
                                    <div className={style.CheckBox}>
                                        <svg className='hidden pointer-events-none' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M14.5 1.125L5.5625 10.0625L1.5 6' stroke='#2B2525' strokeWidth='1.6666' strokeLinecap='round' strokeLinejoin='round' />
                                        </svg>
                                    </div>
                                    <label htmlFor='checkbox-one' className='text-dark text-[14px]'>
                                        Send me helpful emails to find rewarding work and job leads.
                                    </label>
                                </div> */}
                        <div className='flex items-center gap-[10px]'>
                            <div className='flex items-center'>
                                <input
                                    type='checkbox'
                                    id='checkbox-two'
                                    onChange={() => setCheckTwo(!CheckTwo)}
                                    className='opacity-0 absolute w-[26px] h-[26px]'
                                />
                                <div className={style.CheckBox}>
                                    <svg className='hidden pointer-events-none' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M14.5 1.125L5.5625 10.0625L1.5 6' stroke='#2B2525' strokeWidth='1.6666' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                </div>
                                <label htmlFor='checkbox-two' className='text-dark text-[14px] select-none'>
                                    I agree with the <a href='#' className={style.LinkStyle}>Terms of Service</a>, including the <a href='#' className={style.LinkStyle}>User Agreement</a> and <a href='#' className={style.LinkStyle}>Privacy Policy</a>.
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        className='w-full whitespace-nowrap h-max gap-[5px] md:gap-[10px] flex justify-center items-center text-center py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] transition-all duration-300'
                        onClick={SignUpHandler}
                        disabled={!(isFormValid())}
                    >
                        {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                        </svg>}
                        Create my account
                    </button>
                    <div className='flex flex-col sm:flex-row gap-[5px] sm:gap-[10px] justify-center items-center text-dark text-[14px]'>
                        <div className='opacity-50'>Already have an account?</div>
                        <div
                            className='select-none cursor-pointer'
                            onClick={() => router.push('/login')}
                        >LOG IN</div>
                    </div>
                </div>
            </div>
        </div >
    )
}