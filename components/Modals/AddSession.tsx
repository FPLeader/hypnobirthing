import { useState, Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { ModalButton } from '../Buttons'
import { CategoryInput, CategoryDatePicker, Textarea } from '../Inputs'
import useWindowSize from '@/services/Hooks/useWindowSize'

interface AddSessionProps {
    isOpen: boolean,
    // setIsOpen: Dispatch<SetStateAction<boolean>>,
    // openModal: () => void,
    closeModal: () => void,
}

export default function AddSession({
    isOpen,
    // setIsOpen,
    // openModal,
    closeModal
}: AddSessionProps) {
    const { width } = useWindowSize();
    const [name, setName] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    const [introduction, setIntroduction] = useState<string>('');
    const [description, setDescription] = useState<string>('');

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
                                <div className='mt-[20px] space-y-[10px] font-[lato]'>
                                    <CategoryInput
                                        category='Name of session'
                                        placeholder=''
                                        inputValue={name}
                                        handleChange={setName}
                                    />
                                    <CategoryInput
                                        category='Location/Zoom'
                                        placeholder=''
                                        inputValue={location}
                                        handleChange={setLocation}
                                    />
                                    <div className='grid md:grid-cols-2 gap-[10px]'>
                                        <CategoryDatePicker
                                            category='Estimated date of birth (Start)'
                                            title=''
                                            placeholder=''
                                            setValue={setStartDate}
                                        />
                                        <CategoryDatePicker
                                            category='Estimated date of birth (Finish)'
                                            title=''
                                            placeholder=''
                                            setValue={setEndDate}
                                        />
                                    </div>
                                    <div className='space-y-[6px]'>
                                        <label className='text-[14px] text-dark'>About class</label>
                                        <Textarea
                                            placeholder='Enter text here'
                                            inputValue={introduction}
                                            handleChange={setIntroduction}
                                        />
                                    </div>
                                    <div className='space-y-[6px]'>
                                        <label className='text-[14px] text-dark'>What is included?</label>
                                        <Textarea
                                            placeholder='Enter text here'
                                            inputValue={description}
                                            handleChange={setDescription}
                                        />
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