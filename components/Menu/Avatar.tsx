import { useRouter } from 'next/router'
import { useState, useEffect, useLayoutEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

export default function Avatar() {
    const style = {
        Link: 'w-full text-[14px] lg:text-[16px] whitespace-nowrap hover:bg-bcg_2 text-left px-[10px] py-[5px] rounded-[5px]'
    }

    const router = useRouter();
    const dispatch = useAppDispatch();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('/img/defaultavatar.png');
    const { currentUser } = useAppSelector((state) => state.auth);
    const { t } = useTranslation();
    const lng: boolean = i18n.language === 'en' ? true : false;
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
                <Popover className='relative'>
                    <div className='flex items-center'>
                        <Popover.Button className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-0 ring-deviders focus:ring-0 m-auto' onClick={() => { setIsOpen(true) }}>
                            <img draggable='false' src={image} alt='Avatar' className='w-full h-full object-cover' />
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
                            <Popover.Panel className='absolute right-0 z-[111111]'>
                                <div className='mt-[5px] p-[10px] flex flex-col items-start gap-[5px] border border-deviders rounded-[10px] bg-bcg'>
                                    <button className={style.Link} onClick={() => { router.push('/profile/educator'), setIsOpen(false) }}>My Profile</button>
                                    <button className={style.Link} onClick={() => { router.push('/myarticles'), setIsOpen(false) }}>My Articles</button>
                                    <button className={style.Link} onClick={() => { router.push('/mycourses'), setIsOpen(false) }}>My Courses</button>
                                    <button className={style.Link} onClick={() => { dispatch(logout(router, '/')), setIsOpen(false) }}>Log out</button>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    }
                </Popover >
            )}
        </>
    )
}