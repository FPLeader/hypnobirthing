import { useState } from 'react'
import { MemberProfileModal } from '@/components/Modals'

interface MemberRowCardProps {
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
}: MemberRowCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='h-full'>
      <MemberProfileModal
        image={image}
        name={name}
        title={title}
        description={description}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <button
        className='w-full h-full flex gap-[10px] border-[2px] border-beighe bg-white hover:bg-beighe active:bg-white rounded-[10px] overflow-hidden transition-all duration-500'
        onClick={openModal}
      >
        <img draggable='false' src={image} alt={name} className='w-full max-w-[150px] md:max-w-[200px] h-full object-cover' />
        <div className='w-full p-[10px] md:p-[15px] text-dark flex flex-col gap-[5px] md:gap-[8px]'>
          <div className='text-[18px] lg:text-[28px]'>{name}</div>
          <div className='text-[16px]'>{title}</div>
          <div className='text-[18px] opacity-60 line-clamp-1 md:line-clamp-3'>{description}</div>
        </div>
      </button>
    </div>
  )
}