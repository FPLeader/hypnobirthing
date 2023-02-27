import { useEffect, useState } from 'react'

interface CourseCardType {
    date: number,
    title: string,
    location: string,
    teacher: string,
}

export default function Course({
    date,
    title,
    location,
    teacher
}: CourseCardType) {
    const moment = require('moment');
    const [dateShow, setDateShow] = useState<number>(Date.now());

    useEffect(() => {
        setDateShow(date);
    }, [date])
    return (
        <div className='rounded-[10px] border border-beighe'>
            <div className='h-[38px] text-[] text-[12px] lg:text-[16px] flex justify-center items-center bg-bcg_2'>{moment(dateShow).format('DD/MM/YYYY, dddd, HH:mm')}</div>
            <div className='py-[15px] flex flex-col gap-[6px] text-center text-dark'>
                <div className='font-medium text-[16px] lg:text-[24px]'>{title}</div>
                <div className='opacity-60 text-[14px] lg:text-[18px]'>{location}</div>
                <div className='text-[14px] lg:text-[18px]'>—&nbsp;{teacher}</div>
            </div>
            <div className='h-[45px] text-[14px] uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transaction-all duration-300 cursor-pointer select-none'>reserve my spot</div>
        </div>
    )
}