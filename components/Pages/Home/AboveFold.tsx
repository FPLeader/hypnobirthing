
export default function AboveFold() {
    return (
        <div className='w-full bg-bcg z-50 p-[20px] sticky md:hidden max-md:top-[90px] flex flex-col items-center text-center'>
            <div className='font-light italic text-[32px] text-dark'>Creating positive birth experiences</div>
            <div className='w-full flex flex-col items-center gap-y-[15px] gap-x-[20px] mt-[20px]'>
            <div className='w-full h-[45px] bg-beighe flex justify-center items-center rounded-[500px] cursor-pointer select-none'>
                    <div className='text-dark uppercase font-medium text-[14px]'>I&apos;m pregnant</div>
                </div>
                <div className='w-full h-[45px] bg-bcg flex justify-center items-center rounded-[500px] cursor-pointer select-none border-[1px] border-beighe'>
                    <div className='text-dark uppercase font-medium text-[14px]'>I&apos;m A Professional</div>
                </div>
            </div>
        </div>
    )
}
