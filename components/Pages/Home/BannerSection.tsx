import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CreateSlider } from '@/services/Constants/Home/BannerImages'
import { AboveFold } from './Sections'

export default function BannerSection() {

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
    // <div className='w-full relative max-md:h-[calc(100vh_-_70px)] max-md:min-h-[calc(100vw/1.86_+_221px)]'>

    return (
        <div className='w-full relative'>
            <div className='w-full relative'>
                <Carousel
                    autoPlay
                    autoPlaySpeed={3000}
                    swipeable
                    draggable
                    infinite
                    showDots
                    ssr
                    responsive={responsive}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                    shouldResetAutoplay={false}
                >
                    {CreateSlider.map((slider: string, index: number) => {
                        return (
                            <img draggable='false' key={index} src={slider} alt={'slider-image' + index} className='image-carousel w-full h-[350px] md:h-[770px] object-cover' />
                        )
                    })}
                </Carousel>
                <div className='absolute bottom-[10px] left-[20px] lg:left-[108px]'>
                    <div className='text-white text-[14px] opacity-80'>photo by Shelley Lawnikanus</div>
                </div>
            </div>
            <AboveFold />
            <style>{`
                .react-multi-carousel-dot button {
                    background: #DFD3BC80;
                    width: 48px;
                    height: 4px;
                    border: 0;
                    border-radius: 10px;
                    margin-bottom: 30px;
                }
                .react-multi-carousel-dot--active button {
                    background: #ffffff;
                    width: 48px;
                    height: 4px;
                    border: 0;
                    border-radius: 10px;
                }
                .react-multi-carousel-list {
                    display: flex;
                    align-items: stretch;
                    overflow: hidden;
                    position: relative;
                }
                @media only screen and (max-width: 768px) {
                    .react-multi-carousel-dot button {
                        width: 22px;
                        height: 4px;
                    }
                    .react-multi-carousel-dot--active button {
                        width: 22px;
                        height: 4px;
                    }
                }
            `}</style>
        </div>
    )
}
