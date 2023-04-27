import {
    IntroductionSection,
    OurGoalsSectioin,
    TeamSection,
    SkeletonSection
} from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'
import { PromoteBar, UpcomingClassesBar, Banner } from '@/components/Sections'
import { useState, useEffect, useLayoutEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function AboutUsPage() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        title1: string[],
        text1: string[],
        title2: string[],
        text2: string[],
        topImageUrl: string,
        fileName1: string,
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'aboutus',
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
                toast.error('Something went wrong.');
            })
    }

    useEffect(() => {
        if (domLoaded === 0) {
            loadCurrentPageData();
        }
    }, [domLoaded])

    useLayoutEffect(() => {
        console.log(previousMainBody);
    }, [previousMainBody])

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            {domLoaded === 1 && previousMainBody ?
                <Banner image={process.env.FILE_IMAGE_BASE + previousMainBody.topImageUrl} />
                :
                <BannerSkeleton />
            }
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
                {domLoaded === 1 && previousMainBody ?
                    <>
                        <IntroductionSection
                            lngId={lngId}
                            title={previousMainBody.title1[lngId]}
                            text={previousMainBody.text1[lngId]}
                            fileName={previousMainBody.fileName1}
                        />
                        <OurGoalsSectioin
                            lngId={lngId}
                            title={previousMainBody.title2}
                            text={previousMainBody.text2}
                        />
                        <TeamSection />
                    </>
                    :
                    <SkeletonSection />
                }
            </div>
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