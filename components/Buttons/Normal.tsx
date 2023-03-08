interface ButtonProps {
    text: string,
}

export default function NormalButton({
    text,
}: ButtonProps) {
    return (
        <div className='w-full md:w-max h-max text-center px-[28px] lg:px-[38px] py-[6px] md:py-[8px] lg:py-[10px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] select-none cursor-pointer transition-all duration-300'>
            {text}
        </div>
    )
}