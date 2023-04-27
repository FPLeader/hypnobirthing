import {
    NormalTextSkeleton,
    ImageSkeleton,
    SmallReviewCardSkeleton,
    BenefitCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
                <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                    <NormalTextSkeleton />
                    <ImageSkeleton />
                    <ImageSkeleton />
                    <div className='max-lg:row-start-3'>
                        <NormalTextSkeleton />
                    </div>
                </div>

                <div className='py-[20px] md:py-[50px] lg:py-[70px]'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                        <SmallReviewCardSkeleton />
                        <SmallReviewCardSkeleton />
                        <SmallReviewCardSkeleton />
                    </div>
                </div>

                <div className='w-full grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                    <ImageSkeleton />
                    <NormalTextSkeleton />
                </div>
                <div className='py-[20px] py-[50px] lg:py-[70px] flex flex-col gap-[30px]'>
                    <div className='w-full grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                        <NormalTextSkeleton />
                        <NormalTextSkeleton />
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-full max-w-[800px]'>
                            <ImageSkeleton />
                        </div>
                    </div>
                </div>
                <BenefitCardSkeleton />
            </div>
        </div>
    )
}
