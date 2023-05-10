import React from 'react'
import { RegularTitle } from '../../Titles'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function index() {
    // language option
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const { t } = useTranslation();

    return (
        <div className='pt-[70px] lg:pt-[90px] pb-[60px] md:pb-[92.5px] lg:pb-[160px] w-full flex justify-center'>
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='max-w-[1225px] px-[20px] w-full'>
                <div className='w-full mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                    <RegularTitle lngId={lngId} text={'Notification'} />
                </div>
            </div>
        </div>
    )
}