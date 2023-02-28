interface CommunityCardProps {
  image: string;
  name: string;
  description: string;
}

export default function CommunityCard({
  image,
  name,
  description
}: CommunityCardProps) {
  return (
    <div className='w-full flex flex-col bg-white hover:bg-beighe active:bg-white select-none cursor-pointer rounded-[10px] transaction-all duration-300'>
      <img src={image} alt={name} className='w-full rounded-t-[10px]' />
      <div className='w-full py-4'>
        <div className='text-dark text-lg text-center'>{name}</div>
        <div className='text-dark text-lg text-center opacity-60'>{description}</div>
      </div>
    </div>
  )
}