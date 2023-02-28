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
        <div className='w-full flex justify-between items-center gap-[20px] md:gap-[25px] border-[2px] border-beighe rounded-[20px] overflow-hidden'>
            <div className='max-w-[435px]'>
                <img src={image} alt={title} className='w-full' />
            </div>
            <div className='w-full flex flex-col gap-[6px]'>
                <div className=''>—&nbsp;{url}</div>
                <div className=''>{title}</div>
                <div className=''>{content}</div>
            </div>
        </div>
    )
}
