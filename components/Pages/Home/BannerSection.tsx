import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CreateSlider } from '@/services/Constants/Home/BannerImages';

export default function BannerSection() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='w-full relative'>
            <div className='w-full relative'>
                <Carousel
                    autoPlay
                    autoPlaySpeed={3000}
                    swipeable
                    draggable
                    infinite
                    ssr
                    responsive={responsive}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                    shouldResetAutoplay={false}
                >
                    {CreateSlider.map((slider: string, index: number) => {
                        return (
                            <img key={index} src={slider} alt={'slider-image' + index} className='image-carousel w-full' draggable={false} />
                        )
                    })}
                </Carousel>
                <div className='absolute bottom-[10px] left-[20px] lg:left-[108px]'>
                    <div className='text-white text-[14px]'>photo by Shelley Lawnikanus</div>
                </div>
            </div>
            <div className='w-full px-[20px] hidden md:px-0 mt-[20px] md:absolute md:bottom-[76px] md:flex flex-col items-center text-center'>
                <div className='font-light italic text-[32px] md:text-[50px] lg:text-[60px] text-dark md:text-white'>Creating positive birth experiences</div>
                <div className='w-full flex flex-col items-center md:justify-center md:flex-row gap-y-[15px] gap-x-[20px] mt-[20px] lg:mt-[30px]'>
                    <div className='w-full md:w-[224px] h-[45px] md:h-[55px] lg:h-[60px] bg-beighe flex justify-center items-center rounded-[500px] cursor-pointer select-none'>
                        <div className='text-dark uppercase font-medium text-[14px] md:text-[16px]'>I&apos;m pregnant</div>
                    </div>
                    <div className='w-full md:w-[234px] h-[45px] md:h-[55px] lg:h-[60px] bg-bcg flex justify-center items-center rounded-[500px] cursor-pointer select-none border-[1px] border-beighe md:border-none'>
                        <div className='text-dark uppercase font-medium text-[14px] md:text-[16px]'>I&apos;m A Professional</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
