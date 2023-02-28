import React from 'react'
import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { VideoCard, MediaCard } from '@/components/Cards'
import { MediaCards, MediaCardType } from '@/services/Constants/CardsData'

export default function Media() {

  const style = {
    VideoWrapper: 'w-full flex flex-col gap-[16px]',
    VideoTitle: 'text-center md:text-left font-medium text-[24px] text-dark',
  }
  return (
    <div className='pt-[70px] md:pt-[90px] w-full'>
      <Banner title='Hypnobirthing Media' textStyle='center' />
      <div className='mt-[20px] md:mt-[70px] flex justify-center w-full'>
        <div className='max-w-[1225px] mx-[20px] w-full'>
          <div className='flex flex-col md:flex-row gap-[35px]'>
            <div className={style.VideoWrapper}>
              <VideoCard title={`Meghan Markle&apos;s birth preparation course`} code='YGxKPJDzok8' style='w-full h-[346px]' />
              <div className={style.VideoTitle}>Meghan Markle&apos;s birth preparation course</div>
            </div>
            <div className={style.VideoWrapper}>
              <VideoCard title={`Pashut Laledet HypnoBirthing — Paula Aji`} code='H-de2tLu9Xo' style='w-full h-[346px]' />
              <div className={style.VideoTitle}>Pashut Laledet HypnoBirthing — Paula Aji</div>
            </div>
          </div>
          <div className='mt-[20px] md:mt-[30px] flex flex-col gap-[20px] md:gap-[30px]'>
            {MediaCards.map((CardData: MediaCardType, index: number) => (
              <div key={index}>
                <MediaCard image={CardData.image} url={CardData.url} title={CardData.title} content={CardData.content} />
              </div>
            ))}
          </div>
          <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
            <PromoteBar />
          </div>
        </div>
      </div>
      <div className='mt-[20px] md:mt-[40px]'>
        <UpcomingClassesBar />
      </div>
    </div>
  )
}