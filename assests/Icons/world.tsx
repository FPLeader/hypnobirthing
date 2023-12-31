interface IconProps {
    width?: number,
    height?: number,
    color?: string
}

export default function world({
    width = 16,
    height = 15,
    color = '#252525'
}: IconProps) {
    return (
        <svg width={width} height={height} viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1.33301 7.49967C1.33301 11.1817 4.31767 14.1663 7.99967 14.1663C11.6817 14.1663 14.6663 11.1817 14.6663 7.49967C14.6663 3.81767 11.6817 0.833008 7.99967 0.833008C4.31767 0.833008 1.33301 3.81767 1.33301 7.49967Z' stroke='#252525' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M8.66626 0.866211C8.66626 0.866211 10.6663 3.49954 10.6663 7.49954C10.6663 11.4995 8.66626 14.1329 8.66626 14.1329M7.33293 14.1329C7.33293 14.1329 5.33293 11.4995 5.33293 7.49954C5.33293 3.49954 7.33293 0.866211 7.33293 0.866211M1.75293 9.83288H14.2463M1.75293 5.16621H14.2463' stroke={color} strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}
