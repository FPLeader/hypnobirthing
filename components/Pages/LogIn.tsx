import { useRouter } from 'next/router'
import { CategoryInput } from '../Inputs'

export default function LogIn() {
    const router = useRouter()

    const style = {
        CheckBox: 'appearance-none bg-white w-[26px] h-[26px] text-beighe bg-gray-100 border-Label rounded checked:bg-beighe focus:ring-0',
        LinkStyle: 'text-dark text-[14px] font-medium underline underline-offset-4 decoration decoration-dark'
    }

    const LogInFunction = () => {
        router.push('/');
    }

    return (
        <div className='pt-[70px] lg:pt-[90px] min-h-screen w-full flex justify-center items-center'>
            <div className='w-full mx-[20px] my-[40px] max-w-[600px] p-[20px] md:p-[30px] lg:p-[40px] bg-bcg_2 rounded-[20px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-center text-dark font-medium text-[26px] lg:text-[32px]'>Log In</div>
                    <div className='flex flex-col gap-[10px]'>
                        <CategoryInput
                            category='Email'
                            placeholder='user@example.com'
                            type='email'
                        />
                        <CategoryInput
                            category='Password'
                            placeholder='Password (8 or more characters)'
                            type='password'
                        />
                    </div>
                    <button
                        className='w-full whitespace-nowrap h-max text-center py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] transition-all duration-300'
                        onClick={() => LogInFunction()}
                    >
                        Log In
                    </button>
                    <div className='flex flex-col sm:flex-row gap-[5px] sm:gap-[10px] justify-center items-center text-dark text-[14px]'>
                        <div className='opacity-50'>Not yet a member?</div>
                        <div
                            className='select-none cursor-pointer'
                            onClick={() => router.push('/signup')}
                        >
                            Create a free account
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
} 
