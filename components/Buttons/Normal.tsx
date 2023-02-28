interface ButtonProps {
    text: string,
}

export default function NormalButton({
    text,
}: ButtonProps) {
    return (
        <div className='w-full md:w-max h-max text-center px-[38px] py-[10px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-gray_1 active:bg-beighe rounded-[500px] select-none cursor-pointer transaction-all duration-300'>
            {text}
        </div>
    )
}