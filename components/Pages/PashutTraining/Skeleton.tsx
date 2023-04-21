import {
    NormalTextSkeleton,
    ImageSkeleton,
    SmallReviewCardSkeleton,
    BigReviewCardSkeleton,
    BenefitCardSkeleton,
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>

            <BenefitCardSkeleton />

            <ImageSkeleton />

            <div className='space-y-[20px]'>
                <div className='h-2.5 bg-gray-300 rounded-full w-full max-w-[180px]'></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                    <BigReviewCardSkeleton />
                    <BigReviewCardSkeleton />
                    <BigReviewCardSkeleton />
                </div>
            </div>

            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>
        </>
    )
}
