import { useTranslation } from 'react-i18next'

interface CardProps {
    cd_educator: string,
    ds_avatar: string,
    name: string,
    title: string,
    text: string,
    date: Date,
}

export default function TeacherProfile({
    cd_educator,
    ds_avatar,
    name,
    title,
    text,
    date
}: CardProps) {
    const { t } = useTranslation();
    const moment = require('moment');

    return (
        <div className='max-md:max-w-[385px] max-md:m-auto lg:max-w-[385px] w-full flex flex-col md:flex-row md:items-center lg:flex-col overflow-hidden border-[2px] rounded-[15px] border-beighe bg-bcg_2'>
            <div className='md:max-lg:w-[229px] w-full h-full'>
                <img
                    draggable='false'
                    src={ds_avatar === undefined || ds_avatar === ''
                        ?
                        '/img/noavatar.png'
                        :
                        `${process.env.FILE_IMAGE_BASE + ds_avatar}`
                    }
                    alt='profile'
                    className={`object-cover w-full h-full`}
                />
            </div>
            <div className='flex flex-col max-md:items-center max-md:text-center lg:items-center lg:text-center px-[10px] py-[15px] md:px-[35px] md:py-0 lg:px-[20px] lg:py-[20px] gap-[10px] md:gap-[15px] lg:gap-[20px] text-dark'>
                <div className='flex flex-col gpa-[10px]'>
                    <div className='text-[24px] lg:text-[28px] font-me dium'>
                        {name}
                    </div>
                    <div className='text-[14px] md:text-[16px] lg:text-[20px]'>
                        {title}
                    </div>
                </div>
                <a
                    href={`/user/${cd_educator}`}
                    target='_blank'
                    rel='noreferrer'
                    className={`w-full md:w-max h-max text-center px-[28px] md:px-[30px] lg:px-[38px] py-[12.5px] lg:py-[15px] text-dark text-[14px] font-medium uppercase rounded-[500px] select-none transition-all duration-300 bg-beighe hover:bg-bhover active:bg-beighe cursor-pointer`}
                >
                    {text}
                </a>
                <div className='text-[14px] text-Label'>
                    {t('Last update')}&nbsp;{moment(date).format('DD.MM.YYYY')}
                </div>
            </div>
        </div>
    )
}
