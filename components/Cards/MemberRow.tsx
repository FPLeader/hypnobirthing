interface CommunityCardProps {
  id: number,
  image: string,
  name: string,
  title: string,
  description: string,
}

export default function MemberRow({
  image,
  name,
  title,
  description
}: CommunityCardProps) {
  return (
    <div className='w-full flex gap-[10px] border-[2px] border-beighe bg-white hover:bg-beighe active:bg-white select-none cursor-pointer rounded-[10px] transaction-all duration-500'>
      <img draggable='false' src={image} alt={name} className='w-full max-w-[150px] md:max-w-[200px] rounded-[10px]' />
      <div className='w-full p-[10px] md:p-[15px] text-dark flex flex-col gap-[5px] md:gap-[8px]'>
        <div className='text-[18px] lg:text-[28px]'>{name}</div>
        <div className='text-[16px]'>{title}</div>
        <div className='text-[18px] opacity-60 line-clamp-1 md:line-clamp-3'>{description}</div>
      </div>
    </div>
  )
}