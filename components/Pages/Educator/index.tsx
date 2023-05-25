import {
  IntroductionSection,
  AboutMeSection,
  UpcomingSection,
  MyAritclesSection,
  MyContactsSection,
  SkeletonIntroduction,
  SkeletonAboutMe,
  SkeletonRelated,
  SkeletonMyConatcts,
  SkeletonMyArticles
} from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import API from '@/services/API'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import i18n from '@/services/i18n'

interface PageProps {
  educatorId: string,
}

export default function Index({
  educatorId
}: PageProps) {
  // language option
  const lngId: number = i18n.language === 'en' ? 0 : 1;

  interface EducatorType {
    cd_educator: string,
    ds_avatar: string,
    ds_video: string,
    ds_category: string,
    ar_aboutme: string[],
    ar_skills: string[],
    ar_personaltitle: string[],
    nm_user: string[],
    ds_phonenumber: string,
    ln_personalsite: string,
    ln_instagram: string,
    ln_facebook: string,
    ln_twitter: string,
    dt_updateprofile: Date
  }

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

  interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
  }

  interface BlogType {
    id_blog: string,
    cd_educator: string,
    ds_state: string,
    dt_upload: Date,
    dt_publish: Date,
    ds_thumbnail: string,
    nm_user: string[],
    ds_category: string,
    mainbody: mainbodyType[]
  }

  // values
  const [domLoaded, setDomLoaded] = useState<number>(-1);
  const [relatedLoaded, setRelatedLoaded] = useState<number>(-1);
  const [blogsLoaded, setBlogsLoaded] = useState<number>(-1);
  const [myBlogs, setMyBlogs] = useState<BlogType[]>([]);
  const [relatedCourses, setRelatedCourses] = useState<CourseType[]>([]);
  const [currentEducator, setCurrentEducator] = useState<EducatorType>();

  // initalize
  useEffect(() => {
    if (educatorId !== '') {
      setDomLoaded(0);
      setRelatedLoaded(0);
      setBlogsLoaded(0);
    }
  }, [educatorId])

  const getRelatedCourses = () => {
    if (currentEducator)
      API.post('course/getrelatedcourses', {
        id_course: '',
        cd_educator: currentEducator?.cd_educator,
        nm_limit: 4,
      })
        .then((result: any) => {
          if (result.data.status === 'success') {
            if (result.data.courses) {
              console.log('related courses:', result.data.courses);
              setRelatedCourses(result.data.courses);
            }
            setRelatedLoaded(1);
          }
        })
        .catch((err) => {
          toast.error('Something went wrong.');
        })
  }


  const getMyBlogs = () => {
    if (currentEducator)
      API.post('blog/geteducatorblogs', {
        cd_educator: currentEducator?.cd_educator,
        nm_limit: 4,
      })
        .then((result: any) => {
          if (result.data.status === 'success') {
            if (result.data.blogs) {
              console.log('My articles:', result.data.blogs);
              setMyBlogs(result.data.blogs);
            }
            setBlogsLoaded(1);
          }
        })
        .catch((err) => {
          toast.error('Something went wrong.');
        })
  }

  const getCurrentUserInfor = () => {
    API.post('user/getcurrentuser', {
      cd_educator: educatorId
    })
      .then((result: any) => {
        if (result.data.status === 'success') {
          if (result.data.currentEducator) {
            console.log(result.data.currentEducator);
            setCurrentEducator(result.data.currentEducator);
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
      if (educatorId !== '')
        getCurrentUserInfor();
    }
  }, [domLoaded])

  useEffect(() => {
    if (domLoaded === 1) {
      if (relatedLoaded === 0)
        getRelatedCourses();
      if (blogsLoaded === 0)
        getMyBlogs();
    }
  }, [domLoaded, relatedLoaded, blogsLoaded])

  const currentString = (value: string[]) => {
    if (value[lngId] !== '')
      return value[lngId];
    else {
      if (lngId === 0)
        return value[1];
      else if (lngId === 1)
        return value[0];
    }
  }

  return (
    <div
      dir={lngId === 0 ? 'ltr' : 'rtl'}
      className='pt-[70px] md:pt-[90px] w-full'
    >
      {domLoaded === 1 && currentEducator
        ?
        <IntroductionSection
          lngId={lngId}
          name={currentString(currentEducator.nm_user) as string}
          personalTitle={currentString(currentEducator.ar_personaltitle) as string}
          category={currentEducator.ds_category}
          avatarImage={currentEducator.ds_avatar}
          videoUrl={currentEducator.ds_video}
        />
        :
        <SkeletonIntroduction
          lngId={lngId}
        />
      }
      <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
        <div className='w-full max-w-[1225px] mx-[20px]'>
          <div
            className={`min-[1260px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] w-full
              ${domLoaded === 1 ? currentEducator && currentEducator.ds_video !== '' ? 'max-md:mt-[600px]' : 'max-md:mt-[360px]' : ''}
              ${domLoaded === 1 && 'max-lg:mt-[240px]'}
              flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]`}
          >
            {domLoaded === 1 && currentEducator
              ?
              <AboutMeSection
                aboutMe={currentString(currentEducator.ar_aboutme) as string}
                skills={currentEducator.ar_skills}
              />
              :
              <SkeletonAboutMe />
            }
            {
              relatedLoaded === 1 && relatedCourses ?
                <UpcomingSection
                  lngId={lngId}
                  relatedCourses={relatedCourses}
                />
                :
                <SkeletonRelated />
            }
            {
              blogsLoaded === 1 && myBlogs ?
                <MyAritclesSection
                  myBlogs={myBlogs}
                />
                :
                <SkeletonMyArticles />
            }
            {domLoaded === 1 && currentEducator
              ?
              <MyContactsSection
                ds_phonenumber={currentEducator?.ds_phonenumber as string}
                ln_personalsite={currentEducator?.ln_personalsite as string}
                ln_instagram={currentEducator?.ln_instagram as string}
                ln_facebook={currentEducator?.ln_facebook as string}
                ln_twitter={currentEducator?.ln_twitter as string}
              />
              :
              <SkeletonMyConatcts />
            }
          </div>
        </div>
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