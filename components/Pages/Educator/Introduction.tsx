import { BadgeCard } from '@/components/Cards'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next'

interface SectionProps {
  lngId: number,
  name: string,
  personalTitle: string,
  category: string,
  avatarImage: string,
  videoUrl: string,
}

export default function Introduction({
  lngId,
  name,
  personalTitle,
  category,
  avatarImage,
  videoUrl,
}: SectionProps) {
  const { t } = useTranslation();
  const [video, setVideo] = useState<string>('');

  useEffect(() => {
    if (videoUrl !== '') {
      if (getVideoIdFromUrl(videoUrl) === null)
        setVideo(process.env.FILE_VIDEO_BASE + videoUrl);
      else
        setVideo(videoUrl);
    }
  }, [videoUrl]);

  const getVideoIdFromUrl = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/; // match the video ID in the URL
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className='w-full bg-bcg_2 pt-[20px] md:pt-[30px] lg:pt-[50px] pb-[82px]'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1225px] mx-[20px] relative'>
          <div className='min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] text-dark text-center flex flex-col gap-[8px]'>
            <div className={`lg:mt-[20px] capitalize text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[32px] md:text-[40px] lg:text-[44px] italic font-light`}>
              {name}
            </div>
            <div className={`lg:mt-[20px] capitalize text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[18px]`}>
              {personalTitle}
            </div>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex flex-col md:flex-row gap-[5px] max-md:justify-center max-md:items-center md:items-end text-[16px] md:text-[18px]'>
                <div className='text-Label'>
                  {t('Category')}:&nbsp;
                </div>
                <div className='flex gap-[5px]'>
                  <BadgeCard text={t(category)} />
                </div>
              </div>
              {/* <div className='flex flex-col text-center md:text-left md:flex-row text-[16px] md:text-[18px]'>
                <div className='text-Label whitespace-nowrap'>
                  Location:&nbsp;
                </div>
                <div>Odim (near Netanya)</div>
              </div>
            </div> */}
            </div>
            <div className={`flex flex-col md:flex-row lg:flex-col gap-[30px] max-lg:w-full absolute top-[200px] md:top-[180px] lg:top-0 ${lngId === 0 ? 'right-0' : 'left-0'}`}>
              <div className='max-md:max-w-[385px] max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center overflow-hidden border-[2px] rounded-[15px] border-beighe'>
                <div className='md:max-lg:w-[229px] w-full h-full'>
                  <img
                    draggable='false'
                    src={avatarImage === ''
                      ?
                      '/img/noavatar.png'
                      :
                      `${process.env.FILE_IMAGE_BASE + avatarImage}`
                    }
                    alt='profile'
                    className={`object-cover w-full h-full`}
                  />
                </div>
              </div>
              {video !== '' &&
                <div className='max-md:max-w-[385px] max-md:w-full max-md:m-auto lg:max-w-[385px] flex flex-col md:flex-row md:items-center '>
                  <div className='w-full h-full border-[4px] border-beighe bg-white rounded-[10px] lg:rounded-[15px] overflow-hidden relative'>
                    <div className='max-md:aspect-w-16 max-md:aspect-h-9 md:max-lg:w-[407px] md:max-lg:h-[229px] lg:aspect-w-16 lg:aspect-h-9'>
                      {
                        getVideoIdFromUrl(video) === null ?
                          <ReactPlayer
                            url={video}
                            width='100%'
                            height='100%'
                            controls={true}
                            playing={false}
                          />
                          :
                          <iframe
                            width='100%'
                            height='100%'
                            src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video)}`}
                            frameBorder={0}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            title={'About me'}
                          />
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}