import { MiddleButton } from '../Buttons'

interface CardProps {
    image: string,
    name: string,
    title: string,
    text: string,
    link?: string,
    date: number,
}

export default function TeacherProfile({
    image,
    name,
    title,
    text,
    link = '/',
    date = Date.now()
}: CardProps) {
    const moment = require('moment');

    return (
        <div className='max-md:max-w-[385px] max-md:m-auto lg:max-w-[385px] w-full flex flex-col md:flex-row md:items-center lg:flex-col overflow-hidden border-[2px] rounded-[15px] border-beighe bg-bcg_2'>
            <div className='md:max-lg:w-[229px] w-full'>
                <img draggable='false' src={image} alt={name} className={`max-w-[385px] w-full ${process.env.DEV_MODE ? 'blur-lg':''}`} />
            </div>
            <div className='flex flex-col max-md:items-center max-md:text-center lg:items-center lg:text-center px-[10px] py-[15px] md:px-[35px] md:py-0 lg:px-[20px] lg:py-[20px] gap-[10px] md:gap-[15px] lg:gap-[20px] text-dark'>
                <div className='flex flex-col gpa-[10px]'>
                    <div className='text-[24px] lg:text-[28px] font-me dium'>{name}</div>
                    <div className='text-[14px] md:text-[16px] lg:text-[20px]'>{title}</div>
                </div>
                <MiddleButton text={text} link={link} />
                <div className='text-[14px] text-Label'>Last update&nbsp;{moment(date).format('DD.MM.YYYY')}</div>
            </div>
        </div>
    )
}
