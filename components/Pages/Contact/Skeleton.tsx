import {
    ImageSkeleton,
    TwoLineCardSkeleton,
    ContactFormCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                {Array.from({ length: 3 }, (_, index: number) => (
                    <TwoLineCardSkeleton
                        key={`sk-two-line-${index}`}
                    />
                ))}
            </div>
            <ContactFormCardSkeleton />
            <ImageSkeleton />
        </>
    )
}
