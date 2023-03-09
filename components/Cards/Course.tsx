import { useRouter } from 'next/router'

interface CourseCardType {
    date: number,
    title: string,
    location: string,
    teacher: string,
    link?: string,
}

export default function Course({
    date = Date.now(),
    title,
    location,
    teacher,
    link = '/class'
}: CourseCardType) {
    const router = useRouter();
    const moment = require('moment');

    return (
        <div className='rounded-[10px] border-[2px] border-beighe overflow-hidden'>
            <div className='h-[38px] md:h-[60px] text-center text-[14px] lg:text-[16px] flex justify-center items-center bg-bcg_2'>{moment(date).format('DD/MM/YYYY, dddd, HH:mm')}</div>
            <div className='py-[15px] px-[5px] flex flex-col gap-[6px] text-center text-dark'>
                <div className='font-medium text-[16px] lg:text-[24px]'>{title}</div>
                <div className='opacity-60 text-[14px] lg:text-[18px]'>{location}</div>
                <div className='text-[14px] lg:text-[18px]'>—&nbsp;{teacher}</div>
            </div>
            <button
                className='w-full h-[45px] text-[14px] uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transition-all duration-300'
                onClick={() => router.push(link)}
            >
                reserve my spot</button>
        </div>
    )
}