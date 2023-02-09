import { InsuranceCard } from '../CardComponents'
import { InsuranceCardType, InsuranceCards, InsuranceText1, InsuranceText2 } from '../constants/CardsData'
import { PromoteBlogs, ComingChildBirth } from '@/components/Sections'

export default function Insurancere() {
    return (
        <>
            <div className='max-w-[1536px] m-auto min-h-screen pt-[90px]'>
                <div className='pt-[50px] relative'>
                    <div className='text-6xl font-light italic'>
                        Insurance Refunds
                    </div>
                    <div className='text-base max-w-[800px] pt-5'>
                        Reimbursement for a childbirth preparation course through your health insurance “Kupat Holim”
                    </div>
                    <div className='grid gap-y-[40px]'>
                        <div className='p-[20px] border-2 border-beighe rounded-[10px] mt-[60px]'>
                            {InsuranceText1.map((obj: string, index: number) => (
                                <li key={index} className='text-dark text-[18px]'>{obj}</li>
                            ))}
                        </div>
                        <div>
                            <div className='grid grid-cols-2 grid-flow-row gap-[35px]'>
                                {InsuranceCards.map((obj: InsuranceCardType, index) => (
                                    <InsuranceCard key={index} title={obj.title} content={obj.content} list={obj?.list} contents={obj?.contents} />
                                ))}
                            </div>
                        </div>
                        <ul className='list-disc max-w-[802px] pl-[20px]'>
                            {InsuranceText2.map((obj: string, index: number) => (
                                <li key={index} className='text-dark text-[18px]'>{obj}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='pt-[160px]'>
                        <PromoteBlogs />
                    </div>
                </div>
            </div>
            <div className='pt-[40px]'>
                <ComingChildBirth />
            </div>
        </>
    )
}