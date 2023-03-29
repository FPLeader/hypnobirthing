import { NewMomCirclesData } from '@/services/Constants/Report'

export default function NewMom() {
    return (
        <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
            <div className='grid lg:grid-cols-2 gap-[15px] lg:gap-[35px]'>
                <img draggable='false' src='\img\support1.png' alt='' className={`w-full h-full max-lg:max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`} />
                <div className='w-full max-lg:row-start-1 text-dark flex flex-col gap-[15px] lg:gap-[20px]'>
                    <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                        New Mom Circles
                    </div>
                    <div className='text-[16px] md:text-[18px]'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-[15px]'>
                {NewMomCirclesData.map((obj: string, index: number) => (
                    <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                        {obj}
                    </div>
                ))}
            </div>
        </div>
    )
}
