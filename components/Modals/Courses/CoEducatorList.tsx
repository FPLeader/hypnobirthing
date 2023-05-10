import { Fragment, useState, useEffect } from 'react'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { RegularTitle } from '../../Titles'

interface EducatorItemType {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
}

interface CoEducatorListProps {
    lngId: number,
    isOpen: boolean,
    closeModal: () => void,
    ar_members: string[],
    ar_requestmembers: string[],
    educatorsList: EducatorItemType[],
    loadCourses: () => void,
}

export default function CoEducatorList({
    lngId = 0,
    isOpen,
    closeModal,
    ar_members,
    ar_requestmembers,
    educatorsList,
    loadCourses
}: CoEducatorListProps) {
    const { width } = useWindowSize();

    const currentName = (value: string[]) => {
        if (value[lngId] !== '')
            return value[lngId];
        else {
            if (lngId === 0)
                return value[1];
            else if (lngId === 1)
                return value[0];
        }
        return '';
    }

    const educatorItemAvatar = (educatorId: string): string => {
        let currentEducator = educatorsList.filter(item => (item.cd_educator === educatorId));
        if (currentEducator[0])
            return currentEducator[0].ds_avatar;
        return '';
    }

    const educatorItemName = (educatorId: string): string[] => {
        let currentEducator = educatorsList.filter(item => (item.cd_educator === educatorId));
        if (currentEducator[0])
            return currentEducator[0].nm_user;
        return ['', ''];
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-[6000]' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-dark bg-opacity-90' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[800px] transform overflow-hidden rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[20px] lg:text-[28px] text-center font-medium leading-normal text-dark pr-[35px]'
                                >
                                    Co Educators
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div
                                    dir={lngId === 0 ? 'ltr' : 'rtl'}
                                    className='mt-[20px] grid sm:grid-cols-2 gap-[10px] font-[lato]'
                                >
                                    {ar_members.length !== 0 &&
                                        <div className='w-full grid gap-[10px]'>
                                            <div
                                                className='w-full text-[16px] lg:text-[20px]'
                                            >
                                                Accepected Members
                                            </div>
                                            <div className='grid gap-[10px]'>
                                                {ar_members.map((educatorId: string, index: number) => (
                                                    <div
                                                        key={`co-educator-${index}`}
                                                        className='rounded-full bg-bhover relative p-[5px] sm:w-max'
                                                    >
                                                        <div
                                                            className={`w-full flex gap-[10px] items-center ${lngId === 0 ? 'pr-[12px]' : 'pl-[12px] flex-row-reverse'}`}
                                                        >
                                                            <img
                                                                draggable='false'
                                                                src={educatorItemAvatar(educatorId) === ''
                                                                    ?
                                                                    '/img/defaultavatar.png'
                                                                    :
                                                                    `${process.env.FILE_IMAGE_BASE + educatorItemAvatar(educatorId)}`
                                                                }
                                                                alt=''
                                                                className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-full overflow-hidden'
                                                            />
                                                            <a
                                                                href={'/user/' + educatorId}
                                                                target='_blank'
                                                                className='text-[16px] md:text-[18px] capitalize line-clamp-1 underline italic hover:text-Label active:text-dark transition-all duration-300'
                                                            >
                                                                {currentName(educatorItemName(educatorId))}
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                    {ar_requestmembers.length !== 0 &&
                                        <div className='w-full grid gap-[10px]'>
                                            <div
                                                className='w-full text-[16px] lg:text-[20px]'
                                            >
                                                Waiting Members
                                            </div>
                                            <div className='grid gap-[10px]'>
                                                {ar_requestmembers.map((educatorId: string, index: number) => (
                                                    <div
                                                        key={`co-educator-${index}`}
                                                        className='rounded-full bg-Label relative p-[5px] sm:w-max'
                                                    >
                                                        <div
                                                            className={`w-full flex gap-[10px] items-center ${lngId === 0 ? 'pr-[20px]' : 'pl-[20px] flex-row-reverse'}`}
                                                        >
                                                            <img
                                                                draggable='false'
                                                                src={educatorItemAvatar(educatorId) === ''
                                                                    ?
                                                                    '/img/defaultavatar.png'
                                                                    :
                                                                    `${process.env.FILE_IMAGE_BASE + educatorItemAvatar(educatorId)}`
                                                                }
                                                                alt=''
                                                                className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-full overflow-hidden'
                                                            />
                                                            <a
                                                                href={'/user/' + educatorId}
                                                                target='_blank'
                                                                className='text-[16px] md:text-[18px] capitalize line-clamp-1 underline italic hover:text-white active:text-dark transition-all duration-300'
                                                            >
                                                                {currentName(educatorItemName(educatorId))}
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}