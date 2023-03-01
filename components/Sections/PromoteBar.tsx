import { BlogData, BlogType } from '@/services/Constants/Sections/BlogData'

export default function PromoteBar() {
    return (
        <div className='flex flex-col md:flex-row md:justify-between gap-[20px] md:gap-[35px]'>
            {BlogData.map((obj: BlogType, index: number) => (
                <div key={index} className='min-h-[200px] md:min-h-[253px] py-[20px] md:py-[25px] flex flex-col justify-between items-center w-full rounded-[10px] border-[2px] border-beighe bg-bcg hover:bg-bcg_2 active:bg-beighe cursor-pointer select-none overflow-hidden transactioin-all duration-300'>
                    <div className='w-[100px] md:w-[120px]'>
                        <img draggable='false' src={obj.image} alt={obj.title} className='w-full'/>
                    </div>
                    <div className='text-dark text-[20px] md:text-[32px] font-light italic text-center px-[20px]'>{obj.title}</div>
                </div>
            ))}
        </div >
    )
}
