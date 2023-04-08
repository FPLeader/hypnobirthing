import { Fragment, useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import useWindowSize from '@/services/Hooks/useWindowSize'
import API from '@/services/API'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { CategoryRuleInput } from '../Inputs'
import { OtpInput } from '@/components/Inputs'

interface DeleteArticleProps {
    isOpen: boolean,
    closeModal: () => void,
    handleDelete: () => void,
}

export default function DeleteArticle({
    isOpen,
    closeModal,
    handleDelete
}: DeleteArticleProps) {
    const { width } = useWindowSize();

    const DeleteArticleHandler = () => {
        handleDelete();
        closeModal();
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
                            <Dialog.Panel className='w-full max-w-[600px] transform overflow-hidden rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[20px] lg:text-[28px] text-center font-medium leading-normal text-dark pr-[35px]'
                                >
                                    Do you want to delete this blog?
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>

                                <div className='mt-[20px]'>
                                    <div className='flex flex-col md:flex-row justify-center gap-[15px]'>
                                        <button
                                            className='w-full whitespace-nowrap gap-[5px] md:gap-[10px] flex justify-center items-center md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] select-none cursor-pointer transition-all duration-300'
                                            onClick={DeleteArticleHandler}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className='w-full whitespace-nowrap gap-[5px] md:gap-[10px] flex justify-center items-center md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] select-none cursor-pointer transition-all duration-300'
                                            onClick={closeModal}
                                        >
                                            No
                                        </button>
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