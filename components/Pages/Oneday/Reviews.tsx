import { ReviewCard } from '@/components/Cards'

interface ReviewCardType {
    title: string[],
    content: string[],
    name: string[],
    address: string[],
    date: string[],
}


interface PageProps {
    lngId: number,
    title: string[],
    reviews: ReviewCardType[]
}

export default function Reviews({
    lngId,
    title,
    reviews
}: PageProps) {
    return (
        <div className='text-dark flex flex-col gap-[15px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {title[lngId]}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-[20px] lg:gap-[35px]'>
                {reviews.map((CardData: ReviewCardType, index: number) => (
                    <ReviewCard
                        key={index}
                        title={CardData.title[lngId]}
                        content={CardData.content[lngId]}
                        name={CardData.name[lngId]}
                        address={CardData.address[lngId]}
                        date={CardData.date[lngId]}
                    />
                ))}
            </div>
        </div>
    )
}