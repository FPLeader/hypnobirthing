import {
    SmallReviewCardSkeleton
} from '@/components/Skeletons'

export default function FeedbackSkeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='w-full h-max mt-[20px] md:mt-[42px] lg:mt-[70px] grid md:grid-cols-3 gap-[20px] md:gap-[20px] lg:gap-[34px]'>
                    {Array.from({ length: 3 }, (_, index: number) => (
                        <SmallReviewCardSkeleton
                            key={`sk-small-review-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
