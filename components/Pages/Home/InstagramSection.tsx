import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { InstaCard } from '@/components/Cards'
import { InstagramIcon } from '@/assests/Icons'


export default function InstagramSection() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 1
    }
  };

  return (
    <div className='w-full'>
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        swipeable
        draggable={false}
        infinite
        ssr
        responsive={responsive}
        containerClass='carousel-container w-full'
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        shouldResetAutoplay={false}
      >
        <InstaCard image='img/insta1.png' link='https://asdf.com' />
        <InstaCard image='img/insta2.png' link='https://asdf.com' />
        <div className='w-full h-full p-[2px] flex flex-col justify-center items-center gap-y-[10px] bg-bcg_2'>
          <div className='opacity-20'>
            <InstagramIcon width={36} height={36} color='gray' />
          </div>
          <div className='text-dark text-[12px] md:text-[18px] lg:text-[28px] font-light italic'>We&apos;re on Instagram</div>
          <div className='text-dark text-[10px] md:text-[12px] lg:text-[14px] font-semibold'>@pashutlaledet</div>
        </div>
        <InstaCard image='img/insta3.png' link='https://asdf.com' />
        <InstaCard image='img/insta4.png' link='https://asdf.com' />
      </Carousel>
    </div>
  )
}