import { SmallBlogCard } from '@/components/Cards'
import { useTranslation } from 'react-i18next'

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
}

interface BlogType {
    id_blog: string,
    cd_educator: string,
    ds_state: string,
    dt_upload: Date,
    dt_publish: Date,
    ds_thumbnail: string,
    nm_user: string[],
    ds_category: string,
    mainbody: mainbodyType[]
}

interface SectionProps {
    myBlogs: BlogType[]
}

export default function MyAritcles({
    myBlogs
}: SectionProps) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[24px] lg:text-[28px] font-medium'>
                {t('My articles')} ({myBlogs.length})
            </div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {myBlogs.map((CardData: BlogType, index: number) => (
                    <SmallBlogCard
                        key={`my-article-${index}`}
                        id={CardData.id_blog}
                        image={CardData.ds_thumbnail}
                        mainbody={CardData.mainbody}
                        author={CardData.nm_user}
                        ds_category={CardData.ds_category}
                    />
                ))}
            </div>
        </div>
    )
}