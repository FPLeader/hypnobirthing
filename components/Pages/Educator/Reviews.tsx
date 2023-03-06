import { ReviewCard } from '@/components/Cards'
import { SupportReviewCards, ReviewCardType } from '@/services/Constants/CardsData'

export default function Reviews() {
    return (
        <div className='text-dark flex flex-col gap-[15px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>Reviews</div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-[20px] lg:gap-[35px]'>
                {SupportReviewCards.map((CardData: ReviewCardType, index: number) => (
                    <ReviewCard key={index} title={CardData.title} content={CardData.content} name={CardData.name} address={CardData.address} date={0} />
                ))}
            </div>
        </div>
    )
}