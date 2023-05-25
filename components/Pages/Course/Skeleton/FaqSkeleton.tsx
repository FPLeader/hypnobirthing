import {
    TwoLineCardSkeleton
} from '@/components/Skeletons'

export default function FaqSkeleton() {
    return (
        <div className='w-full flex flex-col gap-[16px]'>
            {Array.from({ length: 4 }, (_, index: number) => (
                <TwoLineCardSkeleton
                    key={`sk-two-line-${index}`}
                />
            ))}
        </div>
    )
}
