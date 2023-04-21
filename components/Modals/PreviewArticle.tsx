import { Fragment, useState, useEffect } from 'react'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { RegularTitle } from '../Titles'

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
    ds_readtime: string,
}

interface PreviewArticleProps {
    isOpen: boolean,
    closeModal: () => void,
    ds_thumbnail: string,
    mainbody: mainbodyType[],
    nm_user: string,
    ds_category: string,
}

export default function PreviewArticle({
    isOpen,
    closeModal,
    ds_thumbnail,
    mainbody,
    nm_user,
    ds_category
}: PreviewArticleProps) {
    const moment = require('moment');
    const { width } = useWindowSize();

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
                                    Preview Article
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>

                                <div className='mt-[20px] space-y-[10px] md:gap-[20px]'>
                                    <div className='flex justify-center'>
                                        <div className='w-max px-[30px] font-light italic text-[14px] md:text-[16px] lg:text-[20px] text-center bg-beighe rounded-full'>{ds_category}</div>
                                    </div>
                                    {mainbody.map((blogData: mainbodyType, index: number) => (
                                        <div key={'previewblog' + index}>
                                            <div className='text-[lato] text-[20px] md:text-[30px] lg:text-[40px] text-center'>----{blogData.id_lng === 0 ? 'English Blog' : 'בלוג בעברית'}----</div>
                                            <div className='w-full'>
                                                <img draggable='false' src={process.env.FILE_IMAGE_BASE + ds_thumbnail} alt='' className={`w-full h-[205px] md:h-[300px] object-cover`} />
                                            </div>
                                            <div className='mt-[20px] mb-[20px] md:mb-[30px]'>
                                                <RegularTitle text={blogData.ds_title ?? ''} />
                                            </div>
                                            <div className='font-[lato] ql-editor !p-0' dangerouslySetInnerHTML={{ __html: blogData.ds_content ?? '' }} />
                                            <div className='text-[16px] md:text-[18px] font-normal italic opacity-60 flex flex-col items-center md:flex-row md:justify-between'>
                                                <div className='capitalize'>—&nbsp;{nm_user}</div>
                                                <div>{moment(Date.now()).format('MMMM D, YYYY')}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}