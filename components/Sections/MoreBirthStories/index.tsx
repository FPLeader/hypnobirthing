import BlogCard from './BlogCard'
import { MoreBlogData, MoreBlogType } from '../constants/BlogData'

export default function MoreBirthStories() {
    return (
        <div>
            <div className='text-dark text-base text-[30px] pb-[25px]'>More Birth Stories</div>
            <div className='grid gap-y-[20px] '>
                {MoreBlogData.map((obj: MoreBlogType, index: number) => (
                    <BlogCard key={index} id={obj.id} header={obj.header} content={obj.content} author={obj.author} />
                ))}
            </div>
        </div>
    )
}