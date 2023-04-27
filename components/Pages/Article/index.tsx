import { useState, useEffect } from 'react'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import {
    OurBlogPostsSection,
    BirthStoriesSection,
    SkeletonSection
} from './Sections'

import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'

export default function Article() {
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        pageTitle: string[],
        text1: string[],
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
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
        <div dir={lngId === 0 ? 'ltr' : 'rtl'}>
            {domLoaded === 1 && previousMainBody ?
                <>
                    <div className='pt-[70px] md:pt-[90px]'>
                        <OurBlogPostsSection
                            title={previousMainBody.pageTitle[lngId]}
                            text={previousMainBody.text1[lngId]}
                        />
                    </div>
                    <div className='mt-[20px] md:mt-[30px] lg:mt-[48px]'>
                        <BirthStoriesSection />
                    </div>
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
                </>
                :
                <SkeletonSection />
            }
        </div>
    )
}