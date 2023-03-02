import { useRouter } from 'next/router'

interface BlogCardProps {
    id: number,
    image: string,
    header: string,
    content: string,
    author: string,
}

export default function SmallBlogCard({
    id,
    image,
    header,
    content,
    author
}: BlogCardProps) {
    const router = useRouter();

    return (
        <div className='flex items-center gap-[15px] overflow-hidden border-[2px] border-beighe rounded-[10px] select-none cursor-pointer hover:bg-bcg_2 active:bg-beighe'>
            <div className='w-full max-w-[100px]'>
                <img draggable={false} src={image} alt='' className='w-full' />
            </div>
            <div className='w-full text-dark grid gap-[5px] pr-[15px]' onClick={() => { router.push(`/blog/${id}`) }}>
                <div className='text-[16px] md:text-[20px] font-medium'>{header}</div>
                <div className='text-[12px] md:text-[16px] line-clamp-2'>{content}</div>
                <div className='text-[12px] md:text-[16px] opacity-60'>—&nbsp;{author}</div>
            </div>
        </div>
    )
}