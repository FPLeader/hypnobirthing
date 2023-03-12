import { useState } from 'react'
import { RegularTitle } from '@/components/Titles'
import { ProfileSection, LogInSecuritySection, UpcomingSection, MyAritclesSection } from './Sections'

export default function Index() {
    const [tab, setTab] = useState<number>(0);

    const OptionClass = (OptionIndex: number) => {
        let style = 'inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all';
        if (OptionIndex === tab)
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
                    <div className='max-w-[864px] text-dark'>
                        <div className='sm:hidden'>
                            <select
                                id='tabs'
                                className='bg-white border border-beighe text-sm rounded-lg block w-full p-2.5'
                                onChange={(e) => setTab(Number(e.target.value))}
                            >
                                <option value={0}>profile Pashut Laledet</option>
                                <option value={1}>Log-in and security</option>
                                <option value={2}>Upcoming Sessions</option>
                                <option value={3}>My articles</option>
                            </select>
                        </div>
                        <ul className='hidden text-[14px] font-medium text-center divide-x divide-beighe rounded-[10px] overflow-hidden border-[2px] border-beighe sm:flex'>
                            <li className='w-full'>
                                <div
                                    className={OptionClass(0)}
                                    onClick={() => setTab(0)}
                                >profile Pashut Laledet</div>
                            </li>
                            <li className='w-full'>
                                <div
                                    className={OptionClass(1)}
                                    onClick={() => setTab(1)}
                                >Log-in and security</div>
                            </li>
                            <li className='w-full'>
                                <div
                                    className={OptionClass(2)}
                                    onClick={() => setTab(2)}
                                >Upcoming Sessions</div>
                            </li>
                            <li className='w-full'>
                                <div
                                    className={OptionClass(3)}
                                    onClick={() => setTab(3)}
                                >My articles</div>
                            </li>
                        </ul>
                    </div>
                    {
                        tab === 0 ?
                            <ProfileSection />
                            :
                            tab === 1 ?
                                <LogInSecuritySection />
                                :
                                tab === 2 ?
                                    <div>
                                        <UpcomingSection />
                                    </div>
                                    :
                                    <div>
                                        <MyAritclesSection />
                                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
