import { useRouter } from 'next/router'
import { BadgeCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

interface SectionProps {
  name: string,
  personalTitle: string,
  category: string,
  avatarImage: string,
  videoUrl: string,
}

export default function Introduction({
  name,
  personalTitle,
  category,
  avatarImage,
  videoUrl,
}: SectionProps) {
  const router = useRouter();

  const [image, setImage] = useState<string>('/img/editphoto1.png');
  const [video, setVideo] = useState<string>('');

  useEffect(() => {
    if (avatarImage !== '') {
      setImage(process.env.FILE_IMAGE_BASE + avatarImage);
    }
    if (videoUrl !== '') {
      if (getVideoIdFromUrl(videoUrl) === null)
        setVideo(process.env.FILE_VIDEO_BASE + videoUrl);
      else
        setVideo(videoUrl);
    }
    console.log(video)
  }, [avatarImage, videoUrl]);


  const getVideoIdFromUrl = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/; // match the video ID in the URL
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className='w-full bg-bcg_2 pt-[20px] md:pt-[30px] lg:pt-[50px] pb-[82px]'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1225px] mx-[20px] relative'>
          <div className='min-[1225px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] text-dark text-center md:text-left flex flex-col gap-[8px]'>
            <div className='lg:mt-[20px] capitalize text-center md:text-left text-[32px] md:text-[40px] lg:text-[44px] italic font-light'>
              {name}
            </div>
            <div className='lg:mt-[20px] capitalize text-center md:text-left text-[18px]'>
              {personalTitle}
            </div>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex flex-col md:flex-row gap-[5px] max-md:justify-center max-md:items-center md:items-end text-[16px] md:text-[18px]'>
                <div className='text-Label'>Category:&nbsp;</div>
                <div className='flex flex-col items-center md:flex-row gap-[7px] md:gap-[5px]'>
                  <BadgeCard text={category} />
                </div>
              </div>
            </div>
          </div>
          <div className={`lg:max-w-[385px] w-full flex flex-col max-lg:items-center md:flex-row lg:flex-col gap-[15px] lg:gap-[30px] max-lg:w-full absolute ${category.length > 1 ? 'top-[200px]' : 'top-[190px]'} md:top-[160px] lg:top-0 right-0`}>
            <div className='max-md:w-full max-md:max-w-[385px] md:max-lg:min-w-[229px] relative'>
              <div className='w-full max-w-[385px] overflow-hidden border-[4px] rounded-[15px] border-beighe'>
                <div className='aspect-w-1 aspect-h-1'>
                  <img draggable='false' src={image} alt='Edit Photo' className={`w-full h-full object-cover bg-white`} />
                </div>
              </div>
              {avatarImage === '' &&
                <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                  <div onClick={() => router.push({ pathname: '/profile/settings', query: { setting: 0 } })}>
                    <UploadButton text='add photo' />
                  </div>
                </div>
              }
            </div>
            <div className='md:max-lg:min-w-[260px] max-md:max-w-[385px] max-md:w-full lg:max-w-[385px] flex flex-col md:flex-row md:items-center'>
              <div className='w-full h-full border-[4px] border-beighe bg-white rounded-[10px] lg:rounded-[15px] overflow-hidden relative'>
                <div className='aspect-w-16 aspect-h-9'>
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
                {video === '' &&
                  <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                    <div onClick={() => router.push({ pathname: '/profile/settings', query: { setting: 0 } })}>
                      <UploadButton text='Upload video of me' type={2} />
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className='flex flex-col gap-[15px] lg:gap-[30px] text-dark'>
              <div className='max-w-[385px] px-[5px] flex flex-col gap-[15px]'>
                <div className='text-[18px]'>To get started with our service Pashut Laledet, please fill in your details:</div>
                <ul className='list-disc pl-[20px]'>
                  <li className='text-[16px] md:text-[18px]'>About me</li>
                  <li className='text-[16px] md:text-[18px]'>Photo</li>
                  <li className='text-[16px] md:text-[18px]'>Upcoming Session</li>
                </ul>
              </div>
              <button
                className={`w-full whitespace-nowrap h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] select-none cursor-pointer transition-all duration-300`}
                onClick={() => router.push('/profile/settings')}
              >
                Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}