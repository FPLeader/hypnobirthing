import { Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { ModalButton } from '../Buttons'
import { CategoryInput, CategoryDatePicker, Textarea } from '../Inputs'
import { CategorySelect } from '../Select'
import useWindowSize from '@/services/Hooks/useWindowSize'

interface AddSessionProps {
    isOpen: boolean,
    // setIsOpen: Dispatch<SetStateAction<boolean>>,
    // openModal: () => void,
    closeModal: () => void,
}

export default function AddArticle({
    isOpen,
    // setIsOpen,
    // openModal,
    closeModal
}: AddSessionProps) {
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
                                    className='text-[20px] lg:text-[28px] font-medium leading-normal text-dark pr-[35px]'
                                >
                                    Adding a session
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[20px] grid gap-[10px]'>
                                    {/* <CategorySelect
                                        category='Category'
                                        selectItems={[
                                            {
                                                value: 'Educator',
                                                text: 'Educator'
                                            },
                                            {
                                                value: 'Doula',
                                                text: 'Doula'
                                            }
                                        ]} /> */}
                                    <CategoryInput category='Title' placeholder='Enter Title text here' />

                                    <div className='w-full p-[20px] bg-white rounded-[20px] font-[lato]'>
                                        <div className='mt-[24px] text-center text-[14px] text-dark leading-4'>
                                            Minimum size: 780 x 430 px
                                            <br /><br />
                                            Weight: 30kb - 10 Mb
                                            <br /><br />
                                            Format: jpg, jpeg, png
                                        </div>
                                        <div className='mt-[41px] flex justify-center'>
                                            <ModalButton text='add Cover article' />
                                        </div>
                                        <div className='mt-[25px] text-center text-[14px] text-Label font-semibold leading-4'>
                                            Checking the cover before uploading
                                            <br /><br />
                                            A good and selling cover contains: a thematic image, a clear, unblurred image,no writing on the image
                                            <br /><br />
                                            The article may be returned for revision if the cover: bright &ldquo;acid&ldquo; colours, &ldquo;hypnotic&ldquo; backgrounds, any 18+ images (alcohol, sex, smoking, weapons, violence etc.), contact details and contact requests (including social media logins), watermarks
                                        </div>
                                    </div>

                                    <div className='grid gap-[6px]'>
                                        <label className='text-[14px] text-dark'>Article text</label>
                                        <Textarea placeholder='Enter text here' />
                                    </div>
                                </div>

                                <div className='mt-[20px]'>
                                    <div className='' onClick={closeModal}>
                                        <ModalButton text='Publish' />
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