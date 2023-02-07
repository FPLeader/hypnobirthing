import React from 'react'

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
    <div className='max-w-[386px] flex flex-col bg-white hover:bg-beighe hover:cursor-pointer rounded-xl'>
      <img src={image} alt={name} className='w-[386px] h-[386px] rounded-t-xl' />
      <div className='w-full py-4'>
        <div className='text-dark text-lg text-center'>{name}</div>
        <div className='text-dark text-lg text-center opacity-60'>{description}</div>
      </div>
    </div>
  )
}