interface InsuranceCardProps {
    lngId: number,
    title: string,
    content: string,
    list?: boolean,
}

export default function InsuranceCard({
    lngId,
    title,
    content,
    list = false
}: InsuranceCardProps) {
    return (
        <div className='h-full flex flex-col gap-[10px] bg-bcg_2 rounded-[10px] p-[20px] md:p-[25px] text-dark'>
            <div className='text-[20px] md:text-[24px] text-medium '>{title}</div>
            <div>
                {list ?
                    <ul className={`list-disc ${lngId === 0 ? 'pl-[20px]' : 'pr-[20px]'}`}>
                        {content.split('\n').map((obj: string, index: number) => (
                            <li key={index} className='text-[16px] md:text-[18px]'>
                                {obj}
                            </li>
                        ))}
                    </ul>
                    : <div className='text-[16px] md:text-[18px]'>{content}</div>}
            </div>
        </div>
    )
}