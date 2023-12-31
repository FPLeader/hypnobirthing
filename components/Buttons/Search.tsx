import { SearchIcon } from '@/assests/Icons'
import { useTranslation } from 'react-i18next'

export default function SearchButton() {
    const { t } = useTranslation();

    return (
        <>
            <div className='max-md:w-full md:hidden max-md:flex lg:min-w-[138px] h-[46px] bg-bcg_2 hover:bg-beighe active:bg-bcg_2 lg:flex justify-center items-center border border-deviders uppercase text-[16px] rounded-[6px] cursor-pointer select-none transition-all duration-100'>
                {t('Search')}
            </div>
            <div className='max-md:hidden lg:hidden min-w-[44px] h-[44px] flex justify-center items-center bg-bcg_2 hover:bg-beighe active:bg-bcg_2 rounded-[6px] cursor-pointer select-none transition-all duration-100'>
                <SearchIcon />
            </div>
        </>
    )
}