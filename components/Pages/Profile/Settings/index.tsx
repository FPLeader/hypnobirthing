import { useRouter } from 'next/router'
import { useState, useEffect, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppSelector } from '@/services/Hooks'
import { RegularTitle } from '@/components/Titles'
import { CategorySelect } from '@/components/Select'
import { ProfileSection, LogInSecuritySection, UpcomingSection, MyAritclesSection } from './Sections'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
interface SettingsPageProps {
    settingId: number,
}

export default function Index({
    settingId
}: SettingsPageProps) {
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const { isLogIn } = useAppSelector((state) => state.auth);
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    const tabOptions = [
        { id: 0, value: 'PROFILE PASHUT LALEDET' },
        { id: 1, value: 'LOG-IN AND SECURITY' },
        { id: 2, value: 'UPCOMING SESSIONS' },
        { id: 3, value: 'MY ARTICLES' },
    ]
    const [tab, setTab] = useState(tabOptions[0]);

    // initalize
    useEffect(() => {
        if (isLogIn === '') {
            router.push('/login');
        }
        setDomLoaded(true);
    }, []);

    useLayoutEffect(() => {
        setTab(tabOptions[settingId]);
    }, [settingId]);

    const changeTab = (value: number) => {
        router.push({ pathname: '/profile/settings', query: { setting: value } });
    }

    const OptionClass = (OptionIndex: number) => {
        let style = 'inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all';
        if (OptionIndex === tab.id)
            style += ' bg-beighe';
        else
            style += ' bg-bcg hover:bg-bcg_2';
        return style;
    }

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <div className='w-full flex justify-center py-[20px] md:py-[30px] lg:py-[50px]'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                    <RegularTitle lngId={lngId} text={t('Profile Settings')} />
                    {domLoaded &&
                        <>
                            <div className='max-w-[864px] text-dark'>
                                <div className='sm:hidden'>
                                    <CategorySelect
                                        category=''
                                        selectItems={tabOptions}
                                        inputValue={tab}
                                        handleChange={setTab}
                                    />
                                </div>
                                <ul className='hidden text-[14px] font-medium text-center divide-x divide-beighe rounded-[10px] overflow-hidden border-[2px] border-beighe sm:flex'>
                                    {tabOptions.map((tabOption, index: number) => (
                                        <li key={`tab-option-${index}`} className='w-full overflow-hidden'>
                                            <div
                                                className={OptionClass(index)}
                                                onClick={() => changeTab(index)}
                                            >
                                                {t(tabOption.value)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {
                                tab.id === 0 ?
                                    <ProfileSection />
                                    :
                                    tab.id === 1 ?
                                        <LogInSecuritySection />
                                        :
                                        tab.id === 2 ?
                                            <div>
                                                <UpcomingSection />
                                            </div>
                                            :
                                            <div>
                                                <MyAritclesSection />
                                            </div>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
