import { FaqItem } from '@/components/Pages/Faq/Sections'
import {
  SkeletonFaq
} from './Sections'
import API from '@/services/API'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'


interface SectionProps {
  lngId: number
}

export default function Faq({
  lngId
}: SectionProps) {
  const { t } = useTranslation();

  interface FaqItem {
    titles: string[],
    texts: string[]
  }

  interface MainBodyType {
    faqs: FaqItem[]
  }

  const [domLoaded, setDomLoaded] = useState<number>(-1);
  const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

  useEffect(() => {
    setDomLoaded(0);
  }, [])

  const loadCurrentPageData = () => {
    API.post('contents/getcurrentpage', {
      id_page: 'faq',
    })
      .then((result: any) => {
        if (result.data.status === 'success') {
          if (result.data.currentPage) {
            console.log(result.data.currentPage);
            setPreviousMainBody(result.data.currentPage.js_mainbody);
          }
          setDomLoaded(1);
        }
      })
      .catch((err) => {
        toast.error('Something went wrong.');
      })
  }

  useEffect(() => {
    if (domLoaded === 0) {
      loadCurrentPageData();
    }
  }, [domLoaded])

  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        {t('FAQ')}
      </div>
      <div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
        {domLoaded === 1 && previousMainBody ?
          <div className='w-full flex flex-col gap-[16px]'>
            {previousMainBody.faqs.map((obj: FaqItem, index: number) => (
              <FaqItem
                key={`course-faq-${index}`}
                title={obj.titles[lngId]}
                content={obj.texts[lngId]}
              />
            ))}
          </div>
          :
          <SkeletonFaq />
        }
      </div>
    </div>
  )
}
