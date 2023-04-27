import {
    NormalTextSkeleton,
    ImageSkeleton,
    BenefitCardSkeleton,
    SmallReviewCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <>
            <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                <NormalTextSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <div className='max-lg:row-start-3'>
                    <NormalTextSkeleton />
                </div>
            </div>
            <BenefitCardSkeleton />
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
            </div>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
            </div>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>
            <BenefitCardSkeleton />
        </>
    )
}