import { InsuranceCard } from '@/components/Cards'
import {
    InsuranceCardType,
    InsuranceCards,
    InsuranceText1,
    InsuranceText2
} from '@/services/Constants/CardsData'
import { SkeletonSection } from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'
import { useState, useEffect } from 'react'
import { RegularTitle } from '@/components/Titles'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Insurance() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface ItemType {
        titles: string[],
        texts: string[],
        isList: boolean,
    }

    interface MainBodyType {
        title1: string[],
        text1: string[],
        text2: string[],
        insuranceCards: ItemType[],
        text3: string[],
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'insurance',
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
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px] pt-[70px] md:pt-[90px]'>
                    <div className='mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                        {domLoaded === 1 && previousMainBody ?
                            <>
                                <RegularTitle
                                    lngId={lngId}
                                    text={previousMainBody.title1[lngId]}
                                />
                                <div className={`text-dark text-[16px] md:max-w-[800px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} mt-[10px] md:mt-[20px]`}>
                                    {previousMainBody.text1[lngId]}
                                </div>
                                <div className='flex flex-col mt-[20px] md:mt-[60px] gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                                    <div className='p-[20px] border-[2px] border-beighe rounded-[10px]'>
                                        <ul className={`list-disc ${lngId === 0 ? 'pl-[20px]' : 'pr-[20px]'}`}>
                                            {previousMainBody.text2[lngId].split('\n').map((obj: string, index: number) => (
                                                <li
                                                    key={index}
                                                    className='text-dark text-[16px] md:text-[18px]'
                                                >
                                                    {obj}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='grid md:grid-cols-2 grid-flow-row gap-[20px] md:gap-[35px]'>
                                            {previousMainBody.insuranceCards.map((obj: ItemType, index: number) => (
                                                <InsuranceCard
                                                    lngId={lngId}
                                                    key={index}
                                                    title={obj.titles[lngId]}
                                                    content={obj.texts[lngId]}
                                                    list={obj.isList}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <ul className={`list-disc max-w-[802px] ${lngId === 0 ? 'pl-[20px]' : 'pr-[20px]'}`}>
                                        {previousMainBody.text3[lngId].split('\n').map((obj: string, index: number) => (
                                            <li
                                                key={index}
                                                className='text-dark text-[16px] md:text-[18px]'
                                            >
                                                {obj}
                                            </li>
                                        ))}
                                    </ul>
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