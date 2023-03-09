import { NormalButton } from '../Buttons'

interface MediaCardProps {
    image: string,
    url: string,
    title: string,
    content: string,
}

export default function Media({
    image,
    url,
    title,
    content
}: MediaCardProps) {
    return (
        <div className='w-full md:h-[236px] flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-[25px] border-[2px] border-beighe rounded-[20px] overflow-hidden'>
            <div className='w-full h-full md:max-w-[440px]'>
                <img draggable={false} src={image} alt={title} className='w-full h-full object-cover' />
            </div>
            <div className='w-full flex flex-col gap-[10px] lg:gap-[15px] px-[20px] pb-[20px] md:pb-[5px] md:px-0 md:pr-[20px] lg:pr-[35px]'>
                <div className='flex flex-col gap-[3px] lg:gap-[6px] text-dark text-center md:text-left'>
                    <div className='text-[14px] lg:text-[18px] opacity-60'>—&nbsp;{url}</div>
                    <div className='text-[18px] lg:text-[24px] font-semibold'>{title}</div>
                    <div className='text-[14px] lg:text-[18px] line-clamp-3'>{content}</div>
                </div>
                <NormalButton text='Read more' />
            </div>
        </div>
    )
}
