import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/services/Hooks'
import { OtpInput } from '@/components/Inputs'
import API from '@/services/API'
import { toast } from 'react-toastify'

export default function ValidateCode() {
    const router = useRouter();
    const { tempUser } = useAppSelector((state) => state.auth);
    const [isTempUser, setIsTempUser] = useState<boolean>(true);
    const [otp, setOtp] = useState<string>('');
    const [loadingOpen, setLoadingOpen] = useState(false);
    const [sendLimit, setSendLimit] = useState<number>(5);

    useEffect(() => {
        if (tempUser === '') {
            router.push('/login');
            setIsTempUser(false);
        }
    }, []);

    // timer
    const [timer, setTimer] = useState<number>(30);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback]);

    const resetTimer = function (seconds: number) {
        if (!timer) {
            setTimer(seconds);
        }
    };

    // wrong otp timer
    const [wrongOtpTimer, setWrongOtpTimer] = useState<number>(0);
    const wrongOtpTimeOutCallback = useCallback(() => setWrongOtpTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
        wrongOtpTimer > 0 && setTimeout(wrongOtpTimeOutCallback, 1000);
    }, [wrongOtpTimer, wrongOtpTimeOutCallback]);


    const SubmitCode = () => {
        setSendLimit(sendLimit - 1);
        setLoadingOpen(true);
        if (sendLimit === 0) {
            router.push('/signup');
            toast.error(`We can't verify your email, please use another email to sign up.`);
        } else {
            let url = '';
            url = 'auth/verification';

            API.post(url, {
                email: tempUser,
                code: otp
            })
                .then((result) => {
                    if (result.data.status === 'success') {
                        toast.success('Your profile has been successfully created.');
                        router.push('/login');
                        setLoadingOpen(false);
                    }
                })
                .catch((err) => {
                    try {
                        let errorMessage = JSON.parse(err.request.response).message;
                        if (errorMessage === 'Incorrect Code.') {
                            toast.error('Incorrect Code.')
                        } else if (errorMessage === 'Expired Code.') {
                            toast.error('Expired Code.');
                        }
                    } catch (error) {
                        console.error('Error parsing response:', err.request.response);
                        toast.error('Something went wrong.');
                    }
                    setWrongOtpTimer(3);
                    setLoadingOpen(false);
                });
        }
    }

    const ResendCode = () => {
        if (!timer) {
            API.post('auth/resend', {
                ds_email: tempUser,
            })
                .then((result) => {
                    if (result.data.status === 'success') {
                        toast.success('Check the code has been sent to your email.');
                    }
                })
                .catch((err) => {
                    toast.error('Something went wrong.');
                })
            resetTimer(30);
        }
    }

    return (
        <div className='pt-[70px] lg:pt-[90px] min-h-screen w-full flex justify-center items-center'>
            {isTempUser &&
                <div className='w-full mx-[20px] my-[40px] max-w-[600px] p-[20px] md:p-[30px] lg:p-[40px] bg-bcg_2 rounded-[20px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='text-center text-dark font-medium text-[26px] lg:text-[32px]'>Verification</div>
                        <div className='text-center text-dark text-[16px] lg:text-[22px]'>
                            One last step to get your free account, please enter the verification code sent to your email
                        </div>
                        <div className='flex justify-center'>
                            <OtpInput value={otp} valueLength={6} handleChange={setOtp} wrongOtpTimer={wrongOtpTimer} />
                        </div>
                        <label htmlFor='checkbox-two' className='text-dark text-[14px] md:text-[16px] flex flex-col md:flex-row justify-center items-center'>
                            Didn't get it?&nbsp;
                            <button
                                className={`font-medium underline underline-offset-4 decoration decoration-dark ${timer > 0 ? 'opacity-50' : 'opacity-100'}`}
                                onClick={ResendCode}
                                disabled={timer > 0}
                            >Resend via Email{timer > 0 && ` in ${timer}s`}</button>
                        </label>
                        <button
                            className='w-full whitespace-nowrap h-max gap-[5px] md:gap-[10px] flex justify-center items-center text-center py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] transition-all duration-300'
                            onClick={SubmitCode}
                            disabled={!(otp.substr(5) !== ' ' && otp.length == 6)}
                        >
                            {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                            </svg>}
                            Submit
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
