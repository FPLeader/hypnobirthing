import { useRouter } from 'next/router'
import { useState, useEffect, useLayoutEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import { NotificationBadge } from '@/components/Badges'

interface AvatarProps {
    onClickHandler: (index: number) => void
}

export default function Avatar({
    onClickHandler
}: AvatarProps) {
    const style = {
        Link: 'w-full text-[14px] lg:text-[16px] whitespace-nowrap hover:bg-bcg_2 text-left px-[10px] py-[5px] rounded-[5px]'
    }

    const router = useRouter();
    const dispatch = useAppDispatch();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('/img/defaultavatar.png');
    const { currentUser } = useAppSelector((state) => state.auth);
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    // initalize
    useEffect(() => {
        setDomLoaded(true);
    }, []);
    useLayoutEffect(() => {
        if (currentUser) {
            if (currentUser.ds_avatar !== '')
                setImage(process.env.FILE_IMAGE_BASE + currentUser?.ds_avatar);
        }
    }, [currentUser]);

    return (
        <>
            {domLoaded && (
                <Popover className='relative z-20'>
                    <div className='flex items-center'>
                        <Popover.Button
                            className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] border-0 ring-deviders focus:ring-0 focus:outline-none m-auto focus-visible:outline-none'
                            onClick={() => { setIsOpen(true), onClickHandler(-1) }}
                        >
                            <div className='w-full h-full relative'>
                                <img draggable='false' src={image} alt='Avatar' className='w-full h-full object-cover rounded-full overflow-hidden' />
                                <div className='absolute top-[2px] right-[2px]'>
                                    <NotificationBadge />
                                </div>
                            </div>
                        </Popover.Button>
                    </div>

                    {isOpen &&
                        <Transition
                            enter='transition duration-100 ease-out'
                            enterFrom='transform scale-95 opacity-0'
                            enterTo='transform scale-100 opacity-100'
                            leave='transition duration-75 ease-out'
                            leaveFrom='transform scale-100 opacity-100'
                            leaveTo='transform scale-95 opacity-0'
                        >
                            <Popover.Panel className='absolute right-0'>
                                <div className='mt-[5px] p-[10px] flex flex-col items-start gap-[5px] border border-deviders rounded-[10px] bg-bcg'>
                                    <button className={style.Link + ' relative'} onClick={() => { router.push('/notification'), setIsOpen(false) }}>
                                        Notification
                                        <div className='absolute top-[2px] right-[2px]'>
                                            <NotificationBadge />
                                        </div>
                                    </button>
                                    <button className={style.Link} onClick={() => { router.push('/profile/educator'), setIsOpen(false) }}>
                                        My Profile
                                    </button>
                                    <button className={style.Link} onClick={() => { router.push('/profile/settings?setting=3'), setIsOpen(false) }}>
                                        My Articles
                                    </button>
                                    <button className={style.Link} onClick={() => { router.push('/profile/settings?setting=2'), setIsOpen(false) }}>
                                        My Courses
                                    </button>
                                    <button className={style.Link} onClick={() => { dispatch(logout(router, '/')), setIsOpen(false) }}>
                                        Log out
                                    </button>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    }
                </Popover >
            )}
        </>
    )
}