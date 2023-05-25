
interface CourseCardType {
    id_course: string,
    date: Date,
    title: string,
    location: string,
    teacher: string,
}

export default function Course({
    id_course,
    date,
    title,
    location,
    teacher,
}: CourseCardType) {
    const moment = require('moment');

    return (
        <div className='rounded-[10px] border-[2px] border-beighe overflow-hidden grid grid-rows-[38px_1fr] md:grid-rows-[60px_1fr]'>
            <div className='h-[38px] md:h-[60px] text-center text-[14px] lg:text-[16px] flex justify-center items-center bg-bcg_2'>
                {moment(date).format('DD/MM/YYYY, dddd, HH:mm')}
            </div>
            <div className='flex justify-center items-center'>
                <div className='py-[15px] px-[5px] flex flex-col gap-[6px] text-center text-dark'>
                    <div className='font-medium text-[16px] lg:text-[24px]'>
                        {title}
                    </div>
                    <div className='opacity-60 text-[14px] lg:text-[18px]'>
                        {location}
                    </div>
                    <div className='text-[14px] lg:text-[18px]'>
                        —&nbsp;{teacher}
                    </div>
                </div>
            </div>
            <a
                href={`/course/${id_course}`}
                target='_blank'
                rel='noreferrer'
                className='w-full h-[45px] text-[14px] uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transition-all duration-300'
            >
                reserve my spot
            </a>
        </div>
    )
}