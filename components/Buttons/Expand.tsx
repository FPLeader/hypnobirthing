import { useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@/assests/Icons'
import { useSpring, animated } from 'react-spring'

export default function Expand() {
    //accordion function
    const [isOpen, setIsOpen] = useState(true);

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
        <div
            className='flex w-max flex items-center cursor-pointer select-none border border-beighe text-dark text-[14px] rounded-[50px] py-[4px] px-[12px] gap-[5px]'
            onClick={() => setIsOpen(!isOpen)}
        >
            EXPAND
            <animated.div style={isOpen ? iconUpAnimation : iconDownAnimation}>
                {isOpen ? <ArrowUpIcon width={9} height={5} color='#2B2525' /> : <ArrowDownIcon width={9} height={5} color='#2B2525' />}
            </animated.div>
        </div>
    )
}
