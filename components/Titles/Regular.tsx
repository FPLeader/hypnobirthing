import React from 'react'

interface TitleProps {
    text: string
}

export default function Regular({
    text
}: TitleProps) {
    return (
        <div className='text-[32px] md:text-[40px] lg:text-[60px] text-center md:text-left text-dark font-light italic'>
            {text}
        </div>
    )
}
