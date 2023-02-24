import { InstagramIcon } from "@/assests/Icons"

interface InstaCardProps {
    image: string,
    link: string
}

export default function InstaCard({
    image,
    link,
}: InstaCardProps) {

    return (
        <a href={link} target='_blank'>
            <div className='select-none cursor-pointer relative group'>
                <img src={image} alt='' className='w-full h-full' />
                <div className='w-full h-full flex justify-center items-center absolute top-0 left-0'>
                    <div className='text-red-200 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <InstagramIcon width={36} height={36} color='#ffffff80' />
                    </div>
                </div>
            </div>
        </a>
    )
}