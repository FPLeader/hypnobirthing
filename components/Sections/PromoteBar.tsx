import { BlogData, BlogType } from '@/services/Constants/Sections/BlogData'
import { useRouter } from 'next/router'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function PromoteBar() {
    const router = useRouter();
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='flex flex-col md:flex-row md:justify-between gap-[20px] md:gap-[35px]'>
                    {BlogData.map((obj: BlogType, index: number) => (
                        <button
                            key={index}
                            className='min-h-[200px] md:min-h-[253px] py-[20px] md:py-[25px] flex flex-col justify-between items-center w-full rounded-[10px] border-[2px] border-beighe bg-bcg hover:bg-bcg_2 active:bg-beighe overflow-hidden transactioin-all duration-300'
                            onClick={() => router.push(obj.link)}
                        >
                            <div className='w-[100px] md:w-[120px]'>
                                <img draggable='false' src={obj.image} alt={obj.title} className='w-full' />
                            </div>
                            <div className='text-dark text-[20px] md:text-[32px] font-light italic text-center px-[20px]'>{t(obj.title)}</div>
                        </button>
                    ))}
                </div >
            </div>
        </div>
    )
}