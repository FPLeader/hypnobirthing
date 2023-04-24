import { useRouter } from 'next/router'
import { useState, useEffect, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppSelector } from '@/services/Hooks'
import { RegularTitle } from '@/components/Titles'
import { CategorySelect } from '@/components/Select'
import { ProfileSection, LogInSecuritySection, UpcomingSection, MyAritclesSection } from './Sections'

interface SettingsPageProps {
    settingId: number,
}

export default function Index({
    settingId
}: SettingsPageProps) {
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const { isLogIn } = useAppSelector((state) => state.auth);

    const tabOptions = [
        { id: 0, value: 'Profile Pashut Laledet' },
        { id: 1, value: 'Log-in and security' },
        { id: 2, value: 'Upcoming Sessions' },
        { id: 3, value: 'My articles' },
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
            <div className='w-full flex justify-center my-[20px] md:my-[30px] lg:my-[50px]'>
                <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                    <RegularTitle text='Profile Settings' />
                    {domLoaded &&
                        <>
                            <div className='max-w-[864px] text-dark'>
                                <div className='sm:hidden'>
                                    <CategorySelect
                                        category='Language'
                                        selectItems={tabOptions}
                                        inputValue={tab}
                                        handleChange={setTab}
                                    />
                                </div>
                                <ul className='hidden text-[14px] font-medium text-center divide-x divide-beighe rounded-[10px] overflow-hidden border-[2px] border-beighe sm:flex'>
                                    <li className='w-full'>
                                        <div
                                            className={OptionClass(0)}
                                            onClick={() => changeTab(0)}
                                        >profile Pashut Laledet</div>
                                    </li>
                                    <li className='w-full'>
                                        <div
                                            className={OptionClass(1)}
                                            onClick={() => changeTab(1)}
                                        >Log-in and security</div>
                                    </li>
                                    <li className='w-full'>
                                        <div
                                            className={OptionClass(2)}
                                            onClick={() => changeTab(2)}
                                        >Upcoming Sessions</div>
                                    </li>
                                    <li className='w-full'>
                                        <div
                                            className={OptionClass(3)}
                                            onClick={() => changeTab(3)}
                                        >My articles</div>
                                    </li>
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
