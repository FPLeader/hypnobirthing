

export default function SmallCourseSkeletonCard() {

    return (
        <div className='animate-pulse w-full flex flex-col gap-[15px] overflow-hidden border-[2px] border-gray-200 rounded-[10px]'>
            <div className='h-[38px] md:h-[60px] bg-gray-300'></div>
            <div className='w-full space-y-[15px] p-[15px]'>
                <div className='flex justify-center'>
                    <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                </div>
                <div className='space-y-[10px]'>
                    <div className='h-1.5 md:h-2 bg-gray-300 rounded-full' />
                    <div className='h-1.5 md:h-2 bg-gray-300 rounded-full' />
                </div>
                <div className='flex justify-center'>
                    <div className='h-2 md:h-2.5 w-2/5 bg-gray-300 rounded-full' />
                </div>
            </div>
            <div className='h-[45px] bg-gray-300'></div>
        </div>
    )
}