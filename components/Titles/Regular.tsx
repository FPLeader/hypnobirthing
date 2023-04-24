interface TitleProps {
    lngId: number,
    text: string
}

export default function Regular({
    lngId,
    text
}: TitleProps) {
    return (
        <div className={`text-[32px] md:text-[40px] lg:text-[60px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-dark font-light italic`}>
            {text}
        </div>
    )
}
