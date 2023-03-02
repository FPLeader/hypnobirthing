import { BlogCards, BlogCardType } from '@/services/Constants/CardsData'
import { BlogCard } from '@/components/Cards'
import { RegularButton } from '@/components/Buttons'
import { RegularTitle } from '@/components/Titles'

export default function MorePosts() {
    return (
        <div className='w-full flex justify-center bg-bcg_2 py-[20px] md:py-[50px] lg:py-[70px]'>
            <div className='max-w-[1225px] mx-[20px]'>
                <RegularTitle text='More posts' />
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-[20px] md:mt-[30px] lg:mt-[40px]'>
                    {
                        BlogCards.slice(3, 6).map((obj: BlogCardType, index: number) => (
                            <BlogCard key={index} id={obj.id} image={obj.image} title={obj.title} header={obj.header} content={obj.content} author={obj.author} />
                        ))
                    }
                </div>
                <div className='flex justify-center mt-[20px] md:mt-[30px] lg:mt-[40px]'>
                    <RegularButton text='See more posts' />
                </div>
            </div>
        </div>
    )
}
