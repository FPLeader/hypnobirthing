import { useRouter } from 'next/router'

interface ButtonProps {
    text: string,
    type?: number,
    link: string,
    paddingType?: number,
}

export default function MiddleButton({
    text,
    type = 0,
    link = '/',
    paddingType = 0,
}: ButtonProps) {
    const router = useRouter();

    return (
        <div
            className={`w-full md:w-max h-max text-center px-[28px] md:px-[30px] ${paddingType === 0 ? 'lg:px-[38px]' : 'lg:px-[100px]'} py-[12.5px] lg:py-[15px] text-dark text-[14px] font-medium uppercase rounded-[500px] select-none cursor-pointer transition-all duration-300 ${type === 0 ? 'bg-beighe hover:bg-bhover active:bg-beighe' : 'border border-beighe bg-bcg hover:bg-beighe active:bg-bcg'} `}
            onClick={() => router.push(link)}
        >
            {text}
        </div >
    )
}