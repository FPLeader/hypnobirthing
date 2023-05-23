import { useState } from 'react';
import { CategoryInput, TextareaNormal } from '@/components/Inputs'
import { RegularButton } from '@/components/Buttons'
import { useTranslation } from 'react-i18next'

interface SubmitProps {
  lngId: number
}

export default function Submit({
  lngId
}: SubmitProps) {
  const { t } = useTranslation();

  // contact form
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comments, setComments] = useState<string>('');

  return (
    <div dir={lngId == 0 ? 'ltr' : 'rtl'}>
      <div className='bg-bcg_2 p-[20px] lg:p-[30px] rounded-[10px] flex flex-col gap-[20px]'>
        <div className={`text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[24px] lg:text-[28px] font-medium`}>
          {t('Sign Up Now')}
        </div>
        <div className='flex flex-col gap-[10px]'>
          <div className='grid md:grid-cols-2 gap-[10px]'>
            <CategoryInput
              category={t('Full name')}
              placeholder={t('Enter your name')}
              inputValue={name}
              handleChange={setName}
            />
            <CategoryInput
              category={t('Phone number')}
              type='number'
              placeholder='+972'
              inputValue={number}
              handleChange={setNumber}
            />
            <CategoryInput
              category={t('Email')}
              placeholder='user@example.com'
              inputValue={email}
              handleChange={setEmail}
            />
          </div>
          <TextareaNormal
            category={t('Comments') as string}
            placeholder='Enter text here'
            inputValue={comments}
            handleChange={setComments}
            lngId={lngId}
          />
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-[20px]'>
          <RegularButton text={t('register')} />
          <div className='text-center md:text-left text-Label text-[14px]'>
            By clicking &quot;send&quot; you accept our Terms & Conditions and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  )
}
