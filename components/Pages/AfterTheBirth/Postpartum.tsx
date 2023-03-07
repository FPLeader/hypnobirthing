import { MiddleButton } from '@/components/Buttons'

export default function Postpartum() {
    return (
        <div>
            <div className='flex flex-col-reverse items-center lg:flex-row gap-[15px] lg:gap-[35px]'>
                <div className='w-full lg:w-1/2'>
                    <img draggable='false' src='\img\after3.png' alt='' className='w-full rounded-[10px] lg:rounded-[15px]' />
                </div>
                <div className='w-full lg:w-1/2 text-dark flex flex-col gap-[16px]'>
                    <div className='text-[30px] md:text-[40px] lg:text-[44px] font-light italic'>
                        What is a Postpartum doula
                    </div>
                    <div className='text-[16px] md:text-[18px] lg:text-[20px]'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                    <div className='hidden lg:block'>
                        <MiddleButton text='List of Doula&apos;s' link='/' />
                    </div>
                </div>
            </div>
            <div className='block lg:hidden mt-[12px] md:mt-[20px]'>
                <MiddleButton text='List of Doula&apos;s' link='/' />
            </div>
        </div>
    )
}