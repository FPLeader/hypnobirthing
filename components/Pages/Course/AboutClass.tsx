import { ExpandButton } from '@/components/Buttons'
import { useState } from 'react'
import { TechniquesData } from '@/services/Constants/Report'

export default function AboutClass() {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  return (
    <div className='flex flex-col lg:gap-[40px]'>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>About class</div>
        <div className='relative'>
          <div className={`text-[16px] lg:text-[18px] ${isOpen1 ? 'h-[130px]' : 'h-[110px]'} overflow-hidden transition-all duration-500`}>
            Come be part of a global network of calm births, spanning 46 countries around the world. A workshop that will give you meaningful tools to support women who
            In the workshop you will receive significant tools from the simple method of giving birth to support and accompany women who wish
          </div>
          <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[80px] pointer-events-none transition-opacity duration-300 ${isOpen1 ? 'opacity-0' : 'opacity-100'}`}>
          </div>
        </div>
        <div onClick={() => setIsOpen1(!isOpen1)}>
          <ExpandButton />
        </div>
      </div>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>What is included?</div>
        <div className='relative'>
          <div className={`text-[16px] lg:text-[18px] ${isOpen2 ? 'h-[130px]' : 'h-[70px]'} overflow-hidden transition-all duration-500`}>
            <ul className='list-disc pl-[30px]'>
              {TechniquesData.map((item: string, index: number) => (
                <li key={index} className='text-dark text-[16px] md:text-[18px]'>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[50px] pointer-events-none transition-opacity duration-300 ${isOpen2 ? 'opacity-0' : 'opacity-100'}`}>
          </div>
        </div>
        <div onClick={() => setIsOpen2(!isOpen2)}>
          <ExpandButton />
        </div>
      </div>
    </div >
  )
}