interface ProductCardProps {
    id: number,
    image: string,
    title: string,
    price: number,
}

export default function ProductCard({
    id,
    image,
    title,
    price
}: ProductCardProps) {
    return (
        <div className='w-full flex justify-center'>
            <button className='w-full max-w-[280px] select-none'>
                <img draggable='false' src={image} alt='' className={`${process.env.DEV_MODE ? 'blur-lg':''}`} />
                <div className='mt-[10px] lg:mt-[15px] text-dark text-center flex flex-col gap-y-[8px] lg:gap-y-[10px]'>
                    <div className='text-[16px] lg:text-[20px] font-medium'>{title}</div>
                    <div className='text-[14px] lg:text-[18px] opacity-60 '>₪{price.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</div>
                </div>
            </button>
        </div>
    )
}
