import {
    SmallBlogSkeletonCard,
    BigBlogSkeletonCard
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                {Array.from({ length: 3 }, (_, index: number) => (
                    <div key={`blogs-${index}`}>
                        <div className='mt-[20px] md:mt-[30px] lg:mt-[48px] w-full max-w-[350px] h-3 bg-gray-200 rounded-full'></div>
                        <div className='mt-[20px] grid lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                            <div className='w-full lg:col-span-2'>
                                <BigBlogSkeletonCard />
                            </div>
                            <div className='w-full h-full lg:col-span-1'>
                                <div className='grid gap-[20px]'>
                                    {Array.from({ length: 5 }, (_, index: number) => (
                                        <SmallBlogSkeletonCard key={`smallblog-${index}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
