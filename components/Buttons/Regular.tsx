
interface ButtonProps {
    text: string,
}

export default function RegularButton({
    text,
}: ButtonProps) {
    return (
        <div className='w-full md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe rounded-[500px] select-none cursor-pointer transaction-all duration-300'>
            {text}
        </div>
    )
}
