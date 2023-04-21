export default function BigReviewCard() {
    return (
        <div className='flex items-center p-4 border border-gray-200 rounded shadow animate-pulse md:p-6'>
            <div className='w-full divide-y divide-solid space-y-4'>
                <div className='space-y-2 md:space-y-3'>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[80px]'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[150px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[150px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
                </div>
                <div className='space-y-2 md:space-y-3 pt-3 md:pt-5'>
                    <div className='w-full max-w-[150px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[80px]'></div>
                </div>
            </div>
        </div>
    )
}
