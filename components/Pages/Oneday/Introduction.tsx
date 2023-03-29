import { MiddleButton } from '@/components/Buttons'

export default function Introduction() {
    return (
        <div className='flex flex-col-reverse items-center lg:flex-row gap-[15px] lg:gap-[35px]'>
            <div className='w-full lg:w-1/2 text-dark flex flex-col gap-[15px] lg:gap-[20px]'>
                <div className='hidden lg:block text-[30px] md:text-[40px] lg:text-[44px] text-center md:text-left font-light italic'>Birth Professionals Support HypnoBirthing — One Day Workshop</div>
                <div className='text-[16px] md:text-[18px] lg:text-[20px] text-center md:text-left'>Learn the philosophy and techniques to Support Families with HypnoBirthing</div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='max-md:flex justify-center text-[16px] md:text-[18px]'>
                        <span className='text-Label'>Location:&nbsp;</span>
                        <span>Rehovot / Zoom</span>
                    </div>
                    <div className='flex flex-col text-center md:text-left md:flex-row text-[16px] md:text-[18px]'>
                        <div className='text-Label whitespace-nowrap'>Estimated date:&nbsp;</div>
                        <div>June 25, 2023, 5:00 pm — September 21, 2023, 7:30 pm</div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[15px] md:gap-[20px]'>
                    <MiddleButton text='to register' link='/register' />
                    <MiddleButton text='contact us' type={1} link='/contact' />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-[15px]'>
                <div className='block lg:hidden text-[30px] md:text-[40px] lg:text-[44px] text-center md:text-left font-light italic'>Birth Professionals Support HypnoBirthing — One Day Workshop</div>
                <img draggable='false' src='\img\support1.png' alt='' className={`w-full rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`} />
            </div>
        </div>
    )
}
