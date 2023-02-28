interface HomeTitleProps {
    text: string;
}

export default function HomeTitle({
    text
}: HomeTitleProps) {
    return (
        <div className='text-dark italic text-center md:text-left text-[32px] md:text-[40px] lg:text-[60px] font-light select-none cursor-pointer hover:underline decoration-beighe'>
            {text}
        </div>
    )
}
