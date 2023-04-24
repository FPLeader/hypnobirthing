import {
    NormalTextSkeleton,
    ImageSkeleton,
    SmallReviewCardSkeleton,
    BenefitCardSkeleton,
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[15px] lg:gap-[20px]'>
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
            </div>
        </div>
    )
}
