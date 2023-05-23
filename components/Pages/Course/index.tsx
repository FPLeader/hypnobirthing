import {
  IntroductionSection,
  AboutCourseSection,
  SubmitSection,
  FaqSection,
  RelatedCoursesSection,
  MyContactsSection,
  FeedbackSection
} from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import API from '@/services/API'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import i18n from '@/services/i18n'

interface PageProps {
  courseId: string,
}

export default function Index({
  courseId = ''
}: PageProps) {
  const moment = require('moment');
  // language option
  const lngId: number = i18n.language === 'en' ? 0 : 1;


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
    mainbody: mainbodyType[]
    ar_members: string[],
    ar_requestmembers: string[],
    ds_state: string, // 'wait', 'underreview', 'live',
    dt_upload: Date,
    dt_publish: Date,
    dt_update: Date,
  }

  interface EducatorType {
    cd_educator: string,
    ds_avatar: string,
    ar_personaltitle: string[],
    nm_user: string[],
    ds_phonenumber: string,
    ln_personalsite: string,
    ln_instagram: string,
    ln_facebook: string,
    ln_twitter: string,
    dt_updateprofile: Date
  }

  // values
  const [domLoaded, setDomLoaded] = useState<number>(-1);
  const [coursesLoaded, setCoursesLoaded] = useState<number>(-1);
  const [latestCourses, setLatestCourses] = useState<CourseType[]>([]);
  const [currentCourse, setCurrentCourse] = useState<CourseType>();
  const [currentEducator, setCurrentEducator] = useState<EducatorType>();

  // initalize
  useEffect(() => {
    if (courseId !== '') {
      setDomLoaded(0);
      setCoursesLoaded(0);
    }
  }, [courseId])

  const loadcurrentCourse = () => {
    API.post('course/getcurrentcourse', {
      id_course: courseId
    })
      .then((result: any) => {
        if (result.data.status === 'success') {
          console.log(result.data.currentCourse);
          setCurrentCourse(result.data.currentCourse);
          setDomLoaded(1);
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

  const getRelatedCourses = () => {
    // API.post('blog/getrecentblogsbycategory', {
    //   id_blog: blogId,
    //   ds_category: currentCourse?.ds_category,
    //   nm_limit: 5,
    // })
    //   .then((result: any) => {
    //     if (result.data.status === 'success') {
    //       if (result.data.blogs) {
    //         console.log(result.data.blogs);
    //         setLatestBlogs(result.data.blogs);
    //       }
    //       setBlogsLoaded(1);
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error('Something went wrong.');
    //   })
  }

  const getCurrentUserInfor = () => {
    if (currentCourse) {
      API.post('user/getcurrentuser', {
        cd_educator: currentCourse.cd_educator
      })
        .then((result: any) => {
          if (result.data.status === 'success') {
            if (result.data.currentEducator) {
              console.log(result.data.currentEducator);
              setCurrentEducator(result.data.currentEducator);
            }
            setCoursesLoaded(1);
          }
        })
        .catch((err) => {
          toast.error('Something went wrong.');
        })
    }
  }

  useEffect(() => {
    if (domLoaded === 0) {
      if (courseId !== '')
        loadcurrentCourse();
    }
  }, [domLoaded])

  useEffect(() => {
    if (coursesLoaded === 0 && domLoaded === 1) {
      getCurrentUserInfor();
      getRelatedCourses();
    }
  }, [coursesLoaded, domLoaded])


  // const currentTitle = () => {
  //   if (currentCourse)
  //     if (currentCourse.mainbody.length === 2) {
  //       return currentCourse.mainbody[lngId].ds_title;
  //     } else {
  //       return currentCourse.mainbody[0].ds_title;
  //     }
  //   return '';
  // }

  const currentDetails = () => {
    if (currentCourse)
      if (currentCourse.mainbody.length === 2) {
        return currentCourse.mainbody[lngId].ds_details;
      } else {
        return currentCourse.mainbody[0].ds_details;
      }
    return '';
  }

  const currentLngId = () => {
    if (currentCourse)
      if (currentCourse.mainbody.length === 2) {
        return lngId;
      } else {
        return currentCourse.mainbody[0].id_lng;
      }
    return 0;
  }

  const currentName = () => {
    if (currentEducator)
      if (currentEducator.nm_user[lngId] !== '')
        return currentEducator.nm_user[lngId];
      else {
        if (lngId === 0)
          return currentEducator.nm_user[1];
        else if (lngId === 1)
          return currentEducator.nm_user[0];
      }
    return '';
  }

  return (
    <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='pt-[70px] md:pt-[90px] w-full'>
      <IntroductionSection
        lngId={lngId}
        nm_user={currentName()}
        ds_location={currentCourse?.js_location.label as string}
        dt_lessons={currentCourse?.dt_lessons as Date[]}
        nu_price={currentCourse?.nu_price as number}

        cd_educator={currentEducator?.cd_educator as string}
        ds_avatar={currentEducator?.ds_avatar as string}
        ar_personaltitle={currentEducator?.ar_personaltitle as string[]}
        dt_updateprofile={currentEducator?.dt_updateprofile as Date}
      />
      <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
        <div className='w-full max-w-[1225px] mx-[20px]'>
          <div className='min-[1260px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] w-full max-md:mt-[520px] max-lg:mt-[240px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
            <AboutCourseSection
              ds_details={currentDetails()}
            />
            <SubmitSection
              lngId={lngId}
            />
            <FaqSection />
            <RelatedCoursesSection />
            <MyContactsSection
              ds_phonenumber={currentEducator?.ds_phonenumber as string}
              ln_personalsite={currentEducator?.ln_personalsite as string}
              ln_instagram={currentEducator?.ln_instagram as string}
              ln_facebook={currentEducator?.ln_facebook as string}
              ln_twitter={currentEducator?.ln_twitter as string}
            />
          </div>
        </div>
      </div>
      <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
        <FeedbackSection />
      </div>
      <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
        <PromoteBar />
      </div>
      <div className='mt-[20px] md:mt-[40px]'>
        <UpcomingClassesBar
          title='Upcoming Childbirth Classes'
          buttonText='Learn More'
          link='\upcomingcourse'
        />
      </div>
    </div>
  )
}