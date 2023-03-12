import { useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@/assests/Icons'
import { useSpring, animated } from 'react-spring'

interface HeaderLinkProps {
    title: string,
    isIcon?: boolean,
}

export default function HeaderLink({
    title,
    isIcon = true
}: HeaderLinkProps) {
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
        <button className='uppercase flex items-center gap-[5px] xl:gap-[10px] md:py-2 relative'
            onClick={() => setIsOpen(!isOpen)}
        >
            {title}
            {isIcon &&
                <animated.div style={isOpen ? iconUpAnimation : iconDownAnimation}>
                    {isOpen ? <ArrowUpIcon width={9} height={5} color='#2B2525' /> : <ArrowDownIcon width={9} height={5} color='#2B2525' />}
                </animated.div>
            }
        </button>
    )
}
