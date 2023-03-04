import { TechniquesData } from '@/services/Constants/Report'
import { NormalButton } from '@/components/Buttons'

export default function Techniques() {

    const style = {
        Title: 'text-dark text-center font-medium md:text-left text-[20px] md:text-[24px] lg:text-[28px]',
        Content: 'text-dark text-[16px] lg:text-[20px]',
    }
    return (
        <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
                <div className={style.Title}>Techniques of Pashut Laledet HypnoBirthing</div>
                <div className={style.Content}>This program utilizes the following techniques to help parents prepare for a positive birth experience. These include:</div>
                <ul className='list-disc pl-[30px]'>
                    {TechniquesData.map((item: string, index: number) => (
                        <li key={index} className='text-dark text-[16px] md:text-[18px]'>{item}</li>
                    ))}
                </ul>
                <div className={style.Content}>Each of these techniques will be implemented throughout the 5-week course.</div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <div className={style.Title}>Allow Pregnancy to Make Your Bond Tighter</div>
                <div className={style.Content}>HypnoBirthing classes are the perfect place to tap into the beautiful bond between you and your partner. Our exercises will help build confidence between both parties; in the partner’s ability to provide support and the birthing person’s feeling of being supported. These classes also provide time for parents to bond with their baby, and build positive excitement for the upcoming birth. This positivity and bonding will play into the birthing experience, where the baby is an active participant.</div>
            </div>
            <div className='mt-[25px]'>
                <NormalButton text='Go to courses' />
            </div>
        </div>
    )
}
