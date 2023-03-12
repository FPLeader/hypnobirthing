import { Fragment, Dispatch, SetStateAction } from 'react'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { ModalButton } from '../Buttons'
import { CategoryInput, CategoryDatePicker, Textarea } from '../Inputs'

interface AddSessionProps {
    isOpen: boolean,
    // setIsOpen: Dispatch<SetStateAction<boolean>>,
    // openModal: () => void,
    closeModal: () => void,
}

export default function StudentList({
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
                            <Dialog.Panel className='w-full max-w-[1224px] transform overflow-hidden rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[18px] leading-normal text-dark'
                                >
                                    Sharon Peled
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[8px] font-[lato]'>
                                    <div className='text-[24px] md:text-[32px] lg:text-[44px] text-dark font-light italic'>
                                        Zoom Prenatal Course
                                    </div>
                                    <div className='mt-[8px] flex flex-col gap-[5px]'>
                                        <div className='max-md:flex justify-center text-[16px] md:text-[18px]'>
                                            <span className='text-Label'>Location:&nbsp;</span>
                                            <span>Rehovot / Zoom</span>
                                        </div>
                                        <div className='flex flex-col text-center md:text-left md:flex-row text-[16px] md:text-[18px]'>
                                            <div className='text-Label whitespace-nowrap'>Estimated date of birth:&nbsp;</div>
                                            <div>June 25, 2023, 5:00 pm — September 21, 2023, 7:30 pm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[20px] font-[lato]'>
                                    <div className='relative overflow-x-auto rounded-[15px] md:rounded-[20px] bg-bcg p-[20px]'>
                                        <table className='w-full text-[14px] text-left'>
                                            <thead className='border-b border-deviders uppercase font-semibold whitespace-nowrap'>
                                                <tr>
                                                    <th scope='col' className='pr-[20px] pb-[10px]'>
                                                        Student name
                                                    </th>
                                                    <th scope='col' className='pr-[20px] pb-[10px]'>
                                                        Phone number
                                                    </th>
                                                    <th scope='col' className='pr-[20px] pb-[10px]'>
                                                        Email
                                                    </th>
                                                    <th scope='col' className='pr-[20px] pb-[10px]'>
                                                        Comments
                                                    </th>
                                                    <th scope='col' className='pb-[10px]'>
                                                        Date of registration
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-b border-deviders'>
                                                    <th scope='row' className='pr-[20px] py-[10px] font-medium whitespace-nowrap'>
                                                        Hiam Abbass
                                                    </th>
                                                    <td className='pr-[20px] py-[10px]'>
                                                        786-457-6460
                                                    </td>
                                                    <td className='pr-[20px] py-[10px] underline underline-offset-4 decoration decoration-dark'>
                                                        Abbass@mail.ru
                                                    </td>
                                                    <td className='pr-[20px] py-[10px]'>
                                                        I want to come with my husband. I decided something would be a good idea because I am afraid of forgetting all the details of the lesson
                                                    </td>
                                                    <td className='py-[10px]'>
                                                        Feb 2, 2023 19:28
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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