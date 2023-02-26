import { Banner, PromoteBlogs, ComingChildBirth } from '@/components/Sections'
import { FaqData, FaqType } from '@/services/Constants/FaqData'
import FaqItem from './FaqItem'

export default function Faq() {
    return (
        <div className='pt-[70px] md:pt-[90px]'>
            <Banner title='Frequently Asked Questions' textStyle='center' />
            <div className='max-w-[1536px] m-auto pt-[70px]'>
                <div className='max-w-[805px] grid gap-y-[16px] m-auto'>
                    {FaqData.map((obj: FaqType, index: number) => (
                        <FaqItem key={index} title={obj.title} content={obj.content} />
                    ))}
                </div>
                <div className='pt-[140px]'>
                    <PromoteBlogs />
                </div>
            </div>
            <div className='pt-[40px]'>
                <ComingChildBirth />
            </div>
        </div>
    )
}