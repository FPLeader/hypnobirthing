import { RegularButton } from '../Buttons'
import { HomeTitle } from '../Titles'
import { useRouter } from 'next/router'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface BarProps {
  title: string,
  buttonText: string,
  link: string,
}

export default function UpcomingClassesBar({
  title,
  buttonText,
  link
}: BarProps) {
  const router = useRouter();
  // language option
  const { t } = useTranslation();
  const lngId: number = i18n.language === 'en' ? 0 : 1;

  return (
    <div className='w-full py-[20px] md:py-[80px] lg:py-[100px] bg-bcg_2 flex justify-center'>
      <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='max-w-[1225px] mx-[20px] w-full flex flex-col gap-[20px] lg:flex-row justify-between items-center'>
        <HomeTitle
          text={t(title)}
          link={link}
        />
        <div onClick={() => router.push(link)}>
          <RegularButton text={t(buttonText)} />
        </div>
      </div>
    </div>
  )
}