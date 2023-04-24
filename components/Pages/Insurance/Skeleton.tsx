import {
    ImageSkeleton,
    SmallReviewCardSkeleton,
    TwoLineCardSkeleton,

} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex flex-col gap-[20px] md:gap-[35px]'>
            <div className='space-y-[10px]'>
                <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[180px]'></div>
                <div className='w-full max-w-[450px] h-2 bg-gray-200 rounded-full'></div>
            </div>
            <TwoLineCardSkeleton />
            <div className='w-full grid md:grid-cols-2 gap-[20px] md:gap-[30px]'>
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
            </div>
            <div className='space-y-4 rounded animate-pulse'>
                <div className='w-full max-w-[450px] h-2 bg-gray-200 rounded-full'></div>
                <div className='w-full max-w-[350px] h-2 bg-gray-200 rounded-full'></div>
                <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                <div className='w-full max-w-[350px] h-2 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}
