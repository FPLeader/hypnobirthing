interface CommunityCardProps {
  id: number,
  image: string,
  name: string,
  title: string,
  description: string,
}

export default function MemberCard({
  image,
  name,
  title,
  description
}: CommunityCardProps) {
  return (
    <div className='w-full flex flex-col border-[2px] border-beighe bg-white hover:bg-beighe active:bg-white select-none cursor-pointer rounded-[10px] transaction-all duration-500'>
      <img draggable='false' src={image} alt={name} className='w-full rounded-t-[10px]' />
      <div className='w-full p-[15px] text-center text-dark flex flex-col gap-[10px]'>
        <div className='text-[18px]'>{name}</div>
        <div className='text-[16px]'>{title}</div>
        <div className='text-[18px] opacity-60 line-clamp-3'>{description}</div>
      </div>
    </div>
  )
}