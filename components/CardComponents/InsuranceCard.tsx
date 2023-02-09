interface InsuranceCardProps {
    title: string;
    content: string;
    list?: boolean;
    contents?: string[];
}

export default function InsuranceCard({
    title,
    content,
    list,
    contents,
}: InsuranceCardProps) {
    return (
        <div className='h-full bg-bcg_2 rounded-xl p-[25px] text-dark'>
            <div className='text-2xl text-medium '>{title}</div>
            {list ?
                <ul className='list-disc pl-[20px]'>
                    {contents.map((obj: string, index: number) => (
                        <li key={index} className='text-lg'>{obj}</li>
                    ))}
                </ul>
                : <div className='text-lg  text-normal pt-[10px]'>{content}</div>}
        </div>
    )
}