import { useRouter } from 'next/router'

interface ButtonProps {
    text: string,
    type?: number,
}

export default function UploadButton({
    text,
    type = 1,
}: ButtonProps) {
    return (
        <div
            className={`whitespace-nowrap w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase ${type === 1 ? 'bg-beighe hover:bg-bhover active:bg-beighe' : 'bg-white hover:bg-beighe active:bg-white border border-beighe'} rounded-[500px] select-none cursor-pointer transition-all duration-300`}
        >
            {text}
        </div>
    )
}
