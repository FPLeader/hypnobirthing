import { useState } from 'react'
import { ExpandButton } from '@/components/Buttons'
import { BadgeCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface SectionProps {
  aboutMe: string,
  skills: string[]
}

export default function AboutMe({
  aboutMe,
  skills
}: SectionProps) {
  const { t } = useTranslation();

  const MIN_LENGTH = 1000;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-[20px] lg:gap-[40px]'>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>
          {t('About me')}
        </div>
        <div className='relative'>
          <div className={`whitespace-pre-line text-[16px] lg:text-[18px] ${aboutMe.length > MIN_LENGTH ? isOpen ? 'h-max' : 'h-[220px]' : ''} overflow-hidden transition-all duration-500`}>
            {aboutMe}
          </div>
          {
            aboutMe.length > MIN_LENGTH &&
            <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[80px] pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          }
        </div>
        {
          aboutMe.length > MIN_LENGTH &&
          <div className='w-max' onClick={() => setIsOpen(!isOpen)}>
            <ExpandButton />
          </div>
        }
      </div>

      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>
          {t('My skills')}
        </div>
        <div className='flex flex-wrap gap-[16px]'>
          {skills.map((skill: string, index: number) => (
            <div key={index}>
              <BadgeCard
                text={skill}
                type={1}
              />
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}