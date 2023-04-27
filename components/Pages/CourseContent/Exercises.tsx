interface PageProps {
    text1: string,
    text2: string,
    text3: string,
}

export default function Exercises({
    text1,
    text2,
    text3
}: PageProps) {
    return (
        <div>
            <div className='flex flex-col gap-[10px]'>
                <div className='whitespace-pre-line text-dark text-[16px]'>
                    {text1}
                </div>
                {text2.split('\n').map((item: string, index: number) => (
                    <div key={index} className='min-h-[60px] border border-beighe flex rounded-[8px] overflow-hidden'>
                        <div className='w-[30px] md:w-[60px] flex justify-center items-center bg-beighe'>
                            <div className='text-white text-[20px] md:text-[24px]'>{index + 1}</div>
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='w-full px-[16px] py-[8px] text-dark text-[16px]'>
                                {item}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='whitespace-pre-line mt-[10px] text-dark text-[16px] lg:text-[18px] italic'>
                {text3}
            </div>
        </div>
    )
}