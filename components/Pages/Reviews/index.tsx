import {
    SkeletonSection
} from './Sections'
import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { ReviewCard, ImageOrVideoCard } from '@/components/Cards'
import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Reviews() {
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
        fileName1: string,
        fileName2: string,
        fileName3: string,
        reviews: ReviewCardType[]
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'reviews',
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
            <Banner image='/img/banner5.png' />
            <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px] flex justify-center'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[35px]'>
                        {domLoaded === 1 && previousMainBody ?
                            <>
                                {/* large window */}
                                <div className='hidden lg:flex flex-col gap-[35px]'>
                                    <ReviewCard
                                        title={previousMainBody.reviews[0].title[lngId]}
                                        content={previousMainBody.reviews[0].content[lngId]}
                                        name={previousMainBody.reviews[0].name[lngId]}
                                        address={previousMainBody.reviews[0].address[lngId]}
                                        date={previousMainBody.reviews[0].date[lngId]}
                                    />
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName1}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[1].title[lngId]}
                                        content={previousMainBody.reviews[1].content[lngId]}
                                        name={previousMainBody.reviews[1].name[lngId]}
                                        address={previousMainBody.reviews[1].address[lngId]}
                                        date={previousMainBody.reviews[1].date[lngId]}
                                    />
                                </div>
                                <div className='hidden lg:flex flex-col gap-[35px]'>
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName2}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[2].title[lngId]}
                                        content={previousMainBody.reviews[2].content[lngId]}
                                        name={previousMainBody.reviews[2].name[lngId]}
                                        address={previousMainBody.reviews[2].address[lngId]}
                                        date={previousMainBody.reviews[2].date[lngId]}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[3].title[lngId]}
                                        content={previousMainBody.reviews[3].content[lngId]}
                                        name={previousMainBody.reviews[3].name[lngId]}
                                        address={previousMainBody.reviews[3].address[lngId]}
                                        date={previousMainBody.reviews[3].date[lngId]}
                                    />
                                </div>
                                <div className='hidden lg:flex flex-col gap-[35px]'>
                                    <ReviewCard
                                        title={previousMainBody.reviews[4].title[lngId]}
                                        content={previousMainBody.reviews[4].content[lngId]}
                                        name={previousMainBody.reviews[4].name[lngId]}
                                        address={previousMainBody.reviews[4].address[lngId]}
                                        date={previousMainBody.reviews[4].date[lngId]}
                                    />
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName3}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[5].title[lngId]}
                                        content={previousMainBody.reviews[5].content[lngId]}
                                        name={previousMainBody.reviews[5].name[lngId]}
                                        address={previousMainBody.reviews[5].address[lngId]}
                                        date={previousMainBody.reviews[5].date[lngId]}
                                    />
                                </div>
                                {/* md window */}
                                <div className='lg:hidden flex flex-col gap-[20px]'>
                                    <ReviewCard
                                        title={previousMainBody.reviews[0].title[lngId]}
                                        content={previousMainBody.reviews[0].content[lngId]}
                                        name={previousMainBody.reviews[0].name[lngId]}
                                        address={previousMainBody.reviews[0].address[lngId]}
                                        date={previousMainBody.reviews[0].date[lngId]}
                                    />
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName1}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[1].title[lngId]}
                                        content={previousMainBody.reviews[1].content[lngId]}
                                        name={previousMainBody.reviews[1].name[lngId]}
                                        address={previousMainBody.reviews[1].address[lngId]}
                                        date={previousMainBody.reviews[1].date[lngId]}
                                    />
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName2}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[2].title[lngId]}
                                        content={previousMainBody.reviews[2].content[lngId]}
                                        name={previousMainBody.reviews[2].name[lngId]}
                                        address={previousMainBody.reviews[2].address[lngId]}
                                        date={previousMainBody.reviews[2].date[lngId]}
                                    />
                                </div>
                                <div className='lg:hidden flex flex-col gap-[20px]'>
                                    <ReviewCard
                                        title={previousMainBody.reviews[3].title[lngId]}
                                        content={previousMainBody.reviews[3].content[lngId]}
                                        name={previousMainBody.reviews[3].name[lngId]}
                                        address={previousMainBody.reviews[3].address[lngId]}
                                        date={previousMainBody.reviews[3].date[lngId]}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[4].title[lngId]}
                                        content={previousMainBody.reviews[4].content[lngId]}
                                        name={previousMainBody.reviews[4].name[lngId]}
                                        address={previousMainBody.reviews[4].address[lngId]}
                                        date={previousMainBody.reviews[4].date[lngId]}
                                    />
                                    <ImageOrVideoCard
                                        fileName={previousMainBody.fileName3}
                                    />
                                    <ReviewCard
                                        title={previousMainBody.reviews[5].title[lngId]}
                                        content={previousMainBody.reviews[5].content[lngId]}
                                        name={previousMainBody.reviews[5].name[lngId]}
                                        address={previousMainBody.reviews[5].address[lngId]}
                                        date={previousMainBody.reviews[5].date[lngId]}
                                    />
                                </div>
                            </>
                            :
                            <SkeletonSection />
                        }
                    </div>
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