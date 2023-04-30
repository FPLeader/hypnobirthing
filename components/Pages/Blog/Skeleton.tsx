import { SmallBlogSkeletonCard } from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='animate-pulse w-full max-w-[1225px] mx-[20px]'>
                <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] mb-[20px] md:mb-[30px]'>
                    <div className='h-3 md:h-4 max-w-[250px] bg-gray-300 rounded-full' />
                </div>
                <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]'>
                    <div className='w-full lg:w-2/3 flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                        <div className='w-full h-[300px] rounded-[15px] overflow-hidden'>
                            <div className='flex items-center justify-center w-full h-full bg-gray-300'>
                                <svg className='w-12 h-12 text-gray-200'
                                    xmlns='http://www.w3.org/2000/svg'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 640 512'>
                                    <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                                </svg>
                            </div>
                        </div>
                        <div className='space-y-[15px]'>
                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-2/5 bg-gray-300 rounded-full' />
                        </div>
                        <div className='space-y-[15px]'>
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                        </div>
                        <div className='space-y-[15px]'>
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-5/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-4/5 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-3/5 bg-gray-300 rounded-full' />
                        </div>
                        <div className='mt-[40px] flex justify-between'>
                            <div className='h-2 md:h-2.5 w-1/6 bg-gray-300 rounded-full' />
                            <div className='h-2 md:h-2.5 w-2/6 bg-gray-300 rounded-full' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[20px] md:gap-[25px] lg:w-1/3'>
                        <div className='h-1.5 md:h-2 max-w-[200px] bg-gray-300 rounded-full' />
                        <div className='grid gap-[20px]'>
                            {Array.from({ length: 5 }, (_, index: number) => (
                                <SmallBlogSkeletonCard key={`small-blog-${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
