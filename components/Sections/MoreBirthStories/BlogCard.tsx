import { useRouter } from 'next/router'

interface BlogCardProps {
    id: number;
    header: string;
    content: string;
    author: string;
}

export default function BlogCard({
    id,
    header,
    content,
    author
}: BlogCardProps) {
    const router = useRouter();

    return (
        <div className='text-dark grid gap-y-[15px] p-[20px] border-[2px] border-beighe rounded-[10px] cursor-pointer hover:bg-bcg_2 active:bg-beighe' onClick={() => { router.push(`/blog/${id}`) }}>
            <div className='text-2xl font-medium'>{header}</div>
            <div className='text-lg font-normal line-clamp-2'>{content}</div>
            <div className='text-lg font-normal opacity-60'>—&nbsp;{author}</div>
        </div>
    )
}