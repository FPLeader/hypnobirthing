import { BigCourseCard } from '@/components/Cards'
import { BigCourseCardType, BigCourseCardsData } from '@/services/Constants/CardsData'

export default function Course() {
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]'>
                {BigCourseCardsData.map((card: BigCourseCardType, index: number) => (
                    <div key={index}>
                        <BigCourseCard image={card.image} date={card.date} title={card.title} location={card.location} teacher={card.teacher} />
                    </div>
                ))}
            </div>
        </div>
    )
}