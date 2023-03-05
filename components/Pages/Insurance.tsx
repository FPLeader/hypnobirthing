import { InsuranceCard } from '../Cards'
import { InsuranceCardType, InsuranceCards, InsuranceText1, InsuranceText2 } from '@/services/Constants/CardsData'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { RegularTitle } from '../Titles'

export default function Insurance() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] mx-[20px] min-h-screen pt-[70px] md:pt-[90px]'>
                    <div className='mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                        <RegularTitle text='Insurance Refunds' />
                        <div className='text-dark text-[16px] md:max-w-[800px] text-center md:text-left mt-[10px] md:mt-[20px]'>
                            Reimbursement for a childbirth preparation course through your health insurance “Kupat Holim”
                        </div>
                        <div className='flex flex-col mt-[20px] md:mt-[60px] gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                            <div className='p-[20px] border-[2px] border-beighe rounded-[10px]'>
                                <ul className='list-disc pl-[20px]'>
                                    {InsuranceText1.map((obj: string, index: number) => (
                                        <li key={index} className='text-dark text-[16px] md:text-[18px]'>{obj}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className='grid md:grid-cols-2 grid-flow-row gap-[20px] md:gap-[35px]'>
                                    {InsuranceCards.map((obj: InsuranceCardType, index: number) => (
                                        <InsuranceCard key={index} title={obj.title} content={obj.content} list={obj.list} contents={obj?.contents} />
                                    ))}
                                </div>
                            </div>
                            <ul className='list-disc max-w-[802px] pl-[20px]'>
                                {InsuranceText2.map((obj: string, index: number) => (
                                    <li key={index} className='text-dark text-[16px] md:text-[18px]'>{obj}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}