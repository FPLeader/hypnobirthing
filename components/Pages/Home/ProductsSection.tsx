import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { ProductCards, ProductCardType } from '@/services/Constants/Home/ProductCardsData'
import { ProductCard } from '@/components/Cards';

export default function ProductsSection() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className='py-[20px] md:py-[80px] lg:py-[100px] mx-[20px] flex justify-center'>
      <div className='max-w-[1536px] w-full'>
        <div className='md:flex md:justify-between md:items-end w-full'>
          <HomeTitle text='Popular Products' />
          <div className='hidden md:block'>
            <RegularButton text='store' />
          </div>
        </div>
        <div className='mt-[20px] md:mt-[70px]'>
          <Carousel
            autoPlay
            autoPlaySpeed={3000}
            swipeable
            draggable
            infinite
            ssr
            responsive={responsive}
            containerClass='carousel-container w-full'
            removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            shouldResetAutoplay={false}
          >
            {
              ProductCards.map((obj: ProductCardType, index: number) => (
                <ProductCard key={index} id={obj.id} image={obj.image} title={obj.title} price={obj.price} />
              ))
            }
          </Carousel>
          <div className='flex justify-center mt-[20px] md:mt-[48px] block md:hidden'>
            <RegularButton text='store' />
          </div>
        </div>
      </div>
    </div>
  )
}
