import { BlogData, BlogType } from './constants/BlogData'

export default function PromoteBlogs() {
    return (
        <div className='flex flex-wrap justify-between gap-10'>
            {BlogData.map((obj: BlogType, index: number) => (
                <div key={index} className='h-[253px] max-w-[386px] w-full flex flex-col items-center rounded-xl border border-beighe bg-bcg relative hover:bg-bcg_2 active:bg-beighe cursor-pointer'>
                    <img src={obj.image} alt={obj.title} className=' rounded-t-xl pt-[21px] h-[200px]' />
                    <div className='text-dark text-lg text-[32px] font-light italic text-center absolute bottom-[25px]'>{obj.title}</div>
                </div>
            ))}
        </div>
    )
}
