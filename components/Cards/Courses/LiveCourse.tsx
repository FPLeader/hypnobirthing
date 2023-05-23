import { useState } from 'react'
import { useRouter } from 'next/router'
import { StudentListModal } from '../../Modals'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface locationType {
    label: string,
    place_id: string,
    lat: number,
    lng: number,
}
interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_details: string,
}

interface LiveCourseCardType {
    id_course: string,
    js_location: locationType,
    dt_lessons: Date[],
    nm_user: string[],
    mainbody: mainbodyType[]
}

export default function Course({
    id_course,
    js_location,
    nm_user,
    dt_lessons,
    mainbody,
}: LiveCourseCardType) {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const moment = require('moment');

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const currentName = () => {
        if (nm_user[lngId] !== '')
            return nm_user[lngId];
        else {
            if (lngId === 0)
                return nm_user[1];
            else if (lngId === 1)
                return nm_user[0];
        }
    }

    return (
        <div className='rounded-[10px] border-[2px] border-beighe overflow-hidden'>
            <StudentListModal
                isOpen={isOpen}
                closeModal={closeModal}
            />
            <div className='h-[38px] md:h-[60px] text-center text-[14px] lg:text-[16px] flex justify-center items-center bg-bcg_2'>
                {dt_lessons[0] && moment(dt_lessons[0]).format('DD/MM/YYYY, dddd, HH:mm')}
            </div>
            <div className='py-[15px] px-[5px] flex flex-col gap-[6px] text-center text-dark'>
                <div className='font-medium text-[16px] lg:text-[24px]'>
                    {mainbody[0].ds_title}
                </div>
                <div className='opacity-60 text-[14px] lg:text-[18px]'>
                    {js_location.label}
                </div>
                <div className='capitalize text-[14px] lg:text-[18px]'>
                    —&nbsp;{currentName()}
                </div>
            </div>

            <div className='w-full grid grid-cols-2'>
                <button
                    className='w-full h-[45px] text-[14px] border border-beighe uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transition-all duration-300'
                    onClick={openModal}
                >
                    student list
                </button>
                <a
                    className='w-full h-[45px] text-[14px] border border-beighe uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transition-all duration-300 cursor-pointer'
                    href={`/course/${id_course}`}
                    target='_blank'
                    rel='noreferrer'
                >
                    preview
                </a>
            </div>
        </div>
    )
}