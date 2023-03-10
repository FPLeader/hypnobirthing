import { useRouter } from 'next/router'

interface HomeTitleProps {
    text: string,
    link: string,
}

export default function HomeTitle({
    text,
    link
}: HomeTitleProps) {
    const router = useRouter();

    return (
        <button
            className='text-dark italic text-center md:text-left text-[32px] md:text-[40px] lg:text-[60px] font-light hover:underline decoration-beighe'
            onClick={() => router.push(link)}
        >
            {text}
        </button>
    )
}
