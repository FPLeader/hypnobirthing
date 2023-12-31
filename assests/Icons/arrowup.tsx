interface IconProps {
    width?: number,
    height?: number,
    color?: string,
}

export default function arrowup({
    width = 15,
    height = 8,
    color = '#A3A09E'
}: IconProps) {
    return (
        <svg width={width} height={height} viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.5 0.5L0 7.5L15 7.5L7.5 0.5Z' fill={color} />
        </svg>
    )
}