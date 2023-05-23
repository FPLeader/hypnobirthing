import { TeacherProfileCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface SectionProps {
  lngId: number,
  nm_user: string,
  ds_location: string,
  dt_lessons: Date[],
  nu_price: number,

  cd_educator: string,
  ds_avatar: string,
  ar_personaltitle: string[],
  dt_updateprofile: Date,
}

export default function Introduction({
  lngId,
  nm_user,
  ds_location,
  dt_lessons,
  nu_price,

  cd_educator,
  ds_avatar,
  ar_personaltitle,
  dt_updateprofile
}: SectionProps) {
  const moment = require('moment');
  const { t } = useTranslation();

  const currentPersonalTitle = () => {
    if (ar_personaltitle) {
      if (ar_personaltitle[lngId] === '') {
        if (lngId === 0)
          return ar_personaltitle[1];
        else
          return ar_personaltitle[0];
      } else
        return ar_personaltitle[lngId]
    }
    return '';
  }

  return (
    <div className='w-full bg-bcg_2 py-[20px] md:py-[30px] lg:pt-[50px] pb-[82px]'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1225px] mx-[20px] relative'>
          <div className={`min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] text-dark text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} flex flex-col gap-[8px]`}>
            <div className='lg:mt-[20px] capitalize text-[18px] underline underline-offset-4 decoration-2 decoration-beighe'>
              {nm_user}
            </div>
            <div className='text-[32px] md:text-[40px] lg:text-[44px] italic font-light'>
              Zoom Prenatal Course
            </div>
            <div className='flex flex-col gap-[8px]'>
              <div className='max-md:flex justify-center text-[16px] md:text-[18px]'>
                <span className='text-Label'>
                  Location:&nbsp;
                </span>
                <span>
                  {ds_location} / Zoom
                </span>
              </div>
              <div className={`flex flex-col text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} md:flex-row text-[16px] md:text-[18px]`}>
                <div className='text-Label whitespace-nowrap'>
                  Course start date:&nbsp;
                </div>
                <div>
                  {moment(dt_lessons?.[0]).format('dddd, MMMM D, YYYY H:mm A UTCZ')}
                </div>
              </div>
              <div className='font-medium text-[20px] md:text-[24px]'>
                ₪{nu_price?.toFixed(2)}
              </div>
            </div>
          </div>
          <div
            className={`max-lg:w-full absolute top-[270px] min-[340px]:top-[230px] md:top-[180px] lg:top-0 ${lngId === 0 ? 'right-0' : 'left-0'}`}
          >
            <TeacherProfileCard
              cd_educator={cd_educator as string}
              ds_avatar={ds_avatar}
              name={nm_user}
              title={currentPersonalTitle()}
              text={t('About the teacher')}
              date={dt_updateprofile as Date}
            />
          </div>
        </div>
      </div>
    </div>
  )
}