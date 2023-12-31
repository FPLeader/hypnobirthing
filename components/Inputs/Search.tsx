import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Search() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    return (
        <div className='relative w-full'>
            <div className={`absolute top-3 ${lngId === 0 ? 'right-2 pl-3' : 'left-2 pr-3'} flex items-center pointer-events-none`}>
                <svg aria-hidden='true' className='w-5 h-5 text-deviders' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd'></path></svg>
            </div>
            <input
                type='text'
                id='simple-search'
                className='bg-white border border-deviders text-dark text-[16px] placeholder:text-[#2B252590] placeholder:text-[Lato] rounded-[10px] block w-full pr-7 py-[9.5px] lg:py-[11px]'
                placeholder={t('Search') as string}
                required
            />
        </div>
    )
}