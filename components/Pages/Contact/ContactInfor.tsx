import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'
import { useTranslation } from 'react-i18next'

interface ContactInforProps {
    lngId: number,
    phone: string,
    email: string,
    instagram: string,
    facebook: string,
    twitter: string,
}

export default function ContactInfor({
    lngId,
    phone,
    email,
    instagram,
    facebook,
    twitter,
}: ContactInforProps) {
    const style = {
        Wrapper: 'p-[15px] md:p-[20px] lg:p-[25px] text-dark border border-beighe bg-bcg_2 rounded-[10px] flex flex-col gap-[10px]',
        Title: 'text-[20px] md:text-[24px] font-medium',
        Content: 'text-[16px] md:text-[18px]',
        IconStyle: 'bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer',
    }
    // language option
    const { t } = useTranslation();

    return (
        <div className='grid md:grid-cols-6 lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
            <div className={`${style.Wrapper} md:max-lg:col-start-1 md:max-lg:col-span-5`}>
                <div className={style.Title}>
                    {t('Phone')}
                </div>
                <div className={style.Content}>
                    {phone}
                </div>
            </div>
            <div className={`${style.Wrapper} md:max-lg:col-start-1 md:max-lg:col-span-5`}>
                <div className={style.Title}>
                    {t('E-mail')}
                </div>
                <div className={style.Content}>
                    {email}
                </div>
            </div>
            <div className='flex justify-center items-center border border-beighe bg-bcg_2 rounded-[10px] md:max-lg:col-start-6 md:max-lg:row-start-1 md:max-lg:row-span-2'>
                <div className='p-[15px] flex md:flex-col lg:flex-row gap-[20px]'>
                    <div
                        className={style.IconStyle}
                        onClick={() => {
                            instagram !== '' &&
                                window.open(instagram, '_blank');
                        }}
                    >
                        <InstagramIcon />
                    </div>
                    <div
                        className={style.IconStyle}
                        onClick={() => {
                            facebook !== '' &&
                                window.open(facebook, '_blank');
                        }}
                    >
                        <FacebookIcon />
                    </div>
                    <div
                        className={style.IconStyle}
                        onClick={() => {
                            twitter !== '' &&
                                window.open(twitter, '_blank');
                        }}
                    >
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
