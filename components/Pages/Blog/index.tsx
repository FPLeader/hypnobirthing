import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { SmallBlogCard } from '@/components/Cards'
import { RegularTitle } from '../../Titles'
import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import { SkeletonSection } from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'
import dynamic from 'next/dynamic'
// @ts-ignore
dynamic(import('react-quill/dist/quill.snow.css'), { ssr: false, loading: () => <p>Loading ...</p> })
// import ReactMarkdown from 'react-markdown/with-html';
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface BlogProps {
    blogId: string,
}

export default function Blog({
    blogId = ''
}: BlogProps) {
    const moment = require('moment');
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

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

    // values
    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [blogsLoaded, setBlogsLoaded] = useState<number>(-1);
    const [latestBlogs, setLatestBlogs] = useState<BlogType[]>([]);
    const [currentBlog, setCurrentBlog] = useState<BlogType>();

    // initalize

    useEffect(() => {
        setDomLoaded(0);
        setBlogsLoaded(0);
    }, [blogId])

    const loadCurrentBlog = () => {
        API.post('blog/getcurrentblog', {
            id_blog: blogId
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    console.log(result.data.currentBlog);
                    setCurrentBlog(result.data.currentBlog);
                    setDomLoaded(1);
                }
            })
            .catch((err) => {
                if (err.request?.response === '')
                    toast.error('Something went wrong.');
                else {
                    try {
                        let errorMessage = JSON.parse(err.request?.response).message;
                        if (errorMessage === 'jwt expired') {
                            setDomLoaded(3);
                        } else
                            setDomLoaded(2);
                    } catch (error) {
                        console.error('Error parsing response:', err.request?.response);
                        setDomLoaded(2);
                    }
                }
            })
    }

    const getrecentblogsbycategory = () => {
        API.post('blog/getrecentblogsbycategory', {
            id_blog: blogId,
            ds_category: currentBlog?.ds_category,
            nm_limit: 5,
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.blogs) {
                        console.log(result.data.blogs);
                        setLatestBlogs(result.data.blogs);
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
            if (blogId !== '')
                loadCurrentBlog();
        }
    }, [domLoaded])

    useEffect(() => {
        if (blogsLoaded === 0 && domLoaded === 1) {
            getrecentblogsbycategory();
        }
    }, [blogsLoaded, domLoaded])

    const currentTitle = () => {
        if (currentBlog)
            if (currentBlog.mainbody.length === 2) {
                return currentBlog.mainbody[lngId].ds_title;
            } else {
                return currentBlog.mainbody[0].ds_title;
            }
        return '';
    }

    const currentContent = () => {
        if (currentBlog)
            if (currentBlog.mainbody.length === 2) {
                return currentBlog.mainbody[lngId].ds_content;
            } else {
                return currentBlog.mainbody[0].ds_content;
            }
        return '';
    }

    const currentLngId = () => {
        if (currentBlog)
            if (currentBlog.mainbody.length === 2) {
                return lngId;
            } else {
                return currentBlog.mainbody[0].id_lng;
            }
        return 0;
    }

    return (
        <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='pt-[70px] md:pt-[90px]'>
            {domLoaded > 0 && currentBlog ?
                <Banner image={process.env.FILE_IMAGE_BASE + currentBlog?.ds_thumbnail} />
                :
                <BannerSkeleton />
            }
            {
                domLoaded > 0 && currentBlog ?
                    <>
                        <div className='w-full flex justify-center'>
                            <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='w-full max-w-[1225px] mx-[20px]'>
                                <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] mb-[20px] md:mb-[30px]'>
                                    <RegularTitle
                                        lngId={currentLngId()}
                                        text={currentTitle()}
                                    />
                                </div>
                                <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]'>
                                    <div className='w-full lg:w-2/3 flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                                        <div
                                            className='font-[lato] ql-editor !p-0'
                                            dangerouslySetInnerHTML={{
                                                __html: currentContent()
                                            }}
                                        />
                                        <div className='text-[16px] md:text-[18px] font-normal italic opacity-60 flex flex-col items-center md:flex-row md:justify-between'>
                                            <div className='capitalize'>—&nbsp;{currentBlog?.nm_user}</div>
                                            <div>{moment(currentBlog.dt_upload).format('MMMM D, YYYY')}</div>
                                        </div>
                                    </div>
                                    {latestBlogs.length !== 0 &&
                                        <div className='w-full flex flex-col gap-[20px] md:gap-[25px] lg:w-1/3'>
                                            <div className={`${lngId === 0 ? 'text-left' : 'text-right'} text-dark text-[20px] md:text-[30px]`}>
                                                {currentBlog.ds_category === 'Birth Story'
                                                    ?
                                                    t('More Birth Stories')
                                                    :
                                                    t(`More ${currentBlog.ds_category}s`)
                                                }
                                            </div>
                                            <div className='grid gap-[20px]'>
                                                {
                                                    latestBlogs.map((CardData: BlogType, index: number) => (
                                                        <SmallBlogCard
                                                            key={CardData.ds_category + index}
                                                            id={CardData.id_blog}
                                                            image={CardData.ds_thumbnail}
                                                            mainbody={CardData.mainbody}
                                                            author={CardData.nm_user}
                                                            ds_category={CardData.ds_category}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <SkeletonSection />
                    </>
            }
            <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
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
