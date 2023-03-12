interface IconProps {
    width?: number,
    height?: number,
    color?: string,
}
export default function close({
    width = 20,
    height = 20,
    color = '#2B2525'
}: IconProps) {
    return (
        <svg width={width} height={height} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L21 21M21 1L1 21' stroke={color} strokeWidth={2} />
        </svg>
    )
}
