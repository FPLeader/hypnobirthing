import {
    SmallCourseSkeletonCard
} from '@/components/Skeletons'
import { useTranslation } from 'react-i18next'

export default function FaqSkeleton() {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {t('Related courses')}
            </div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {Array.from({ length: 4 }, (_, index: number) => (
                    <SmallCourseSkeletonCard
                        key={`sk-related-skeleton-${index}`}
                    />
                ))}
            </div>
        </div>
    )
}
