import { useContext } from 'react'
import { WorldIcon } from '@/assests/Icons'

import i18n from '@/services/i18n'
import LocaleContext from '@/services/LocaleContext'

export default function Language() {
    const { locale } = useContext(LocaleContext);

    return (
        <div
            className='max-md:hidden h-max bg-white hover:bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none transition-all duration-300'
            onClick={() => {
                i18n.changeLanguage(locale !== 'en' ? 'en' : 'he')
            }}
        >
            <WorldIcon />
            {locale === 'en' ? 'En' : 'He'}
        </div>
    )
}
