import { useState } from 'react'
import { MemberProfileModal } from '@/components/Modals'

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <MemberProfileModal
        image={image}
        name={name}
        title={title}
        description={description}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <button
        className='w-full max-md:max-w-[385px] max-md:m-auto flex flex-col border-[2px] border-beighe bg-white hover:bg-beighe active:bg-white rounded-[10px] overflow-hidden transition-all duration-500'
        onClick={openModal}
      >
        <img draggable='false' src={image} alt={name} className={`w-full ${process.env.DEV_MODE && 'blur-lg'}`} />
        <div className='w-full p-[15px] text-center text-dark flex flex-col gap-[10px]'>
          <div className='text-[18px]'>{name}</div>
          <div className='text-[16px]'>{title}</div>
          <div className='text-[18px] opacity-60 line-clamp-3'>{description}</div>
        </div>
      </button>
    </div>
  )
}