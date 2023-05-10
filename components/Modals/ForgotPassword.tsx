import { Fragment, useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import useWindowSize from '@/services/Hooks/useWindowSize'
import API from '@/services/API'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { CategoryRuleInput } from '../Inputs'
import { OtpInput } from '@/components/Inputs'

interface ForgotPasswordProps {
    isOpen: boolean,
    closeModal: () => void,
    email: any,
    setEmail: any,
    handleChangeValue: any,
}

export default function ForgotPassword({
    isOpen,
    closeModal,
    email,
    setEmail,
    handleChangeValue,
}: ForgotPasswordProps) {
    const { width } = useWindowSize();
    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [verifyHuman, setVerifyhuman] = useState<boolean>(false);

    const [otp, setOtp] = useState<string>('');

    // wrong otp timer
    const [wrongOtpTimer, setWrongOtpTimer] = useState<number>(0);
    const wrongOtpTimeOutCallback = useCallback(() => setWrongOtpTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
        wrongOtpTimer > 0 && setTimeout(wrongOtpTimeOutCallback, 1000);
    }, [wrongOtpTimer, wrongOtpTimeOutCallback]);

    // for page 2
    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };
    const [newPassword, setNewPassword] = useState({ ...initialValue, rules: ['required', 'min:8'] });
    const [confirmPassword, setConfirmPassword] = useState({ ...initialValue, rules: ['required', 'match'] });
    const checkValidity = (value: any, setValue: any) => {
        let message = '';
        for (const rule of value.rules) {
            if (rule === 'required') {
                if (value.value.length === 0) {
                    message = 'This field should not be empty.';
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

    const ForgotPasswordHandler = () => {
        setLoadingOpen(true)
        if (page === 1) {
            API.post('auth/forgotpassword', {
                email: email.value,
            })
                .then((result) => {
                    if (result.data.status === 'success') {
                        setLoadingOpen(false)
                        toast.success('Check the code has been sent to your email.');
                        setOtp('');
                        setNewPassword({ ...initialValue, rules: ['required', 'min:8'] });
                        setConfirmPassword({ ...initialValue, rules: ['required', 'match'] });
                        setPage(page + 1);
                    }
                })
                .catch((err) => {
                    setLoadingOpen(false)
                    if (err.request?.response === '')
                        toast.error('Something went wrong.');
                    else {
                        try {
                            let errorMessage = JSON.parse(err.request?.response).message;
                            toast.error(errorMessage);
                        } catch (error) {
                            console.error('Error parsing response:', err.request?.response);
                            toast.error('Something went wrong.');
                        }
                    }
                })
        } else if (page === 2) {
            API.post('auth/setUpPassword', {
                email: email.value,
                code: otp,
                password: newPassword.value,
            })
                .then((result) => {
                    if (result.data.status === 'success') {
                        setLoadingOpen(false);
                        toast.success('Password was sucessfully updated. Log in here.');
                        closeModal();
                        setPage(1);
                    }
                })
                .catch((err) => {
                    setLoadingOpen(false);
                    if (err.request?.response === '')
                        toast.error('Something went wrong.');
                    else {
                        try {
                            let errorMessage = JSON.parse(err.request?.response).message;
                            toast.error(errorMessage);
                        } catch (error) {
                            console.error('Error parsing response:', err.request?.response);
                            toast.error('Something went wrong.');
                        }
                    }
                    setWrongOtpTimer(3);
                })
        }
    }

    const isButtonDisabled = (): boolean => {
        if (page === 1) {
            return !(
                !!email.value.length &&
                !email.errorMessage.length &&
                !loadingOpen
            );
        } else if (page === 2) {
            return !(
                otp.substr(5) !== ' ' &&
                otp.length == 6 &&
                !!newPassword.value.length &&
                !newPassword.errorMessage.length &&
                !!confirmPassword.value.length &&
                !confirmPassword.errorMessage.length
            );
        }
        return false;
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-[6000]' onClose={() => { closeModal(), setPage(1) }}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-dark bg-opacity-90' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[600px] transform overflow-hidden rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[20px] lg:text-[28px] text-center font-medium leading-normal text-dark pr-[35px]'
                                >
                                    {page === 1 ? ' Password Recovery' : 'Verification'}
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={() => { closeModal(), setPage(1) }}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[20px] space-y-[20px]'>
                                    {page === 1 ?
                                        <>
                                            <CategoryRuleInput
                                                category={'Email'}
                                                placeholder='user@example.com'
                                                inputValue={email}
                                                handleChange={handleChangeValue(email, setEmail)}
                                                type='email'
                                            />
                                            {/* <div className='flex justify-center'>
                                                <ReCAPTCHA
                                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                    onChange={(e: any) => { setVerifyhuman(e); }}
                                                />
                                            </div> */}
                                        </>
                                        :
                                        <div className='flex flex-col gap-[20px]'>
                                            <div className='flex justify-center'>
                                                <OtpInput value={otp} valueLength={6} handleChange={setOtp} wrongOtpTimer={wrongOtpTimer} />
                                            </div>
                                            <CategoryRuleInput
                                                category='New Password *'
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
                                    }
                                </div>

                                <div className='mt-[20px]'>
                                    <div className='flex justify-center'>
                                        <button
                                            className='w-full whitespace-nowrap gap-[5px] md:gap-[10px] flex justify-center items-center md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] select-none cursor-pointer transition-all duration-300'
                                            onClick={ForgotPasswordHandler}
                                            disabled={isButtonDisabled()}
                                        >
                                            {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                                            </svg>}
                                            {page === 1 ? 'Verify' : 'Update'}
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}