import { useRouter } from 'next/router'
import { useState, useLayoutEffect } from 'react'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import { ForgotPasswordModal } from '../Modals'

import { CategoryRuleInput } from '../Inputs'

import { login } from '@/services/Actions/Auth.action'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'

export default function LogIn() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const lng: boolean = i18n.language === 'en' ? true : false;
    const { currentUser } = useAppSelector((state) => state.auth);

    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
    const [email, setEmail] = useState({ ...initialValue, rules: ['required', 'email'] });
    const [password, setPassword] = useState({ ...initialValue, rules: ['required', 'min:8'] });
    const [isForgotReminder, setIsForgotreminder] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (currentUser) {
            router.push('/profile/educator');
        }
    }, [currentUser])

    const [isOpen, setIsOpen] = useState<boolean>(false);
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setEmail({ ...initialValue, rules: ['required', 'email'] });
        setPassword({ ...initialValue, rules: ['required', 'min:8'] });
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
            } else if (rule === 'email') {
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value.value)) {
                    message = 'Invalid email.';
                }
            } else if (rule === 'min:8') {
                if (value.value.length < 8) {
                    message = 'This field should greater than 8.';
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
            !!email.value.length &&
            !email.errorMessage.length &&
            !!password.value.length &&
            !password.errorMessage.length
        );
    };

    const LogInHandler = () => {
        if (!loadingOpen) {
            let requestParams = {
                ds_email: email.value,
                ds_password: password.value,
            };
            setLoadingOpen(true);
            setIsForgotreminder(true);

            dispatch(login(requestParams, setLoadingOpen, router));
        }
    }

    return (
        <div dir={lng ? "ltr" : "rtl"} className='pt-[70px] lg:pt-[90px] min-h-screen w-full flex justify-center items-center'>
            <div className='w-full mx-[20px] my-[40px] max-w-[600px] p-[20px] md:p-[30px] lg:p-[40px] bg-bcg_2 rounded-[20px]'>
                <div className='flex flex-col gap-[20px]'>
                    <ForgotPasswordModal
                        isOpen={isOpen}
                        closeModal={closeModal}
                        email={email}
                        setEmail={setEmail}
                        handleChangeValue={handleChangeValue}
                    />
                    <div className='text-center text-dark font-medium text-[26px] lg:text-[32px]'>{t('Log In')}</div>
                    <div className='flex flex-col gap-[10px]'>
                        <CategoryRuleInput
                            category={t('Email')}
                            placeholder='user@example.com'
                            inputValue={email}
                            handleChange={handleChangeValue(email, setEmail)}
                            type='email'
                        />
                        <CategoryRuleInput
                            category={t('Password')}
                            placeholder='Password (8 or more characters)'
                            inputValue={password}
                            handleChange={handleChangeValue(password, setPassword)}
                            type='password'
                        />
                    </div>
                    <button
                        className='w-full whitespace-nowrap h-max flex justify-center items-center gap-[5px] md:gap-[10px] text-center py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed  rounded-[500px] transition-all duration-300'
                        onClick={LogInHandler}
                        disabled={!(isFormValid())}
                    >
                        {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                        </svg>}
                        {t('Log In')}
                    </button>
                    {isForgotReminder &&
                        <button
                            className='flex justify-center select-none cursor-pointer text-dark text-[14px]'
                            onClick={openModal}
                        >
                            Forgot password?
                        </button>
                    }
                    <div className='flex flex-col sm:flex-row gap-[5px] sm:gap-[10px] justify-center items-center text-dark text-[14px]'>
                        <div className='opacity-50'>{t('Not yet a member?')}</div>
                        <button
                            onClick={() => router.push('/signup')}
                        >
                            {t('Create a free account')}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
} 
