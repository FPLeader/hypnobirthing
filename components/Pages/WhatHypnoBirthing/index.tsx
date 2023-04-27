import { Banner, UpcomingClassesBar } from '@/components/Sections'
import {
    IntroductionSection,
    FeedbackSection,
    BookSection,
    FounderSection,
    ReportSection,
    SkeletonSection
} from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'

import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function WhatHypnoBirthing() {
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const { t } = useTranslation();

    interface MainBodyType {
        pageTitle: string[],
        title1: string[],
        title2: string[],
        title3: string[],
        text1: string[],
        text2: string[],
        text3: string[],
        text4: string[],
        text5: string[],
        text6: string[],
        topImageUrl: string,
        fileName1: string,
        fileName2: string,
        fileName3: string,
        fileName4: string,
    }

    interface ReviewCardType {
        numberStar: number,
        content: string[],
        name: string[],
    }

    interface ReviewsMainBodyType {
        reviews: ReviewCardType[]
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);
    const [reviewsMainBody, setReviewsMainBody] = useState<ReviewsMainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'whathypno',
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.currentPage) {
                        console.log(result.data.currentPage);
                        setPreviousMainBody(result.data.currentPage.js_mainbody);
                    }
                    setDomLoaded(1);
                }
            })
            .catch((err) => {
                setDomLoaded(0);
                toast.error('Something went wrong.');
            })
        API.post('contents/getcurrentpage', {
            id_page: 'whatpeople',
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.currentPage) {
                        console.log(result.data.currentPage);
                        setReviewsMainBody(result.data.currentPage.js_mainbody);
                    }
                    setDomLoaded(1);
                }
            })
            .catch((err) => {
                setDomLoaded(0);
                toast.error('Something went wrong.');
            })
    }

    useEffect(() => {
        if (domLoaded === 0) {
            loadCurrentPageData();
        }
    }, [domLoaded])


    return (
        <>
            <div className='pt-[70px] md:pt-[90px]'>
                {domLoaded === 1 && previousMainBody ?
                    <Banner image={process.env.FILE_IMAGE_BASE + previousMainBody.topImageUrl} />
                    :
                    <BannerSkeleton />
                }
            </div>
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[60px] lg:gap-[100px]'>
                {domLoaded === 1 && previousMainBody && reviewsMainBody ?
                    <>
                        <IntroductionSection
                            lngId={lngId}
                            pageTitle={previousMainBody.pageTitle[lngId]}
                            text1={previousMainBody.pageTitle[lngId]}
                            text2={previousMainBody.pageTitle[lngId]}
                            fileName1={previousMainBody.fileName1}
                            fileName2={previousMainBody.fileName2}
                        />
                        <FeedbackSection
                            lngId={lngId}
                            reviews={reviewsMainBody.reviews}
                        />
                        <BookSection
                            lngId={lngId}
                            title1={previousMainBody.title1[lngId]}
                            text3={previousMainBody.text3[lngId]}
                            text4={previousMainBody.text4[lngId]}
                            fileName3={previousMainBody.fileName3}
                        />
                        <FounderSection
                            lngId={lngId}
                            title2={previousMainBody.title2[lngId]}
                            text5={previousMainBody.text5[lngId]}
                            fileName4={previousMainBody.fileName4}
                        />
                        <ReportSection
                            lngId={lngId}
                            title3={previousMainBody.title3[lngId]}
                            text6={previousMainBody.text6[lngId]}
                        />
                    </>
                    :
                    <SkeletonSection />
                }
                <UpcomingClassesBar
                    title={t('Find a HypnoBirthing class near me')}
                    buttonText={t('Learn More')}
                    link='\upcomingcourse'
                />
            </div>
        </>
    )
}