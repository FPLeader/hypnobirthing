import {
    ImageSkeleton,
    TwoLineCardSkeleton,
    ContactFormCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                <TwoLineCardSkeleton />
                <TwoLineCardSkeleton />
                <TwoLineCardSkeleton />
            </div>
            <ContactFormCardSkeleton />
            <ImageSkeleton />
        </>
    )
}
