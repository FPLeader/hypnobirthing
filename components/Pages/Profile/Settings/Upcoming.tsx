import { useState, useEffect } from 'react'
import { UploadButton } from '@/components/Buttons'
import { AddSessionModal } from '@/components/Modals'
import { TypeOptions } from '@/services/Constants/SelectOptions'
import { toast } from 'react-toastify'
import API from '@/services/API'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'
import { useTranslation } from 'react-i18next'
import {
  LiveCourseCard,
  ReviewCourseCard,
  WaitCourseCard
} from '@/components/Cards'
import { SmallCourseSkeletonCard } from '@/components/Skeletons'

export default function Upcoming() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();

  const style = {
    SubTitle: 'text-[20px] lg:text-[24px] font-medium',
    GridStyle: 'grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]',
  }

  // for modal box
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // values
  const [domLoaded, setDomLoaded] = useState<number>(-1);

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

  interface EducatorItemType {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
  }

  const [educatorsList, setEducatorsList] = useState<EducatorItemType[]>([]);

  const [liveCourses, setLiveCourses] = useState<CourseType[]>([]);
  const [reviewCourses, setReviewCourses] = useState<CourseType[]>([]);
  const [waitCourses, setWaitCourses] = useState<CourseType[]>([]);

  const SetCoursesData = (allCourses: CourseType[]) => {
    console.log(allCourses, 'allCourses');
    setLiveCourses(allCourses.filter(item => item.ds_state === 'live'));
    setReviewCourses(allCourses.filter(item => item.ds_state === 'underreview'));
    setWaitCourses(allCourses.filter(item => item.ds_state === 'wait'));
    setDomLoaded(1);
  }

  const loadCourses = () => {
    console.log('loadCourses');
    API.post('course/getmycourses', {
      cd_educator: currentUser.cd_educator,
    })
      .then((result: any) => {
        if (result.data.status === 'success') {
          console.log(result.data.allCourses);
          SetCoursesData(result.data.allCourses);
        }
      })
      .catch((err) => {
        if (err.request?.response === '')
          toast.error('Something went wrong.');
        else {
          try {
            let errorMessage = JSON.parse(err.request?.response).message;
            if (errorMessage === 'jwt expired') {
              setDomLoaded(3);
            } else
              setDomLoaded(2);
          } catch (error) {
            console.error('Error parsing response:', err.request?.response);
            setDomLoaded(2);
          }
        }
      })
  }

  const getEducators = () => {
    API.post('user/geteducators', {
      cd_educator: currentUser.cd_educator,
    })
      .then((result: any) => {
        if (result.data.status === 'success') {
          console.log(result.data.educators);
          setEducatorsList(result.data.educators);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    setDomLoaded(0);
  }, [])

  useEffect(() => {
    if (domLoaded === 0) {
      getEducators();
      loadCourses();
    } else if (domLoaded === 2)
      toast.error('please reoload your page');
    else if (domLoaded === 3) {   // jwt expired
      dispatch(logout(router, '/login'));
      toast.error('Your session was expired, Log in again here.');
    }
  }, [domLoaded]);

  return (
    <div className='flex flex-col gap-[16px]'>
      {
        currentUser.ds_category === TypeOptions[0].value ?
          <>
            <AddSessionModal
              isOpen={isOpen}
              closeModal={closeModal}
              educatorsList={educatorsList}
              loadCourses={loadCourses}
            />

            <div className='text-[24px] lg:text-[28px] font-medium'>
              {
                domLoaded === 1 ?
                  `${t('Upcoming Sessions')} (${liveCourses.length})`
                  :
                  `${t('Upcoming Sessions')}`
              }
            </div>

            <div className={style.GridStyle}>
              {domLoaded === 1 ?
                <>
                  {liveCourses.map((CardData: CourseType, index: number) => (
                    <LiveCourseCard
                      key={'live-course-' + index}
                      id_course={CardData.id_course}
                      js_location={CardData.js_location}
                      dt_lessons={CardData.dt_lessons}
                      nm_user={CardData.nm_user}
                      mainbody={CardData.mainbody}
                    />
                  ))}
                  <div className='w-full min-h-[137px] flex justify-center items-center border border-beighe rounded-[10px]'>
                    <div className='w-max' onClick={openModal}>
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

            <div className={style.SubTitle}>
              {
                domLoaded === 1 ?
                  reviewCourses.length !== 0 &&
                  `${t('Under review')} (${reviewCourses.length})`
                  :
                  `${t('Under review')}`
              }
            </div>

            <div className={style.GridStyle}>
              {domLoaded === 1 ?
                reviewCourses.length !== 0 &&
                reviewCourses.map((CardData: CourseType, index: number) => (
                  <ReviewCourseCard
                    key={'review-course-' + index}
                    id_course={CardData.id_course}
                    js_location={CardData.js_location}
                    dt_lessons={CardData.dt_lessons}
                    nu_maxcouples={CardData.nu_maxcouples}
                    nu_price={CardData.nu_price}
                    nu_inventory={CardData.nu_inventory}
                    ic_extracourse={CardData.ic_extracourse}
                    nm_user={CardData.nm_user}
                    mainbody={CardData.mainbody}
                    ar_members={CardData.ar_members}
                    ar_requestmembers={CardData.ar_requestmembers}
                    educatorsList={educatorsList}
                    loadCourses={loadCourses}
                  />
                ))
                :
                Array.from({ length: 2 }, (_, index: number) => (
                  <SmallCourseSkeletonCard
                    key={`sk-review-course-${index}`}
                  />
                ))
              }
            </div>

            <div className={style.SubTitle}>
              {
                domLoaded === 1 ?
                  waitCourses.length !== 0 &&
                  `${t('Wait for response')} (${waitCourses.length})`
                  :
                  `${t('Wait for response')}`
              }
            </div>

            <div className={style.GridStyle}>
              {
                domLoaded === 1 ?
                  waitCourses.length !== 0 &&
                  waitCourses.map((CardData: CourseType, index: number) => (
                    <WaitCourseCard
                      key={'wait-course-' + index}
                      id_course={CardData.id_course}
                      js_location={CardData.js_location}
                      dt_lessons={CardData.dt_lessons}
                      nu_maxcouples={CardData.nu_maxcouples}
                      nu_price={CardData.nu_price}
                      nu_inventory={CardData.nu_inventory}
                      ic_extracourse={CardData.ic_extracourse}
                      nm_user={CardData.nm_user}
                      mainbody={CardData.mainbody}
                      ar_members={CardData.ar_members}
                      ar_requestmembers={CardData.ar_requestmembers}
                      educatorsList={educatorsList}
                      loadCourses={loadCourses}
                    />
                  ))
                  :
                  Array.from({ length: 2 }, (_, index: number) => (
                    <SmallCourseSkeletonCard
                      key={`sk-wait-course-${index}`}
                    />
                  ))
              }
            </div>
          </>
          :
          <div>
            <div className='text-[14px] lg:text-[16px]'>
              {t(`You can't see this page, because your \"Pashut Laledet Certification\" is \"Birth Professional Supports HypnoBirthing\". If you want to see this page, please update \"Pashut Laledet Certification\"`)}
            </div>
          </div>
      }
    </div>
  )
}
