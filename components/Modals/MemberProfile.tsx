import { Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { ContactButton } from '@/components/Buttons'

interface MemberProfileProps {
    isOpen: boolean,
    // setIsOpen: Dispatch<SetStateAction<boolean>>,
    // openModal: () => void,
    closeModal: () => void,
    image: string,
    name: string,
    title: string,
    description: string,
}

export default function MemberProfile({
    isOpen,
    // setIsOpen,
    // openModal,
    closeModal,
    image,
    name,
    title,
    description,
}: MemberProfileProps) {
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
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='space-y-[20px] font-[lato]'>
                                    <div className='flex flex-col md:flex-row gap-[25px]'>
                                        <div className='flex justify-center'>
                                            <img draggable='false' src={image} alt={name} className='w-full rounded-[20px] max-w-[385px] md:min-w-[229px]' />
                                        </div>
                                        <div className='w-full text-dark flex flex-col gap-[5px]'>
                                            <div className='text-[24px] lg:text-[28px]'>{name}</div>
                                            <div className='text-[14px]'>{title}</div>
                                            <div className='grid md:grid-cols-2 gap-y-[10px] gap-x-[8px]'>
                                                <ContactButton Icontype={0} text='786-457-6460' link='' BgType={1} />
                                                <ContactButton Icontype={1} text='Personal site' link='' BgType={1} />
                                                <ContactButton Icontype={2} text='Instagram' link='' BgType={1} />
                                                <ContactButton Icontype={3} text='facebook' link='' BgType={1} />
                                                <ContactButton Icontype={4} text='twitter' link='' BgType={1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[16px] lg:text-[18px]'>{description}</div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}