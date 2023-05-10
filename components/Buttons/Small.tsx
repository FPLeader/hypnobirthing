interface ButtonProps {
    BgType?: number,
    text: string,
}

export default function Small({
    BgType = 0,
    text
}: ButtonProps) {

    return (
        <div
            className={`w-full h-[40px] md:h-[54px] cursor-pointer select-none flex justify-center items-center border border-beighe ${BgType === 0 ? 'bg-beighe_2 hover:bg-beighe active:bg-beighe_2' : 'bg-white hover:bg-beighe_2 active:bg-bcg'} rounded-[10px] transition-all duration-300`}
        >
            <div className='text-dark font-medium text-[14px] uppercase'>
                {text}
            </div>
        </div >
    )
}
