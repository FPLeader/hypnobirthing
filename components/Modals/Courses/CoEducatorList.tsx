import { Fragment, useState, useEffect } from 'react'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { EducatorItemCard } from '@/components/Cards'

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
                                    <div className='w-full grid gap-[10px]'>
                                        <div
                                            className='w-full text-[16px] md:text-[18px] lg:text-[20px]'
                                        >
                                            Accepeted ({ar_members.length})
                                        </div>
                                        <div className='flex flex-wrap gap-[15px] md:gap-[20px]'>
                                            {ar_members.map((educatorId: string, index: number) => (
                                                <EducatorItemCard
                                                    key={`co-educator-accept-${index}`}
                                                    imageUrl={educatorItemAvatar(educatorId)}
                                                    educatorId={educatorId}
                                                    name={currentName(educatorItemName(educatorId))}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className='w-full grid gap-[10px]'>
                                        <div
                                            className='w-full text-[16px] md:text-[18px] lg:text-[20px]'
                                        >
                                            Pending ({ar_requestmembers.length})
                                        </div>
                                        <div className='flex flex-wrap gap-[15px] md:gap-[20px]'>
                                            {ar_requestmembers.map((educatorId: string, index: number) => (
                                                <EducatorItemCard
                                                    key={`co-educator-pending-${index}`}
                                                    isPending={true}
                                                    imageUrl={educatorItemAvatar(educatorId)}
                                                    educatorId={educatorId}
                                                    name={currentName(educatorItemName(educatorId))}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}