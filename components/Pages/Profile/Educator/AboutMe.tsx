import { useRouter } from 'next/router'
import { UploadButton, ExpandButton } from '@/components/Buttons'
import { useState, useEffect } from 'react'
import { BadgeCard } from '@/components/Cards'

interface SectionProps {
  aboutMe: string,
  skills: string[]
}

export default function AboutMe({
  aboutMe = '',
  skills = []
}: SectionProps) {
  const router = useRouter();
  const MIN_LENGTH = 8; // number of lines in description
  const [description, setDescription] = useState<string>(aboutMe);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [skillSet, setSkillSet] = useState<string[]>(skills);

  console.log(description);

  return (
    <div className='flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>
          About me
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='relative'>
            {
              description === '' ?
                <div className='text-[16px] lg:text-[18px] text-Label transition-all duration-500'>
                  To help students learn more about you, your curriculum vitae should include information about your reputation, personal qualities and interests.
                </div>
                :
                <>
                  <div className={`whitespace-pre-line text-[16px] lg:text-[18px] ${description.split('\n').length > MIN_LENGTH ? isOpen ? 'h-max' : 'h-[220px]' : ''} overflow-hidden transition-all duration-500`}>
                    {description}
                  </div>
                  {description.split('\n').length > MIN_LENGTH && <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[80px] pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>}
                </>
            }
          </div>
          {description === '' ?
            <div onClick={() => router.push({ pathname: '/profile/settings', query: { setting: 0 } })}>
              <UploadButton text='Add description' />
            </div>
            :
            <>
              {
                description.split('\n').length > MIN_LENGTH &&
                <div className='w-max' onClick={() => setIsOpen(!isOpen)}>
                  <ExpandButton />
                </div>
              }
            </>
          }
        </div>
      </div>
      <div className='text-dark flex flex-col gap-[16px]'>
        <div className='text-[24px] lg:text-[28px] font-medium'>My skills</div>
        <div className='flex flex-wrap gap-[16px]'>
          {skillSet.map((skill: string, index: number) => (
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