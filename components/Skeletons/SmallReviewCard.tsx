export default function SmallReviewCard() {
    return (
        <div className='p-4 space-y-4 border border-gray-200 rounded shadow animate-pulse md:p-6'>
            <div className='flex flex-col gap-2'>
                <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[80px]'></div>
                <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                <div className='w-full max-w-[150px] h-2 bg-gray-200 rounded-full'></div>
                <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}
