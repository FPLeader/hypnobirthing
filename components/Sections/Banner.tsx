interface BannerProps {
    image: string,
}

export default function Banner({
    image
}: BannerProps) {

    return (
        <div className='w-full'>
            <img draggable='false' src={image} alt='' className={`w-full h-[205px] md:h-[300px] object-cover ${process.env.DEV_MODE && 'blur-lg'}`} />
        </div>
    )
} 