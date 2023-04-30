import { useRouter } from 'next/router'
import { SupportCards, SupportCardType } from '@/services/Constants/Sections/BlogData'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function SupportBar() {
    const router = useRouter();
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='grid lg:grid-cols-2 gap-[20px] md:gap-[35px]'>
                    {SupportCards.map((obj: SupportCardType, index: number) => (
                        <button
                            key={index}
                            className='p-[15px] lg:p-[25px] flex items-center w-full rounded-[10px] border-[2px] border-beighe bg-bcg_2 hover:bg-beighe active:bg-bcg_2 cursor-pointer select-none overflow-hidden transactioin-all duration-300 gap-[15px]'
                            onClick={() => router.push(obj.link)}
                        >
                            <div className='w-full max-w-[90px] md:max-w-[118px]'>
                                <img draggable='false' src={obj.image} alt={obj.title} className='w-full' />
                            </div>
                            <div className='text-dark text-[20px] md:text-[32px] font-light italic'>{t(obj.title)}</div>
                        </button>
                    ))}
                </div >
            </div>
        </div>
    )
}