import { HomeTitle } from '@/components/Titles'
import { RegularButton } from '@/components/Buttons'
import { BlogCards, BlogCardType } from '@/services/Constants/CardsData'
import { BlogCard } from '@/components/Cards'

export default function BlogsSection() {
    return (
        <div className='py-[60px] md:py-[80px] lg:pt-[160px] lg:pb-[100px] bg-bcg_2 w-full flex justify-center'>
            <div className='max-w-[1536px] mx-[20px] w-full'>
                <div className='md:flex md:justify-between md:items-end w-full'>
                    <HomeTitle text='Our Latest Blog Posts' />
                    <div className='hidden md:block'>
                        <RegularButton text='blog' />
                    </div>
                </div>
                <div className='mt-[30px] md:mt-[42px] lg:mt-[70px] flex flex-col md:flex-row justify-between gap-[25px] md:gap-[20px] lg:gap-[34px]'>
                    {
                        BlogCards.slice(0, 3).map((obj: BlogCardType, index: number) => (
                            <BlogCard key={index} id={obj.id} image={obj.image} title={obj.title} header={obj.header} content={obj.content} author={obj.author} />
                        ))
                    }
                </div>
                <div className='flex justify-center mt-[25px] block md:hidden'>
                    <RegularButton text='blog' />
                </div>
            </div>
        </div>
    )
}