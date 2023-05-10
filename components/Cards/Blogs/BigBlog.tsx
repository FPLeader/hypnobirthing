import { useRouter } from 'next/router'

interface BlogCardProps {
  lngId: number,
  id: string,
  image: string,
  category: string,
  title: string,
  content: string,
  author: string[],
}

export default function BigBlogCard({
  lngId,
  id,
  image,
  category,
  title,
  content,
  author
}: BlogCardProps) {
  const router = useRouter();
  return (
    <div
      dir={lngId === 0 ? 'ltr' : 'rtl'}
      className='w-full md:h-full flex flex-col'
      onClick={() => { router.push(`/blog/${id}`) }}
    >
      <div className='h-full border-[2px] border-beighe hover:cursor-pointer rounded-[15px] overflow-hidden select-none relative hover:bg-bcg_2 active:bg-transparent transition-all duration-300'>
        <img draggable='false' src={process.env.FILE_IMAGE_BASE + image} alt={category} className={`w-full h-full min-h-[230px] md:h-[446px] object-cover ${process.env.DEV_MODE && 'blur-lg'}`} />
        <div className={`text-dark uppercase bg-beighe text-[16px] md:text-[16px] text-center ${lngId === 0 ? 'md:text-left pl-[20px]' : 'md:text-right pr-[20px]'} py-[10px]`}>
          {category}
        </div>
        <div className='p-[10px] md:p-[20px] lg:pb-[40px] text-dark flex flex-col gap-[4px] md:gap-[6px]'>
          <div className={`text-[18px] md:text-[24px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} font-medium`}>
            {title}
          </div>
          <div className={`whitespace-pre-line text-[16px] md:text-[18px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} line-clamp-3 md:line-clamp-5 lg:line-clamp-7`}>
            {content}
          </div>
          <div className={`lg:absolute lg:bottom-[10px] text-[16px] md:text-[18px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} opacity-60 capitalize`}>
            —&nbsp;{author[lngId]}
          </div>
        </div>
      </div>
    </div>
  )
}
