import { SmallBlogCard } from '@/components/Cards'
import { SmallBlogsData, SmallBlogType } from '@/services/Constants/Sections/BlogData'

export default function MyAritcles() {
    const numberOfCourses = 4;
    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>Upcoming Sessions ({numberOfCourses})</div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {SmallBlogsData.slice(0,4).map((CardData: SmallBlogType, index: number) => (
                    <SmallBlogCard key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                ))}
            </div>
        </div>
    )
}