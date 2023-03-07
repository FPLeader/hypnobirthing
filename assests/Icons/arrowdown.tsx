interface IconProps {
    width?: number,
    height?: number,
    color?: string,
}

export default function arrowdown({
    width = 15,
    height = 8,
    color = '#A3A09E',
}: IconProps) {
    return (
        <svg width={width} height={height} viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.5 7.5L0 0.5L15 0.500001L7.5 7.5Z' fill={color} />
        </svg>
    )
}