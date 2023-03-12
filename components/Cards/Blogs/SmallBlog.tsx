import { useRouter } from 'next/router'

interface BlogCardProps {
    id: number,
    image: string,
    header: string,
    content: string,
    author: string,
    disabled?: boolean,
}

export default function SmallBlogCard({
    id,
    image,
    header,
    content,
    author,
    disabled = false
}: BlogCardProps) {
    const router = useRouter();

    return (
        <button className='flex items-center gap-[15px] overflow-hidden border-[2px] border-beighe rounded-[10px] hover:bg-bcg_2 active:bg-beighe'>
            <div className='w-full h-full max-w-[100px]'>
                <img draggable={false} src={image} alt='' className='object-cover w-full h-full' />
            </div>
            <div
                className='w-full text-dark grid gap-[5px] pr-[15px]'
                onClick={() => { disabled ? '' : router.push(`/blog/${id}`) }}
            >
                <div className='text-[16px] md:text-[20px] font-medium'>{header}</div>
                <div className='text-[12px] md:text-[16px] line-clamp-2'>{content}</div>
                <div className='text-[12px] md:text-[16px] opacity-60'>—&nbsp;{author}</div>
            </div>
        </button>
    )
}