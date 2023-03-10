import { useRouter } from 'next/router'

export default function AboveFold() {
    const router = useRouter();
    // <div className='w-full max-md:h-[calc(100vh_-_70px_-_100vw/1.86)] max-md:min-h-[221px] flex items-center'></div>
    return (
        <div className='w-full flex items-center max-md:my-[30px]'>
            <div className='w-full px-[20px] m-auto md:px-0 md:absolute md:bottom-[76px] flex flex-col items-center text-center'>
                <div className='font-light italic text-[32px] md:text-[50px] lg:text-[60px] text-dark md:text-white'>Creating positive birth experiences</div>
                <div className='w-full flex flex-col items-center md:justify-center md:flex-row gap-y-[15px] gap-x-[20px] mt-[20px] lg:mt-[30px]'>
                    <div className='w-full md:w-[224px] h-[45px] md:h-[55px] lg:h-[60px] bg-beighe flex justify-center items-center rounded-[500px] cursor-pointer select-none'>
                        <div
                            className='text-dark uppercase font-medium text-[14px] md:text-[16px]'
                            onClick={() => router.push('/upcomingcourse')}
                        >I&apos;m pregnant</div>
                    </div>
                    <div className='w-full md:w-[234px] h-[45px] md:h-[55px] lg:h-[60px] bg-bcg flex justify-center items-center rounded-[500px] cursor-pointer select-none border border-beighe md:border-none'>
                        <div
                            className='text-dark uppercase font-medium text-[14px] md:text-[16px]'
                            onClick={() => router.push('/trainings')}
                        >I&apos;m A Professional</div>
                    </div>
                </div>
            </div>
        </div>
    )
}