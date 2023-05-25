import { useState, useEffect } from 'react'
import { SearchButton, ExpandButton } from '@/components/Buttons'
import { CategorySelect } from '../../Select'
import { CategoryInput } from '@/components/Inputs'
import { CourseCardType, SearchResultType, SearchResult } from '@/services/Constants/CardsData'
import { CourseCard, VideoCard } from '@/components/Cards'
import { RegularTitle } from '../../Titles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
    SkeletonSection
} from './Sections'

import API from '@/services/API'
import { toast } from 'react-toastify'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function UpcomingCourse() {
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const { t } = useTranslation();

    // values
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTeacher, setSelectedTeacher] = useState<string>('');

    const [isOpen1, setIsOpen1] = useState<boolean>(true);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        mobile2: {
            breakpoint: { max: 768, min: 530 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 530, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    interface MainBodyType {
        pageTitle: string[],
        text1: string[],
        fileName1: string,
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'upcomingcourse',
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
        <div className='pt-[70px] lg:pt-[90px] pb-[60px] md:pb-[92.5px] lg:pb-[160px] w-full flex justify-center'>
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='max-w-[1225px] px-[20px] w-full'>
                {domLoaded === 1 && previousMainBody ?
                    <>
                        <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                            <RegularTitle lngId={lngId} text={previousMainBody.pageTitle[lngId]} />
                        </div>
                        <div className='w-full mt-[20px] flex flex-col-reverse lg:flex-row md:justify-between lg:items-center gap-[20px] md:gap-x-[35px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className={`${isOpen1 ? 'line-clamp-6' : 'line-clamp-0'} transition duration-300 paragraph text-[16px] whitespace-pre-line`}>
                                    {previousMainBody.text1[lngId]}
                                </div>
                                <div onClick={() => setIsOpen1(!isOpen1)}>
                                    <ExpandButton />
                                </div>
                            </div>
                            <div className='flex justify-center max-h-[300px]'>
                                <div className='w-full lg:min-w-[500px] sm:max-w-[500px]'>
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
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] lg:mt-[40px] w-full max-w-[1068px] flex flex-col md:flex-row items-end gap-[10px]'>
                            <CategoryInput
                                category='Area'
                                placeholder='US'
                                inputValue={selectedArea}
                                handleChange={setSelectedArea}
                                className={'w-full'}
                            />
                            <CategoryInput
                                category='Estimated date of birth'
                                placeholder='01/31/2023'
                                inputValue={selectedDate}
                                handleChange={setSelectedDate}
                                className={'w-full'}
                            />
                            <CategoryInput
                                category='Teacher'
                                placeholder='Aji'
                                inputValue={selectedTeacher}
                                handleChange={setSelectedTeacher}
                                className={'w-full'}
                            />
                            {/* <CategorySelect category='Area' selectItems={SelectData1} />
                                <CategorySelect category='Estimated date of birth' selectItems={SelectData1} />
                                <CategorySelect category='Teacher' selectItems={SelectData1} /> */}
                            <SearchButton />
                        </div>
                        <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] flex flex-col gap-[20px] lg:gap-[40px]'>
                            {SearchResult.map((MonthData: SearchResultType, index: number) => (
                                <div key={index} className='flex flex-col gap-[25px]'>
                                    <div className='text-dark font-medium text-[28px]'>Month:&nbsp;{months[MonthData.month - 1]}</div>
                                    <Carousel
                                        draggable={false}
                                        infinite
                                        ssr
                                        responsive={responsive}
                                        containerClass='carousel-container'
                                        shouldResetAutoplay={false}
                                    >
                                        {/* {MonthData.cards.map((card: CourseCardType, index: number) => (
                                            <div dir={lngId === 0 ? 'ltr' : 'rtl'} key={index} className='min-[530px]:mx-[12.5px]'>
                                                <CourseCard
                                                    date={card.date}
                                                    title={card.title}
                                                    location={card.location}
                                                    teacher={card.teacher}
                                                />
                                            </div>
                                        ))} */}
                                    </Carousel>
                                </div>
                            ))}
                        </div>
                        <style>{`
                            .react-multiple-carousel__arrow {
                                background: #DFD3BC;
                            }
                            .react-multiple-carousel__arrow--left {
                                left: calc(2% + 1px);
                            }
                            .react-multiple-carousel__arrow--right {
                                right: calc(2% + 1px);
                            }
                            `}
                        </style>
                    </>
                    :
                    <SkeletonSection />
                }
            </div>
        </div>
    )
}
