import { MemberCardType, MemberCards } from '@/services/Constants/CardsData'
import { MemberCard } from '@/components/Cards'

interface TeamProps {
    openModal?: Function,
    setId?: Function,
}

export default function Team({
    openModal,
    setId }: TeamProps) {
    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>Teachers</div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                {MemberCards.map((CardData: MemberCardType, index: number) => (
                    // <div key={index} onClick={() => { openModal(), setId(index) }}>
                    <div key={index}>
                        <MemberCard id={CardData.id} image={CardData.image} name={CardData.name} title={CardData.title} description={CardData.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}
