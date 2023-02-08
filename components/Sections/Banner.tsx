import React from 'react'

interface BannerProps {
    image: string;
    title: string;
}

export default function Banner({
    image,
    title,
}: BannerProps) {
    return (
        <div className='w-full relative'>
            <img src={image} alt='' className='w-full h-[300px]' />
            <div className='h-[70px] w-full flex items-center absolute bottom-0 text-dark font-light italic text-[38px] pl-[108px] bg-[#F5EBE9A6]'>{title}</div>
        </div>
    )
} 