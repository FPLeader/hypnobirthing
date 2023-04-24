import {
    ImageSkeleton,
    SmallReviewCardSkeleton,
    TwoLineCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
            <div className='w-full flex flex-col gap-y-[16px]'>
                {Array.from({ length: 8 }, (_, index: number) => (
                    <TwoLineCardSkeleton key={index} />
                ))}
            </div>
            <div className='max-w-[355px] w-full space-y-[20px] md:space-y-[30px]'>
                <ImageSkeleton />
                <SmallReviewCardSkeleton />
            </div>
        </div>
    )
}
