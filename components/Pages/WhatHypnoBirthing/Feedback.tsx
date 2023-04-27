import { FeedbackCard } from '@/components/Cards'

interface ReviewCardType {
    numberStar: number,
    content: string[],
    name: string[],
}

interface PageProps {
    lngId: number,
    reviews: ReviewCardType[]
}

export default function Feedback({
    lngId,
    reviews
}: PageProps) {
    const style = {
        DividerWrapper: 'w-full md:w-0 flex justify-center items-center',
        DividerInner: 'w-full md:w-0 h-full md:max-h-[76px] max-w-[100px] border border-gray_1'
    }

    return (
        <div className='py-[20px] md:py-[50px] lg:py-[70px] w-full flex justify-center bg-bcg_2'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='w-full h-max grid md:grid-cols-3 justify-between gap-[20px] md:gap-[20px] lg:gap-[34px]'>
                    {reviews?.map((CardData: ReviewCardType, index: number) => (
                        <div key={index} className='flex flex-col md:flex-row gap-[20px] md:gap-[20px]'>
                            {index !== 0 && <div className={style.DividerWrapper} >
                                <div className={style.DividerInner} />
                            </div>}
                            <FeedbackCard
                                rating={CardData.numberStar}
                                content={CardData.content[lngId]}
                                name={CardData.name[lngId]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
