interface BigCourseCardType {
    image: string,
    date: number,
    title: string,
    location: string,
    teacher: string,
}

export default function BigCourse({
    image,
    date = Date.now(),
    title,
    location,
    teacher
}: BigCourseCardType) {
    const moment = require('moment');

    return (
        <div className='w-full flex flex-col' >
            <div className='flex flex-col bg-beighe hover:cursor-pointer rounded-[15px] overflow-hidden'>
                <img draggable='false' src={image} alt='' className='w-full blur-lg' />
                <div className='text-dark text-[12px] lg:text-[16px] text-center pt-[7.5px] lg:pt-[10px] pb-[6.5px] lg:pb-[9px]'>{moment(date).format('DD/MM/YYYY, dddd, HH:mm')}</div>
            </div>
            <div className='mt-[10px] lg:mt-[15px] text-dark text-center flex flex-col gap-y-[10px] lg:gap-y-[6px]'>
                <div className='text-[16px] lg:text-[24px] font-medium'>{title}</div>
                <div className='text-[14px] lg:text-[18px] opacity-60'>{location}</div>
                <div className='text-[14px] lg:text-[18px]'>—&nbsp;{teacher}</div>
            </div>
        </div>
    )
}