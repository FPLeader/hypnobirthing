import { FullButton } from '@/components/Buttons'

export default function Question() {
    return (
        <div className='w-full md:min-w-[300px] lg:min-w-[385px]'>
            <div className='relative w-full'>
                <img draggable='false' src='/img/faq.png' alt='question' className={`w-full h-full object-cover ${process.env.DEV_MODE ? 'blur-lg':''}`} />
                <div className='absolute bottom-[15px] right-[15px] text-[14px] md:text-[18px] rounded-[10px] text-white opacity-80'>photo by Shelley Lawnikanus</div>
            </div>
            <div className='mt-[20px] md:mt-[30px] p-[20px] md:p-[25px] border border-beighe rounded-[10px]'>
                <div className='flex flex-col gap-[15px] text-center'>
                    <div className='text-[26px] lg:text-[32px] italic font-light'>Any questions?</div>
                    <div className='text-[16px] md:text-[18px]'>If you don&apos;t find what you&apos;re looking for, please email us and we&apos;ll get back to you!</div>
                    <FullButton text='Contact Form' />
                </div>
            </div>
        </div>
    )
}
