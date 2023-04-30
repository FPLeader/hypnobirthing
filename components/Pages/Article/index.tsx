import { useState, useEffect } from 'react'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import {
    SearchSection,
    BlogsSection,
    SkeletonSection,
    BlogsSkeletonSection
} from './Sections'

import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Article() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        pageTitle: string[],
        text1: string[],
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);
    const [blogsLoaded, setBlogsLoaded] = useState<number>(-1);

    // values
    interface mainbodyType {
        id_lng: number,
        ds_title: string,
        ds_content: string,
        ds_readtime: string,
    }

    interface BlogType {
        id_blog: string,
        cd_educator: string,
        ds_state: string,
        dt_upload: Date,
        dt_publish: Date,
        ds_thumbnail: string,
        nm_user: string,
        ds_category: string,
        mainbody: mainbodyType[]
    }
    const [articleBlogs, setArticleBlogs] = useState<BlogType[]>([]);
    const [birthBlogs, setBirthBlogs] = useState<BlogType[]>([]);
    const [recipeBlogs, setRecipeBlogs] = useState<BlogType[]>([]);

    useEffect(() => {
        setDomLoaded(0);
        setBlogsLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'article',
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.currentPage) {
                        console.log(result.data.currentPage);
                        setPreviousMainBody(result.data.currentPage.js_mainbody);
                        setDomLoaded(1);
                    }
                }
            })
            .catch((err) => {
                toast.error('Something went wrong.');
            })
    }

    const loadCurrentPageBlogsData = () => {
        API.post('blog/getrecentblogs', {
            nm_limit: 6,
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.recentBlogs) {
                        console.log(result.data.recentBlogs);
                        const recenBlogs = result.data.recentBlogs;
                        setArticleBlogs(recenBlogs.articleBlogs);
                        setBirthBlogs(recenBlogs.birthBlogs);
                        setRecipeBlogs(recenBlogs.recipeBlogs);
                    }
                    setBlogsLoaded(1);
                }
            })
            .catch((err) => {
                toast.error('Something went wrong.');
            })
    }

    useEffect(() => {
        if (domLoaded === 0) {
            loadCurrentPageData();
        }
    }, [domLoaded])

    useEffect(() => {
        if (blogsLoaded === 0) {
            loadCurrentPageBlogsData();
        }
    }, [blogsLoaded])

    return (
        <div>
            {domLoaded === 1 && previousMainBody ?
                <>
                    <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='pt-[70px] md:pt-[90px]'>
                        <SearchSection
                            title={previousMainBody.pageTitle[lngId]}
                            text={previousMainBody.text1[lngId]}
                        />
                    </div>
                </>
                :
                <SkeletonSection />
            }
            {blogsLoaded === 1 ?
                <>
                    <div
                        dir={lngId === 0 ? 'ltr' : 'rtl'}
                        className='mt-[20px] md:mt-[30px] lg:mt-[48px] grid gap-[20px] md:gap-[30px] lg:gap-[48px]'
                    >
                        {articleBlogs.length !== 0 &&
                            <BlogsSection
                                lngId={lngId}
                                title={t('Article')}
                                blogs={articleBlogs}
                            />
                        }
                        {birthBlogs.length !== 0 &&
                            <BlogsSection
                                lngId={lngId}
                                title={t('Birth Story')}
                                blogs={birthBlogs}
                            />
                        }
                        {recipeBlogs.length !== 0 &&
                            <BlogsSection
                                lngId={lngId}
                                title={t('Recipe')}
                                blogs={recipeBlogs}
                            />
                        }
                    </div>
                </>
                :
                <>
                    <BlogsSkeletonSection />
                </>
            }
            <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
                <PromoteBar />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar
                    title='Upcoming Childbirth Classes'
                    buttonText='Learn More'
                    link='\upcomingcourse'
                />
            </div>
        </div>
    )
}