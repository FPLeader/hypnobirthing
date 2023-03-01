

export default function QuoteSection() {

    const style = {
        QuoteIcon: 'w-[40px] md:w-[60px] lg:w-[76px] h-[30px] md:h-[46px] lg:h-[58px]'
    }
    return (
        <div className='py-[20px] md:pt-[99px] md:pb-[93px] lg:py-[120px] px-[20px]'>
            <div className='w-full flex flex-col items-center'>
                <div className='max-w-[1016px] relative'>
                    <div className='absolute top-0 left-0'>
                        < img draggable='false' src='/img/quoteleft.png' alt='' className={style.QuoteIcon} />
                    </div>
                    <div className='mt-[42px] md:mt-[23px] lg:mt-[18px] mb-[10px] md:mb-[23px] lg:mb-[29px] px-[5px] md:px-[80px] lg:px-[125px]'>
                        <div className='font-light italic text-dark text-[24px] md:text-[32px] lg:text-[38px] text-center'>
                            My dream is that every woman, everywhere will know the joy of a safe, satisfying birth, for both herself and her baby.
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        < img draggable='false' src='/img/quoteright.png' alt='' className={style.QuoteIcon} />
                    </div>
                </div>
                <div className='mt-[10px] md:mt-[7px] lg:mt-[11px] flex flex-col md:flex-row items-center justify-center'>
                    <div className='text-dark text-[14px] md:text-[16px] lg:text-[18px]'>
                        by Marie F. Mongan&nbsp;
                    </div>
                    <div className='text-dark text-[14px] md:text-[16px] lg:text-[18px]'>
                        (founder of HypnoBirthing)
                    </div>
                </div>
            </div>
        </div>
    )
}
