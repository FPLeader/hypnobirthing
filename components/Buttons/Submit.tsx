
interface ButtonProps {
    text: string,
}

export default function SubmitButton({
    text,
}: ButtonProps) {
    return (
        <div className='px-[38px] py-[12px] lg:py-[17.5px] w-max h-max text-white text-[14px] font-medium uppercase bg-dark rounded-[500px] select-none cursor-pointer'>
            {text}
        </div>
    )
}
