import {
    NormalTextSkeleton,
    ImageSkeleton,
    SmallReviewCardSkeleton,
    BenefitCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='pt-[70px] lg:pt-[90px] w-full max-w-[1225px] mx-[20px]'>
                <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
                <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                    <NormalTextSkeleton />
                    <ImageSkeleton />
                </div>

                <div className='grid md:grid-cols-4 gap-2 mt-[30px] md:mt-[50px]'>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                </div>

                <div className='py-[20px] md:py-[50px] lg:py-[70px] grid gap-[20px] md:gap-[35px]'>
                    <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                        {Array.from({ length: 3 }, (_, index: number) => (
                            <SmallReviewCardSkeleton
                                key={`sk-small-review1-${index}`}
                            />
                        ))}
                    </div>
                    <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                        {Array.from({ length: 3 }, (_, index: number) => (
                            <SmallReviewCardSkeleton
                                key={`sk-small-review2-${index}`}
                            />
                        ))}
                    </div>
                    <div className='w-full max-w-[200px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                        {Array.from({ length: 3 }, (_, index: number) => (
                            <SmallReviewCardSkeleton
                                key={`sk-small-review3-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
