import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { BlogCards, BlogCardType } from '@/services/Constants/CardsData'
import { BlogCard } from '@/components/Cards'

export default function BlogsSection() {
    return (
        <div className='py-[20px] md:py-[80px] lg:pt-[120px] lg:pb-[120px] bg-bcg_2 w-full flex justify-center'>
            <div className='max-w-[1225px] mx-[20px] w-full'>
                <div className='md:flex md:justify-between md:items-end w-full'>
                    <HomeTitle text='Our Latest Blog Posts' />
                    <div className='hidden md:block'>
                        <RegularButton text='blog' />
                    </div>
                </div>
                <div className='mt-[20px] md:mt-[42px] lg:mt-[70px] grid sm:grid-cols-2 md:grid-cols-3 justify-between gap-[25px] md:gap-[20px] lg:gap-[34px]'>
                    {
                        BlogCards.slice(0, 3).map((obj: BlogCardType, index: number) => (
                            <BlogCard key={index} id={obj.id} image={obj.image} title={obj.title} header={obj.header} content={obj.content} author={obj.author} />
                        ))
                    }
                </div>
                <div className='flex justify-center mt-[20px] block md:hidden'>
                    <RegularButton text='blog' />
                </div>
            </div>
        </div>
    )
}
