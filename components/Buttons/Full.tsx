interface ButtonProps {
    text: string
}

export default function Full({
    text
}: ButtonProps) {
    return (
        <div className='w-full h-max text-center py-[6px] md:py-[10px] lg:py-[12.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] select-none cursor-pointer transaction-all duration-300'>
            {text}
        </div>
    )
}
