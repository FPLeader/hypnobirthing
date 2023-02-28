import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/assests/Icons';
import { useSpring, animated } from 'react-spring';

interface FaqItemProps {
    title: string;
    content: string;
}

export default function FaqItem({
    title,
    content
}: FaqItemProps) {
    //accordion function
    const [isOpen, setIsOpen] = useState(false);

    //background animation with react spring
    const bgAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: { opacity: '0', background: '#ffffff' },
        to: { opacity: '1', background: isOpen ? '#DFD3BC' : '#ffffff' },
        config: { duration: '200' }
    });

    //open animation with react spring
    const openAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: { opacity: '0', maxHeight: '0px' },
        to: { opacity: '1', maxHeight: isOpen ? '700px' : '0px' },
        config: { duration: '200' }
    });

    //rotate animation
    const iconUpAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        },
        config: { duration: '120' }
    });
    const iconDownAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: {
            transform: 'rotate(180deg)',
        },
        to: {
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
        },
        config: { duration: '120' }
    });

    return (
        <animated.div className='p-[16px] border border-beighe rounded-lg' style={bgAnimation}>
            <div className='flex justify-between items-center select-none cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='font-medium text-[20px] text-dark pr-[24px]'>{title}</div>

                <animated.div style={isOpen ? iconUpAnimation : iconDownAnimation}>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </animated.div>
            </div>
            <animated.div className='h-full overflow-hidden' style={openAnimation} >
                <div className='w-full my-[10px] border border border-dark opacity-20' />
                <div className='text-dark text-[18px] font-normal'>
                    {content}
                </div>
            </animated.div>
        </animated.div>
    )
}
