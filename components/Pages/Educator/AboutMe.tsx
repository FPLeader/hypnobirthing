import { ExpandButton } from '@/components/Buttons'
import { useState } from 'react'

export default function AboutMe() {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);

  return (
    <div className='flex flex-col lg:gap-[40px]'>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>About me</div>
        <div className='relative'>
          <div className={`text-[16px] lg:text-[18px] ${isOpen1 ? 'h-[170px]' : 'h-[70px]'} overflow-hidden transition-all duration-500`}>
            As a mother of 3 lovely children, I have experienced a birth similar to stories you have certainly heard. After I found the HypnoBirthing method and had 2 amazing Hypnobirths, I’ve experienced a rebirth and growth as a woman and mom. I was amazed by how empowering birth can be, how much a woman can impact her birthing experience with preparation, education and trust in her body and baby, by learning relaxation techniques and creating positive mindset around the miracle of life.
          </div>
          <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[50px] pointer-events-none transition-opacity duration-300 ${isOpen1 ? 'opacity-0' : 'opacity-100'}`}>
          </div>
        </div>
        <div onClick={() => setIsOpen1(!isOpen1)}>
          <ExpandButton />
        </div>
      </div>
    </div >
  )
}