import { RegularButton } from '@/components/Buttons'

export default function Book() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='text-[32px] max-md:block hidden text-center font-light italic'>HypnoBirthing Book</div>
                <div className='flex flex-col items-center md:flex-row max-md:mt-[20px] gap-[20px] md:gap-[35px]'>
                    <div className='w-full md:w-1/3 lg:w-1/2 flex justify-center'>
                        <img draggable='false' src='./img/Book.png' alt='' className={`w-full max-w-[385px] ${process.env.DEV_MODE && 'blur-lg'}`} />
                    </div>
                    <div className='w-full md:w-2/3 md:w-1/2 text-dark flex flex-col gap-[20px] lg:gap-[30px]'>
                        <div className='text-[32px] max-md:hidden md:block md:text-[40px] lg:text-[44px] font-light italic'>HypnoBirthing Book</div>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='text-[16px] lg:text-[20px]'>
                                Childbirth is not something to be feared; it is a natural expression of life. In this imminently practical guide, HypnoBirthing founder Marie Mongan shatters the myth of pain as a natural accompaniment to birth. With her program that’s being successfully used worldwide, she proves that when we release the fear–a fear that keeps the body tense and closed–we will experience a gentle birth. In fact, the HypnoBirthing method greatly reduces the pain during labor; frequently eliminates the need for drugs; and shortens birthing and recovery time, allowing for a more serene birthing experience and better bonding with baby.
                            </div>
                            <div className='font-light text-[14px] opacity-60'>
                                The Hebrew translation of the book HypnoBirthing-the Mongan Method was published by Pashut Laledet in 2015 with the support of Notssa publishers in Israel.
                            </div>
                        </div>
                        <RegularButton text='buy the book' />
                    </div>
                </div>
            </div>
        </div>
    )
}