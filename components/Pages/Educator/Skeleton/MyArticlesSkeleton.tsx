import { useTranslation } from 'react-i18next';
import { SmallBlogSkeletonCard } from '@/components/Skeletons';

export default function MyArticlesSkeleton() {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {t('My articles')}
            </div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {Array.from({ length: 4 }, (_, index: number) => (
                    <SmallBlogSkeletonCard
                        key={`sk-small-blog-${index}`}
                    />
                ))}
            </div>
        </div>
    )
}
