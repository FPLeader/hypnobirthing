import { ImageSkeleton } from './index'

export default function ContactForm() {
    return (
        <div className='p-4 rounded shadow animate-pulse md:p-6 flex items-center'>
            <div className='w-full space-y-[50px]'>
                <div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[100px] mb-2.5'></div>
                    <div className='w-full max-w-[300px] h-2 bg-gray-200 rounded-full'></div>
                </div>
                <div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[100px] mb-2.5'></div>
                    <div className='w-full max-w-[300px] h-2 bg-gray-200 rounded-full'></div>
                </div>
                <div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[100px] mb-2.5'></div>
                    <div className='w-full max-w-[300px] h-2 bg-gray-200 rounded-full'></div>
                </div>
                <div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[100px] mb-2.5'></div>
                    <div className='w-full max-w-[300px] h-2 bg-gray-200 rounded-full'></div>
                </div>
                <div>
                    <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[100px] mb-2.5'></div>
                    <div className='w-full max-w-[300px] h-2 bg-gray-200 rounded-full'></div>
                </div>
            </div>
            <div className='max-md:hidden block w-full'>
                <ImageSkeleton />
            </div>
        </div>
    )
}
