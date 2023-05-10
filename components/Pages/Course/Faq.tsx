import { ClassFaqData, FaqType } from '@/services/Constants/FaqData'
import { FaqItem } from '@/components/Pages/Faq/Sections'

export default function Faq() {
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>FAQ</div>
      <div className='flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
        <div className='flex flex-col gap-y-[16px]'>
          {ClassFaqData.map((obj: FaqType, index: number) => (
            <FaqItem key={index} title={obj.title} content={obj.content} />
          ))}
        </div>
      </div>
    </div>
  )
}
