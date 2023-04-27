import { Banner, SupportBar } from '@/components/Sections'
import {
    SkeletonSection
} from './Sections'
import { BannerSkeleton } from '@/components/Skeletons'
import { RegularTitle } from '@/components/Titles'

import { useState, useEffect } from 'react'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

export default function ProTrainings() {
    const style = {
        Content: 'whitespace-pre-line text-dark text-[16px] lg:text-[18px]',
    }
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        pageTitle: string[],
        text1: string[],
        text2: string[],
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
            id_page: 'trainings',
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
                <div className='w-full max-w-[1225px] mx-[20px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            {/* <div className={`text-dark text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[20px] md:text-[24px] lg:text-[28px]`}>
                                {previousMainBody.pageTitle[lngId]}
                            </div> */}
                            <RegularTitle lngId={lngId} text={previousMainBody.pageTitle[lngId]} />
                            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                                <div className='flex flex-col gap-[16px]'>
                                    <div className={style.Content}>
                                        {previousMainBody.text1[lngId]}
                                    </div>
                                </div>
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
                                    <div className={style.Content}>
                                        {previousMainBody.text2[lngId]}
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <SkeletonSection />
                    }
                </div>
            </div>
            <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] mb-[60px] md:mb-[80px] lg:mb-[160px]'>
                <SupportBar />
            </div>
        </div >
    )
}