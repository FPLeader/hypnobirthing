import {
    SmallCourseSkeletonCard
} from '@/components/Skeletons'

export default function FaqSkeleton() {
    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                Related courses
            </div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {Array.from({ length: 3 }, (_, index: number) => (
                    <SmallCourseSkeletonCard
                        key={`sk-related-skeleton-${index}`}
                    />
                ))}
            </div>
        </div>
    )
}
