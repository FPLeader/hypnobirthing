import { useState, useEffect } from 'react';
import { Banner, UpcomingClassesBar } from '@/components/Sections'
import {
    IntroductionSection,
    SoftLandingSection,
    BreastfeedingSection,
    CourseSection,
    PostpartumSection,
    NewMomSection,
    SkeletonSection
} from './Sections'
import { RegularTitle } from '@/components/Titles';
import { BannerSkeleton } from '@/components/Skeletons'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Index() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        topImageUrl: string,
        pageTitle: string[],
        title1: string[],
        title2: string[],
        title3: string[],
        title4: string[],
        title5: string[],
        title6: string[],
        text1: string[],
        text2: string[],
        text3: string[],
        text4: string[],
        text5: string[],
        text6: string[],
        text7: string[],
        fileName1: string,
        fileName2: string,
        fileName3: string,
        fileName4: string,
        fileName5: string,
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'afterthebirth',
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

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            {domLoaded === 1 && previousMainBody ?
                <Banner image={process.env.FILE_IMAGE_BASE + previousMainBody.topImageUrl} />
                :
                <BannerSkeleton />
            }
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            <RegularTitle
                                lngId={lngId}
                                text={previousMainBody.pageTitle[lngId]}
                            />
                            <IntroductionSection
                                title={previousMainBody.title1[lngId]}
                                text={previousMainBody.text1[lngId]}
                                fileName={previousMainBody.fileName1}
                            />
                            <SoftLandingSection
                                title1={previousMainBody.title2[lngId]}
                                title2={previousMainBody.title3[lngId]}
                                text1={previousMainBody.text2[lngId]}
                                text2={previousMainBody.text3[lngId]}
                                fileName={previousMainBody.fileName2}
                            />
                            <BreastfeedingSection
                                title={previousMainBody.title4[lngId]}
                                text={previousMainBody.text4[lngId]}
                                fileName={previousMainBody.fileName3}
                            />
                            <CourseSection
                            />
                            <PostpartumSection
                                title={previousMainBody.title5[lngId]}
                                text={previousMainBody.text5[lngId]}
                                fileName={previousMainBody.fileName4}
                            />
                            <CourseSection
                            />
                            <NewMomSection
                                title={previousMainBody.title6[lngId]}
                                text1={previousMainBody.text6[lngId]}
                                text2={previousMainBody.text7[lngId]}
                                fileName={previousMainBody.fileName5}
                            />
                        </>
                        :
                        <SkeletonSection />
                    }
                </div>
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