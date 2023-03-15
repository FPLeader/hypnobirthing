interface BannerProps {
    title: string,
    image: string,
}

export default function Banner({
    title,
    image
}: BannerProps) {

    return (
        <div className='w-full relative'>
            <img draggable='false' src={image} alt='' className={`w-full h-[205px] md:h-[300px] object-cover ${process.env.DEV_MODE ? 'blur-lg':''}`} />
            <div className='h-[36px] md:h-[54px] lg:h-[70px] w-full flex justify-center items-center absolute bottom-0 bg-[#F5EBE9A6]'>
                <div className={`max-w-[1225px] mx-[20px] w-full text-dark font-light italic text-[16px] md:text-[24px] lg:text-[38px] text-center`}>
                    {title}
                </div>
            </div>
        </div>
    )
} 