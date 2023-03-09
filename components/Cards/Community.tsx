import { useRouter } from 'next/router'

interface CommunityCardProps {
  image: string,
  name: string,
  description: string,
  link?: string,
}

export default function CommunityCard({
  image,
  name,
  description,
  link = '/educator'
}: CommunityCardProps) {
  const router = useRouter();

  return (
    <button
      className='w-full max-md:max-w-[385px] max-md:m-auto flex flex-col bg-white hover:bg-beighe active:bg-white rounded-[10px] overflow-hidden transition-all duration-300'
      onClick={() => router.push(link)}
    >
      <img draggable='false' src={image} alt={name} className='w-full' />
      <div className='w-full py-4 text-center text-dark'>
        <div className='text-[18px] '>{name}</div>
        <div className='text-[18px] opacity-60'>{description}</div>
      </div>
    </button>
  )
}