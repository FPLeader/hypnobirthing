import {
    IntroductionSection,
    OurBenefitsSection,
    ReviewsSection,
    PhilosophySection,
    TeachersSection,
    SkeletonSection
} from './Sections'
import { MiddleButton } from '@/components/Buttons'
import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function index() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface ReviewCardType {
        title: string[],
        content: string[],
        name: string[],
        address: string[],
        date: string[],
    }

    interface MainBodyType {
        location: string[],
        startDate: Date,
        endDate: Date,
        title1: string[],
        text1: string[],
        title2: string[],
        text2: string[],
        fileName1: string,
        fileName2: string,
        fileName3: string,
        title3: string[],
        reviews: ReviewCardType[]
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'oneday',
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
        <div className='w-full flex justify-center pt-[70px] md:pt-[90px] pb-[20px] md:pb-[30px] lg:pb-[90px]'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[70px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            <IntroductionSection
                                lngId={lngId}
                                location={previousMainBody.location}
                                startDate={previousMainBody.startDate}
                                endDate={previousMainBody.endDate}
                                fileName={previousMainBody.fileName1}
                            />
                            <OurBenefitsSection
                                lngId={lngId}
                                title={previousMainBody.title1}
                                text={previousMainBody.text1}
                                fileName={previousMainBody.fileName2}
                            />
                            <ReviewsSection
                                lngId={lngId}
                                title={previousMainBody.title3}
                                reviews={previousMainBody.reviews}
                            />
                            <PhilosophySection
                                lngId={lngId}
                                title={previousMainBody.title2}
                                text={previousMainBody.text2}
                                fileName={previousMainBody.fileName3}
                            />
                            <TeachersSection />
                        </>
                        :
                        <SkeletonSection />
                    }
                    <div className='flex flex-col md:flex-row gap-[15px] md:gap-[20px]'>
                        <MiddleButton text='to register' link='/signup?type=1' paddingType={1} />
                        <MiddleButton text='contact us' type={1} link='/contact' paddingType={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}