import { UpcomingClassesBar } from '@/components/Sections'
import { RegularTitle } from '../Titles'

export default function WhatHypnoBirthing() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] mx-[20px] min-h-screen pt-[70px] md:pt-[90px]'>
                    <div className='mt-[20px] md:mt-[50px]'>
                        <RegularTitle text='Insurance Refunds' />
                        <div className='text-dark text-[16px] md:max-w-[800px] text-center md:text-left mt-[10px] md:mt-[20px]'>
                            Reimbursement for a childbirth preparation course through your health insurance “Kupat Holim”
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Find a HypnoBirthing class near me' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}