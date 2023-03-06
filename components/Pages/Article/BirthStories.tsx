import { BigBlogCards } from '@/services/Constants/CardsData'
import { BigBlogCard } from '@/components/Cards'
import { SmallBlogCard } from '@/components/Cards'
import { SmallBlogsData, SmallBlogType } from '@/services/Constants/Sections/BlogData'

export default function OurBlogPosts() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[35px] mt-[20px] md:mt-[30px] lg:mt-[48px]'>
                    <div className='w-full lg:w-2/3'>
                        <BigBlogCard id={BigBlogCards[0].id} image={BigBlogCards[0].image} title={BigBlogCards[0].title} header={BigBlogCards[0].header} content={BigBlogCards[0].content} author={BigBlogCards[0].author} />
                    </div>
                    <div className='w-full lg:w-1/3'>
                        <div className='grid gap-[20px]'>
                            {SmallBlogsData.map((CardData: SmallBlogType, index: number) => (
                                <SmallBlogCard key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}