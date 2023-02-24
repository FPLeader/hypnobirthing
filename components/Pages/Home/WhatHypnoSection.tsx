import { RegularButton } from '@/components/Buttons'
import { HomeTitle } from '@/components/Titles'

export default function WhatHypnoSection() {
    return (
        <div className='pt-[57px] pb-[60px] md:py-[80px] lg:py-[160px] w-full flex justify-center'>
            <div className='max-w-[1536px] mx-[20px] w-full'>
                <div className='block md:hidden'>
                    <HomeTitle text='What is HypnoBirthing' />
                </div>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-x-[70px]'>
                    <div className='w-full md:w-7/12'>
                        <div className='hidden md:block'>
                            <HomeTitle text='What is HypnoBirthing' />
                        </div>
                        <div className='mt-[25px] md:mt-[50px] text-dark text-[16px] lg:text-[22px]'>
                            <div>HypnoBirthing® is a natural approach to a safe, easier, more comfortable birthing. By learning to release fear and consequently releasing physical tension, the birth experience can be gentle and empowering.
                            </div>
                            <br />
                            <div>
                                This is a program of childbirth preparation which can give you practical techniques, exercises, and guidance, to relax your mind in order to let your body do its job.
                            </div>
                            <br />
                            <div>
                                We teach a range of relaxation techniques such as guided imagery, breathing, meditation, birthing positions, and touch. In addition we focus on communication- with yourself, your baby, your family, and with your caregivers. You and your partner will learn to focus inwards...
                            </div>
                        </div>
                        <div className='mt-[25px] md:mt-[30px] lg:mt-[40px]'>
                            <RegularButton text='Read more' />
                        </div>
                    </div>
                    <div className='mt-[30px] md:mt-0 relative w-full md:w-5/12'>
                        <img src='/img/whathypno.png' alt='' className='w-full' />
                        <div className='absolute bottom-[10px] right-[11.5px] text-white'>photo by Shelley Lawnikanus</div>
                    </div>
                </div>
            </div >
        </div>
    )
}