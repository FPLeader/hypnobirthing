import { useState } from 'react'
import { useRouter } from 'next/router'
import { CategoryInput } from '../Inputs'
import { CategorySelect } from '../Select'
import { SelectProfile } from '@/services/Constants/SelectOptions'

export default function SignUp() {
    const router = useRouter()
    const [CheckOne, setCheckOne] = useState<boolean>(false);
    const [CheckTwo, setCheckTwo] = useState<boolean>(false);

    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2',
        LinkStyle: 'text-dark text-[14px] font-medium underline underline-offset-4 decoration decoration-dark'
    }

    const SignUpFunction = () => {
        if (CheckOne && CheckTwo) {
            router.push('/profile/educator');
        }
    }

    return (
        <div className='pt-[70px] lg:pt-[90px] min-h-screen w-full flex justify-center items-center'>
            <div className='w-full mx-[20px] my-[40px] max-w-[700px] p-[20px] md:p-[30px] lg:p-[40px] bg-bcg_2 rounded-[20px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-center text-dark font-medium text-[26px] lg:text-[32px]'>Sign up</div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='grid md:grid-cols-2 gap-[10px]'>
                            <CategoryInput
                                category='First name'
                                placeholder='Enter your name'
                                type='text'
                            />
                            <CategoryInput
                                category='Last name'
                                placeholder='Enter your name'
                                type='text'
                            />
                            <CategoryInput
                                category='Phone number'
                                placeholder='Enter your name'
                                type='text'
                            />
                            <CategoryInput
                                category='Email'
                                placeholder='user@example.com'
                                type='text'
                            />
                        </div>
                        <CategoryInput
                            category='Password'
                            placeholder='Password (8 or more characters)'
                            type='password'
                        />
                        <CategorySelect
                            category='Pashut Laledet Cerification'
                            selectItems={SelectProfile}
                        />
                        <CategoryInput
                            category='Core competence'
                            placeholder='Example: Modern Applied Psychology & Personal Development'
                            type='text'
                        />
                    </div>
                    <div className='flex flex-col gap-[17px]'>
                        <div className='flex items-center'>
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
                        </div>
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
                                <label htmlFor='checkbox-two' className='text-dark text-[14px]'>
                                    I agree with the <a href='#' className={style.LinkStyle}>Terms of Service</a>, including the <a href='#' className={style.LinkStyle}>User Agreement</a> and Privacy Policy.
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        className='w-full whitespace-nowrap h-max text-center py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] transition-all duration-300'
                        onClick={() => SignUpFunction()}
                        disabled={!(CheckOne && CheckTwo)}
                    >
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