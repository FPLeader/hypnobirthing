
import { useRouter } from 'next/router'

interface BlogCardProps {
  id: number;
  image: string;
  title: string;
  header: string;
  content: string;
  author: string;
}

export default function BlogCard({
  id,
  image,
  title,
  header,
  content,
  author
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div className='max-w-[386px] flex flex-col' onClick={() => { router.push(`/blog/${id}`) }}>
      <div className='flex flex-col bg-beighe hover:cursor-pointer rounded-xl'>
        <img src={image} alt={title} className='w-[386px] h-[386px] rounded-t-xl' />
        <div className='text-dark text-lg text-center py-2.5'>{title}</div>
      </div>
      <div className='pt-[15px] text-dark text-center grid gap-y-1.5'>
        <div className='text-2xl font-medium'>{header}</div>
        <div className='text-lg font-normal line-clamp-2'>{content}</div>
        <div className='text-lg font-normal opacity-60'>—&nbsp;{author}</div>
      </div>
    </div>
  )
}