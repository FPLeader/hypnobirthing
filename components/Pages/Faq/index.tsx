import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import {
    FaqItem,
    QuestionBox,
    SkeletonSection
} from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'
import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Faq() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface FaqItem {
        titles: string[],
        texts: string[]
    }

    interface MainBodyType {
        topImageUrl: string,
        fileName1: string,
        imageTitle: string[],
        faqs: FaqItem[]
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'faq',
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
        <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='pt-[70px] md:pt-[90px]'>
            {domLoaded === 1 && previousMainBody ?
                <Banner image={process.env.FILE_IMAGE_BASE + previousMainBody.topImageUrl} />
                :
                <BannerSkeleton />
            }
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] w-full px-[20px] mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-[35px]'>
                            <div className='w-full flex flex-col gap-y-[16px]'>
                                {previousMainBody.faqs.map((obj: FaqItem, index: number) => (
                                    <FaqItem
                                        key={index}
                                        title={obj.titles[lngId]}
                                        content={obj.texts[lngId]}
                                    />
                                ))}
                            </div>
                            <QuestionBox
                                lngId={lngId}
                                fileName={previousMainBody.fileName1}
                                title={previousMainBody.imageTitle}
                            />
                        </div>
                        :
                        <SkeletonSection />
                    }
                </div>
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