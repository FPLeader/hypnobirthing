import { useState } from 'react'
import {
    EditSessionModal,
    CoEducatorListModal
} from '@/components/Modals'
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

interface EducatorItemType {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
}

interface WaitCourseCardType {
    id_course: string,
    js_location: locationType,
    dt_lessons: Date[],
    nu_maxcouples: number,
    nu_price: number,
    nu_inventory: number,
    ic_extracourse: boolean,
    nm_user: string[],
    mainbody: mainbodyType[],
    ar_members: string[],
    ar_requestmembers: string[],
    educatorsList: EducatorItemType[],
    loadCourses: () => void
}

export default function Course({
    id_course,
    js_location,
    dt_lessons,
    nu_maxcouples,
    nu_price,
    nu_inventory,
    ic_extracourse,
    nm_user,
    mainbody,
    ar_members,
    ar_requestmembers,
    educatorsList,
    loadCourses
}: WaitCourseCardType) {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const moment = require('moment');

    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);

    function closeModalEdit() {
        setIsOpenEdit(false)
    }

    function openModalEdit() {
        setIsOpenEdit(true)
    }

    const [isOpenCoEducators, setIsOpenCoEducators] = useState<boolean>(false);

    function closeModalCoEducators() {
        setIsOpenCoEducators(false)
    }

    function openModalCoEducators() {
        setIsOpenCoEducators(true)
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
            <EditSessionModal
                isOpen={isOpenEdit}
                closeModal={closeModalEdit}
                id_course={id_course}
                js_location={js_location}
                dt_lessons={dt_lessons}
                nu_maxcouples={nu_maxcouples}
                nu_price={nu_price}
                nu_inventory={nu_inventory}
                ic_extracourse={ic_extracourse}
                mainbody={mainbody}
                ar_members={ar_members}
                ar_requestmembers={ar_requestmembers}
                educatorsList={educatorsList}
                loadCourses={loadCourses}
            />
            <CoEducatorListModal
                lngId={lngId}
                isOpen={isOpenCoEducators}
                closeModal={closeModalCoEducators}
                loadCourses={loadCourses}
                ar_members={ar_members}
                ar_requestmembers={ar_requestmembers}
                educatorsList={educatorsList}
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
                    onClick={openModalEdit}
                >
                    Edit
                </button>
                <button
                    className='w-full h-[45px] text-[14px] border border-beighe uppercase flex justify-center items-center bg-[#DFD3BC80] hover:bg-beighe active:bg-[#DFD3BC80] transition-all duration-300'
                    onClick={openModalCoEducators}
                >
                    Co Educators
                </button>
            </div>
        </div>
    )
}