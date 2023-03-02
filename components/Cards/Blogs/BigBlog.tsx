import { useRouter } from 'next/router'

interface BlogCardProps {
  id: number,
  image: string,
  title: string,
  header: string,
  content: string,
  author: string,
}

export default function BigBlogCard({
  id,
  image,
  title,
  header,
  content,
  author
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div className='w-full flex flex-col' onClick={() => { router.push(`/blog/${id}`) }}>
      <div className='border border-[2px] border-beighe hover:cursor-pointer rounded-[15px]'>
        <img draggable='false' src={image} alt={title} className='w-full rounded-t-[10px]' />
        <div className='text-dark uppercase bg-beighe text-[14px] md:text-[16px] text-center md:text-left pl-[20px] py-[10px]'>{title}</div>
        <div className='p-[10px] md:p-[20px] text-dark flex flex-col gap-[4px] md:gap-[6px]'>
          <div className='text-[16px] md:text-[24px] text-center md:text-left font-medium'>{header}</div>
          <div className='text-[14px] md:text-[18px] line-clamp-7'>{content}</div>
          <div className='text-[14px] md:text-[18px] text-center md:text-left opacity-60'>—&nbsp;{author}</div>
        </div>
      </div>
    </div>
  )
}
