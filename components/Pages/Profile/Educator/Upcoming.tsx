import { useState, useEffect } from 'react'
import { UploadButton } from '@/components/Buttons'
import { AddSessionModal } from '@/components/Modals'
import { TypeOptions } from '@/services/Constants/SelectOptions'
import { toast } from 'react-toastify'
import API from '@/services/API'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/services/Hooks'
import { CourseCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'
import { SmallCourseSkeletonCard } from '@/components/Skeletons'

interface SectionProps {
  lngId: number
}

export default function Upcoming({
  lngId
}: SectionProps) {
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();

  // values
  const [domLoaded, setDomLoaded] = useState<number>(-1);
  const [liveCourses, setLiveCourses] = useState<CourseType[]>([]);
  interface locationType {
    label: string,
    place_id: string,
    lat: number,
    lng: number,
  }
  interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_details: string,
  }

  interface CourseType {
    id_course: string,
    cd_educator: string,
    js_location: locationType,
    dt_lessons: Date[],
    nu_maxcouples: number,
    nu_price: number,
    nu_inventory: number,
    ic_extracourse: boolean,
    nm_user: string[],
    mainbody: mainbodyType[],
    ar_members: string[],
    ar_requestmembers: string[],
    ds_state: string,                  // wait, underreivew, live
    // dt_update: string,
  }

  const getRelatedCourses = () => {
    if (currentUser)
      API.post('course/getrelatedcourses', {
        id_course: '',
        cd_educator: currentUser.cd_educator,
        nm_limit: 4,
      })
        .then((result: any) => {
          if (result.data.status === 'success') {
            if (result.data.courses) {
              console.log('related courses:', result.data.courses);
              setLiveCourses(result.data.courses);
            }
            setDomLoaded(1);
          }
        })
        .catch((err) => {
          toast.error('Something went wrong.');
        })
  }

  useEffect(() => {
    setDomLoaded(0);
  }, [])

  useEffect(() => {
    if (domLoaded === 0)
      getRelatedCourses();
  }, [domLoaded])

  const currentName = (nm_user: string[]) => {
    if (nm_user[lngId] !== '')
      return nm_user[lngId];
    else {
      if (lngId === 0)
        return nm_user[1];
      else if (lngId === 1)
        return nm_user[0];
    }
    return '';
  }


  const currentTitle = (value: mainbodyType[]) => {
    if (value.length === 2) {
      return value[lngId].ds_title;
    } else {
      return value[0].ds_title;
    }
  }


  return (
    <div className='flex flex-col gap-[16px] text-dark'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        {
          domLoaded === 1 ?
            `${t('Upcoming Sessions')} (${liveCourses.length})`
            :
            `${t('Upcoming Sessions')}`
        }
      </div>
      <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
        {domLoaded === 1 ?
          <>
            {liveCourses.map((card: CourseType, index: number) => (
              <CourseCard
                key={`related-course-${index}`}
                id_course={card.id_course}
                date={card.dt_lessons[0]}
                title={currentTitle(card.mainbody)}
                location={card.js_location.label}
                teacher={currentName(card.nm_user)}
              />
            ))}
            <div className='w-full min-h-[204px] flex justify-center items-center border border-beighe rounded-[10px]'>
              <div onClick={() => router.push({ pathname: '/profile/settings', query: { setting: 2 } })}>
                <UploadButton text={t('add session')} />
              </div>
            </div>
          </>
          :
          Array.from({ length: 2 }, (_, index: number) => (
            <SmallCourseSkeletonCard
              key={`sk-live-course-${index}`}
            />
          ))
        }
      </div>
    </div>
  )
}
