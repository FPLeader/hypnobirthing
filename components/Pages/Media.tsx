import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { VideoCard, MediaCard } from '@/components/Cards'
import { MediaCards, MediaCardType } from '@/services/Constants/CardsData'

export default function Media() {
  const style = {
    VideoWrapper: 'w-full flex flex-col gap-[16px]',
    VideoTitle: 'text-center md:text-left font-medium text-[16px] md:text-[24px] text-dark',
  }
  
  return (
    <div className='pt-[70px] md:pt-[90px] w-full'>
      <Banner title='Media' image='/img/banner6.png' />
      <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex justify-center'>
        <div className='w-full max-w-[1225px] px-[20px]'>
          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
            <div className={style.VideoWrapper}>
              <VideoCard title={`Meghan Markle&apos;s birth preparation course`} videoUrl='YGxKPJDzok8' style='w-full aspect-w-16 aspect-h-9' />
              <div className={style.VideoTitle}>Meghan Markle&apos;s birth preparation course</div>
            </div>
            <div className={style.VideoWrapper}>
              <VideoCard title={`Pashut Laledet HypnoBirthing — Paula Aji`} videoUrl='H-de2tLu9Xo' style='w-full aspect-w-16 aspect-h-9' />
              <div className={style.VideoTitle}>Pashut Laledet HypnoBirthing — Paula Aji</div>
            </div>
          </div>
          <div className='mt-[20px] md:mt-[30px] flex flex-col gap-[20px] md:gap-[30px]'>
            {MediaCards.map((CardData: MediaCardType, index: number) => (
              <div key={index} className='w-full' >
                <MediaCard image={CardData.image} url={CardData.url} title={CardData.title} content={CardData.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
        <PromoteBar />
      </div>
      <div className='mt-[20px] md:mt-[40px]'>
        <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
      </div>
    </div>
  )
}