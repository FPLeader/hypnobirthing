import {
    NormalTextSkeleton,
    ImageSkeleton,
    SmallReviewCardSkeleton,
    BenefitCardSkeleton,
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='px-[20px] mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                <NormalTextSkeleton />
                <ImageSkeleton />
            </div>

            <BenefitCardSkeleton />
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
                <SmallReviewCardSkeleton />
            </div>
        </div>
    )
}
