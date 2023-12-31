interface IconProps {
    width?: number,
    height?: number,
    color?: string
}

export default function facebook({
    width = 12,
    height = 24,
    color = '#653F25'
}: IconProps) {
    return (
        <svg width={width} height={height} viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.65708 13.108H11.3793L11.9637 9.30371H7.65632V7.2245C7.65632 5.64415 8.16957 4.24278 9.63891 4.24278H12V0.922905C11.5852 0.866546 10.7078 0.743164 9.04996 0.743164C5.58819 0.743164 3.55867 2.58246 3.55867 6.77287V9.30371H0V13.108H3.55867V23.5642C4.26344 23.6708 4.97729 23.7432 5.71007 23.7432C6.37245 23.7432 7.01893 23.6822 7.65708 23.5954V13.108Z' fill={color} />
        </svg>
    )
}
