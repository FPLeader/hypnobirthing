import { Fragment, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { ModalButton } from '../Buttons'
import { CategoryRuleInput } from '../Inputs'
import useWindowSize from '@/services/Hooks/useWindowSize'

interface YouTubeInputProps {
    isOpen: boolean,
    closeModal: () => void,
    setVideoUrl: Dispatch<SetStateAction<string>>,
}

export default function YouTubeInput({
    isOpen,
    closeModal,
    setVideoUrl
}: YouTubeInputProps) {
    const { width } = useWindowSize();

    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    const [youTubeLink, setYouTubeLink] = useState({ ...initialValue, rules: ['required', 'youtube'] });

    // initalize
    useEffect(() => {
        setYouTubeLink({ ...initialValue, rules: ['required', 'youtube'] })
    }, [isOpen]);

    const checkValidity = (value: any, setValue: any) => {
        let message = '';
        for (const rule of value.rules) {
            if (rule === 'required') {
                if (value.value.length === 0) {
                    message = 'This field should not be empty.';
                }
            } else if (rule === 'youtube') {
                let youTubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
                if (!youTubeRegex.test(value.value)) {
                    message = 'Invalid YouTube link.';
                }
            }
        }

        setValue({
            ...value,
            errorMessage: message,
        });
    };

    const handleChangeValue = (value: any, setValue: any) => (event: any) => {
        checkValidity({ ...value, value: event.target.value }, setValue);
    };

    const selectHandle = () => {
        if (youTubeLink.value && youTubeLink.errorMessage.length === 0) {
            setVideoUrl(youTubeLink.value);
            closeModal();
        }
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
                                    className='text-[20px] lg:text-[28px] font-medium leading-normal text-dark pr-[35px]'
                                >
                                    You are a professional
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[20px] space-y-[10px]'>
                                    <CategoryRuleInput
                                        category='Input your YouTube link'
                                        placeholder='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                        inputValue={youTubeLink}
                                        handleChange={handleChangeValue(youTubeLink, setYouTubeLink)}
                                    />
                                </div>
                                <div className='mt-[20px]'>
                                    <div className='' onClick={selectHandle}>
                                        <ModalButton text='Select' />
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