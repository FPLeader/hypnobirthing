import { MemberCardType, MemberCards } from '@/services/Constants/CardsData'
import { MemberCard } from '@/components/Cards'

interface TeamProps {
    openModal: Function,
    setId: Function,
}

export default function Team({
    openModal,
    setId }: TeamProps) {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px] text-dark flex flex-col gap-[20px] md:gap-[30px]'>
                <div className='text-[30px] md:text-[40px] lg:text-[44px] text-center font-light italic'>The Faces Behind Pashut Laledet</div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                    {MemberCards.map((CardData: MemberCardType, index: number) => (
                        <div key={index} onClick={() => { openModal(), setId(index) }}>
                            <MemberCard id={CardData.id} image={CardData.image} name={CardData.name} title={CardData.title} description={CardData.description} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}