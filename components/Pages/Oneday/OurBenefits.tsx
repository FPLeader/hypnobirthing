import { OurBenefitsData } from '@/services/Constants/Report'

export default function OurGoals() {
    return (
        <>
            <div className='text-dark flex flex-col gap-[16px]'>
                <div className='text-[24px] lg:text-[28px] font-medium'>Benefits</div>
                <div className='grid md:grid-cols-2 gap-[15px]'>
                    {OurBenefitsData.map((obj: string, index: number) => (
                        <div key={index} className='text-[16px] md:text-[18px] lg:text-[20px] px-[14px] md:px-[18px] lg:px-[24px] py-[12px] md:py-[14px] lg:py-[16px] bg-bcg_2 rounded-[10px]'>
                            {obj}
                        </div>
                    ))}
                </div>
            </div>
            <img draggable='false' src='\img\support2.png' alt='' className={`w-full rounded-[10px] lg:rounded-[20px] ${process.env.DEV_MODE ? 'blur-lg':''}`} />
        </>
    )
}