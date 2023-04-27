interface PageProps {
    lngId: number,
    title3: string,
    text6: string,
}

export default function Report({
    lngId,
    title3,
    text6,
}: PageProps) {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px] text-dark flex flex-col gap-[20px] md:gap-[30px]'>
                <div className={`text-[30px] md:text-[40px] lg:text-[44px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} font-light italic`}>
                    {title3}
                </div>
                <div className='grid md:grid-cols-2 gap-[15px]'>
                    {text6.split('\n').map((obj: string, index: number) => (
                        <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] text-center md:text-left px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                            {obj}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}