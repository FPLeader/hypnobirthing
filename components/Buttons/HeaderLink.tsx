import { ArrowDownIcon, ArrowUpIcon } from '@/assests/Icons'
import { useSpring, animated } from 'react-spring'

interface HeaderLinkProps {
    index?: number,
    title: string,
    isIcon?: boolean,
    status?: number,
}

export default function HeaderLink({
    index = 0,
    title,
    isIcon = true,
    status = 0,
}: HeaderLinkProps) {

    //rotate animation
    const iconUpAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: status === index ? 'rotate(180deg)' : 'rotate(0deg)',
        },
        config: { duration: '120' }
    });
    const iconDownAnimation = useSpring<{ from: {}, to: {}, config: {} }>({
        from: {
            transform: 'rotate(180deg)',
        },
        to: {
            transform: status === index ? 'rotate(0deg)' : 'rotate(180deg)',
        },
        config: { duration: '120' }
    });

    return (
        <button className='uppercase flex items-center gap-[5px] xl:gap-[10px] md:py-2 relative'>
            {title}
            {isIcon &&
                <animated.div style={status !== index ? iconUpAnimation : iconDownAnimation}>
                    {status === index ? <ArrowUpIcon width={9} height={5} color='#2B2525' /> : <ArrowDownIcon width={9} height={5} color='#2B2525' />}
                </animated.div>
            }
        </button>
    )
}
