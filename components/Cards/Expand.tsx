import { ExpandButton } from '@/components/Buttons'
import { useState } from 'react'

interface CardProps {
    title: string,
    content: string,
}

export default function Expand({
    title,
    content
}: CardProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const MIN_LENGTH = 200;

    return (
        <div className='text-dark flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {title}
            </div>
            <div className='relative'>
                <div className={`text-[16px] lg:text-[18px] ${content.length > MIN_LENGTH ? isOpen ? 'h-full' : 'h-[120px]' : ''} overflow-hidden transition-all duration-500 whitespace-pre-line`}>
                    {content}
                </div>
                {content.length > MIN_LENGTH &&
                    <div className={`z-1 inset-x-0 absolute bottom-0 bg-gradient-to-t from-bcg pt-[50px] pointer-events-none ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    </div>
                }
            </div>
            {content.length > MIN_LENGTH &&
                <div className='w-max' onClick={() => setIsOpen(!isOpen)}>
                    <ExpandButton />
                </div>
            }
        </div>
    )
}
