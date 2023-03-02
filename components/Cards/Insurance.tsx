interface InsuranceCardProps {
    title: string,
    content: string,
    list?: boolean,
    contents?: string[],
}

export default function InsuranceCard({
    title,
    content,
    list = false,
    contents,
}: InsuranceCardProps) {
    return (
        <div className='h-full flex flex-col gap-[10px] bg-bcg_2 rounded-[10px] p-[20px] md:p-[25px] text-dark'>
            <div className='text-[20px] md:text-[24px] text-medium '>{title}</div>
            <div>
                {list ?
                    <ul className='list-disc pl-[20px]'>
                        {contents?.map((obj: string, index: number) => (
                            <li key={index} className='text-[16px] md:text-[18px]'>{obj}</li>
                        ))}
                    </ul>
                    : <div className='text-[16px] md:text-[18px]'>{content}</div>}
            </div>
        </div>
    )
}