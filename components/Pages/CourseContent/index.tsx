import { Banner, PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { RegularTitle } from '@/components/Titles'
import { ExerciseSection, TechniquesSection } from './Sections'
import {
    SkeletonSection
} from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'

import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

export default function Index() {
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        pageTitle: string[],
        title1: string[],
        title2: string[],
        text1: string[],
        text2: string[],
        text3: string[],
        text4: string[],
        text5: string[],
        text6: string[],
        text7: string[],
        topImageUrl: string,
        fileName1: string,
        fileName2: string,
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'coursecontent',
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
            <div dir={lngId ? 'rtl' : 'ltr'} className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            <div className='mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                                <RegularTitle lngId={lngId} text={previousMainBody.pageTitle[lngId]} />
                            </div>
                            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[40px] lg:gap-y-[70px] items-center'>
                                <ExerciseSection
                                    text1={previousMainBody.text1[lngId]}
                                    text2={previousMainBody.text2[lngId]}
                                    text3={previousMainBody.text3[lngId]}
                                />
                                {
                                    isImageOrVideoOrYoutube(previousMainBody.fileName1) === 'image'
                                        ?
                                        <img
                                            draggable='false'
                                            src={process.env.FILE_IMAGE_BASE + previousMainBody.fileName1}
                                            alt=''
                                            className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                                        />
                                        :
                                        <div className='w-full'>
                                            <div className='min-h-[200px] max-w-[800px] m-auto'>
                                                <div className='aspect-w-16 aspect-h-9'>
                                                    <VideoCard
                                                        title=''
                                                        videoUrl={previousMainBody.fileName1}
                                                        style='min-h-[200px] max-h-[480px]'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                }
                                {/* <img draggable='false' src='/img/coursecontent1.png' alt='' className={`w-full h-full max-lg:max-h-[480px] rounded-[10px] lg:rounded-[15px] object-cover ${process.env.DEV_MODE && 'blur-lg'}`} /> */}
                                {/* <img draggable='false' src='/img/coursecontent2.png' alt='' className={`w-full h-full max-lg:max-h-[985px] rounded-[10px] lg:rounded-[15px] object-cover ${process.env.DEV_MODE && 'blur-lg'}`} /> */}
                                {
                                    isImageOrVideoOrYoutube(previousMainBody.fileName2) === 'image'
                                        ?
                                        <img
                                            draggable='false'
                                            src={process.env.FILE_IMAGE_BASE + previousMainBody.fileName2}
                                            alt=''
                                            className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                                        />
                                        :
                                        <div className='w-full'>
                                            <div className='min-h-[200px] max-w-[800px] m-auto'>
                                                <div className='aspect-w-16 aspect-h-9'>
                                                    <VideoCard
                                                        title=''
                                                        videoUrl={previousMainBody.fileName2}
                                                        style='min-h-[200px] max-h-[480px]'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                }
                                <div className='max-lg:row-start-3'>
                                    <TechniquesSection
                                        lngId={lngId}
                                        title1={previousMainBody.title1[lngId]}
                                        title2={previousMainBody.title2[lngId]}
                                        text4={previousMainBody.text4[lngId]}
                                        text5={previousMainBody.text5[lngId]}
                                        text6={previousMainBody.text6[lngId]}
                                        text7={previousMainBody.text7[lngId]}
                                    />
                                </div>
                            </div>
                        </>
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