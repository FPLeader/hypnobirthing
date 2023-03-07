import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CreateSlider } from '@/services/Constants/Sections/BannerImages'

interface BannerProps {
    title: string,
    textStyle?: string,
}

export default function Banner({
    title,
    textStyle
}: BannerProps) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 768 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='w-full relative'>
            <Carousel
                autoPlay
                autoPlaySpeed={2000}
                swipeable
                draggable
                infinite
                ssr
                responsive={responsive}
                containerClass='carousel-container w-full'
                removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                shouldResetAutoplay={false}
            >
                {CreateSlider.map((slider: string, index: number) => {
                    return (
                        <img draggable='false' key={index} src={slider} alt={'slider-image' + index} className='image-carousel w-full min-h-[120px] blur-lg'/>
                    )
                })}
            </Carousel>
            <div className='h-[36px] md:h-[54px] lg:h-[70px] w-full flex justify-center items-center absolute bottom-0 bg-[#F5EBE9A6]'>
                <div className={`max-w-[1225px] mx-[20px] w-full text-dark font-light italic text-[16px] md:text-[24px] lg:text-[38px] ${textStyle === 'center' && 'text-center'}`}>
                    {title}
                </div>
            </div>
        </div>
    )
} 