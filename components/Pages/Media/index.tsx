import { useState, useEffect } from 'react'
import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { MediaCards, MediaCardType } from '@/services/Constants/CardsData'
import { BannerSkeleton } from '@/components/Skeletons'
import { RegularTitle } from '@/components/Titles'

import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { SkeletonSection } from './Sections'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard, MediaCard } from '@/components/Cards'

export default function Media() {
  const style = {
    VideoWrapper: 'w-full flex flex-col gap-[16px]',
    VideoTitle: 'text-center md:text-left font-medium text-[16px] md:text-[24px] text-dark',
  }
  // language option
  const lngId: number = i18n.language === 'en' ? 0 : 1;


  interface MainBodyType {
    pageTitle: string[],
    topImageUrl: string,
    fileName1: string,
    fileName2: string,
    imageTitle1: string[],
    imageTitle2: string[]
  }

  const [domLoaded, setDomLoaded] = useState<number>(-1);
  const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

  useEffect(() => {
    setDomLoaded(0);
  }, [])

  const loadCurrentPageData = () => {
    API.post('contents/getcurrentpage', {
      id_page: 'media',
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
    <div className='pt-[70px] md:pt-[90px] w-full'>
      {domLoaded === 1 && previousMainBody ?
        <Banner image={process.env.FILE_IMAGE_BASE + previousMainBody.topImageUrl} />
        :
        <BannerSkeleton />
      }
      <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex justify-center'>
        <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full max-w-[1225px] px-[20px]'>
          {domLoaded === 1 && previousMainBody ?
            <>
              <RegularTitle
                lngId={lngId}
                text={previousMainBody.pageTitle[lngId]}
              />
              <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px] items-center'>
                <div className={style.VideoWrapper}>
                  {
                    isImageOrVideoOrYoutube(previousMainBody.fileName1) === 'image'
                      ?
                      <>
                        <img
                          draggable='false'
                          src={process.env.FILE_IMAGE_BASE + previousMainBody.fileName1}
                          alt=''
                          className={`w-full h-full min-h-[200px] max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                        />
                        <div className={`text-white text-[16px] lg:text-[18px] absolute top-[15px] lg:top-[20px] ${lngId === 0 ? 'left-[15px] lg:left-[25px]' : 'right-[15px] lg:right-[25px]'}`}>
                          {previousMainBody.imageTitle1[lngId]}
                        </div>
                      </>
                      :
                      <div className='w-full'>
                        <div className='min-h-[200px] max-w-[800px] m-auto'>
                          <div className='aspect-w-16 aspect-h-9'>
                            <VideoCard
                              title={previousMainBody.imageTitle1[lngId]}
                              videoUrl={previousMainBody.fileName1}
                              style='min-h-[200px] max-h-[480px]'
                            />
                          </div>
                        </div>
                      </div>
                  }
                  <div className={style.VideoTitle}>
                    {previousMainBody.imageTitle1[lngId]}
                  </div>
                </div>
                <div className={style.VideoWrapper}>
                  {
                    isImageOrVideoOrYoutube(previousMainBody.fileName2) === 'image'
                      ?
                      <>
                        <img
                          draggable='false'
                          src={process.env.FILE_IMAGE_BASE + previousMainBody.fileName2}
                          alt=''
                          className={`w-full h-full min-h-[200px] max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                        />
                        <div className={`text-white text-[16px] lg:text-[18px] absolute top-[15px] lg:top-[20px] ${lngId === 0 ? 'left-[15px] lg:left-[25px]' : 'right-[15px] lg:right-[25px]'}`}>
                          {previousMainBody.imageTitle2[lngId]}
                        </div>
                      </>
                      :
                      <div className='w-full'>
                        <div className='min-h-[200px] max-w-[800px] m-auto'>
                          <div className='aspect-w-16 aspect-h-9'>
                            <VideoCard
                              title={previousMainBody.imageTitle2[lngId]}
                              videoUrl={previousMainBody.fileName2}
                              style='min-h-[200px] max-h-[480px]'
                            />
                          </div>
                        </div>
                      </div>
                  }
                  <div className={style.VideoTitle}>
                    {previousMainBody.imageTitle2[lngId]}
                  </div>
                </div>
              </div>
              <div className='mt-[20px] md:mt-[30px] flex flex-col gap-[20px] md:gap-[30px]'>
                {MediaCards.map((CardData: MediaCardType, index: number) => (
                  <div key={index} className='w-full' >
                    <MediaCard image={CardData.image} url={CardData.url} title={CardData.title} content={CardData.content} />
                  </div>
                ))}
              </div>
            </>
            :
            <SkeletonSection />
          }
        </div>
      </div>
      <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
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