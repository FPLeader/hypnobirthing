interface ReviewCardProps {
    title: string,
    content: string,
    name: string,
    address: string,
    date: number,
}

export default function ReviewCard({
    title,
    content,
    name,
    address,
    date
}: ReviewCardProps) {
    const CalcDuration = (publishdate: number) => {
        const temp = Date.now() - publishdate;
        return '2 months ago';
    }

    return (
        <div className='w-full p-[15px] lg:p-[25px] text-dark flex flex-col gap-[10px] bg-bcg_2 rounded-[10px]'>
            <div className='text-[20px] lg:text-[24px] font-medium'>{title}</div>
            <div className='text-[16px] lg:text-[18px]'>{content}</div>
            <div className='w-full border border-dark opacity-20' />
            <div>
                <div className='text-[16px] uppercase'>{name}</div>
                <div className='flex justify-between gap-[5px] text-[16px] opacity-60'>
                    <div>{address}</div>
                    <div>{CalcDuration(date)}</div>
                </div>
            </div>
        </div>
    )
}
