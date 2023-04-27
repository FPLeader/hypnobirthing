import { useState, useEffect } from 'react'
import { SearchButton, RegularButton } from '../../Buttons'
import { CommunityCard } from '../../Cards'
import { CategorySelect } from '../../Select'
import { SearchInput, CategoryInput } from '../../Inputs'
import { CommunityCards, CommunityCardType } from '@/services/Constants/CardsData'
import { TypeOptions, CategorySelectItemType } from '@/services/Constants/SelectOptions'
import { PromoteBar, UpcomingClassesBar } from '../../Sections'
import { RegularTitle } from '../../Titles'
import {
    SkeletonSection
} from './Sections'
import { useRouter } from 'next/router'

import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function OurCommunity() {
    const router = useRouter();
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    // values
    const [selectedCategory, setSelectedCategory] = useState<CategorySelectItemType>(TypeOptions[0]);
    const [selectedArea, setSelectedArea] = useState<string>('');

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
            id_page: 'ourcommunity',
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
        <>
            <div className='w-full flex justify-center'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full max-w-[1225px] mx-[20px] pt-[70px] md:pt-[90px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            <div className='mt-[20px] md:mt-[30px] lg:mt-[70px] md:flex md:justify-between md:items-end'>
                                <RegularTitle lngId={lngId} text={previousMainBody.pageTitle[lngId]} />
                                <div className='hidden md:block'>
                                    <div onClick={() => router.push('/signup?type=0')}>
                                        <RegularButton text={t('Become a professional')} />
                                    </div>
                                </div>
                            </div>
                            <div className={`whitespace-pre-line text-dark text-[16px] md:max-w-[800px] text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} mt-[10px] md:mt-[20px]`}>
                                {previousMainBody.text1[lngId]}
                            </div>
                            <div className='mt-[20px] block md:hidden'>
                                <div onClick={() => router.push('/signup?type=0')}>
                                    <RegularButton text={t('Become a professional')} />
                                </div>
                            </div>
                            <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                                <div className='flex w-full md:w-6/12 gap-2.5 items-end'>
                                    <CategorySelect
                                        category='Category'
                                        selectItems={TypeOptions}
                                        inputValue={selectedCategory}
                                        handleChange={setSelectedCategory}
                                        className={'w-full'}
                                    />
                                    <CategoryInput
                                        category='Area'
                                        placeholder='US'
                                        inputValue={selectedArea}
                                        handleChange={setSelectedArea}
                                        className={'w-full'}
                                    />
                                    {/* <CategorySelect category='Category' selectItems={SelectData1} />
                                        <CategorySelect category='Area' selectItems={SelectData1} /> */}
                                </div>
                                <div className='w-full flex items-center gap-[10px] md:w-6/12'>
                                    <SearchInput />
                                    <SearchButton />
                                </div>
                            </div>
                            <div className='flex flex-col md:grid md:grid-cols-3 gap-[20px] md:gap-[35px] pt-10'>
                                {
                                    CommunityCards.map((obj: CommunityCardType, index: number) => (
                                        <CommunityCard
                                            key={index}
                                            image={obj.image}
                                            name={obj.name}
                                            description={obj.description}
                                        />
                                    ))
                                }
                            </div>
                        </>
                        :
                        <SkeletonSection />
                    }
                    <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                        <PromoteBar />
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar
                    title='Upcoming Childbirth Classes'
                    buttonText='Learn More'
                    link='\upcomingcourse'
                />
            </div>
        </>
    )
}