import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { LinkType, LinksType, HeaderLinks } from '@/services/Constants/Links'
import { HeaderLinkButton, LanguageButton, HamburgerButton } from '@/components/Buttons'
import useWindowSize from '@/services/Hooks/useWindowSize'

export default function Header() {
    const { width } = useWindowSize();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [MenuPage, setMenuPage] = useState<number>(-1);
    const router = useRouter();

    const style = {
        MenuTitle: 'text-dark text-[24px] uppercase font-semibold',
        MenuItem: 'max-lg:pl-[20px] text-dark text-[16px] uppercase text-left',
        dividerWrapper: 'w-full lg:w-0 flex justify-center items-center',
        dividerInner: 'w-full lg:w-0 h-full border-[1px] border-deviders'
    }

    const onHamburgerHandler = () => {
        if (isNavOpen) {
            document.body.style.overflow = 'visible';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
        setIsNavOpen(!isNavOpen);
    }

    useEffect(() => {
        if (width >= 1024) {
            document.body.style.overflow = 'visible';
            setIsNavOpen(false);
        }
    }, [width]);

    const onClickHandler = (index: number) => {
        if (MenuPage === index || index === -1) {
            document.body.style.overflow = 'visible';
            setMenuPage(-1);
        }
        else {
            document.body.style.overflow = 'hidden';
            setMenuPage(index);
        }
    }

    const onLogoClickHandler = () => {
        if (!isNavOpen) {
            router.push('/');
        }
    }

    return (
        <nav className=''>
            <div className={`w-full h-[70px] md:h-[90px] flex justify-center items-center text-dark bg-bcg fixed z-[2000] ${!isNavOpen && 'border-b border-deviders'}`}>
                <div className='max-w-[1225px] mx-[20px] w-full flex items-center justify-between'>
                    <button onClick={() => onLogoClickHandler()}>
                        <img draggable='false' src='/img/logo.png' alt='Logo' className='w-[142px] md:w-[170px] h-[61px] md:h-[65px]' />
                    </button>
                    <div className='gap-[12px] xl:gap-[40px] hidden lg:flex lg:items-center '>
                        {HeaderLinks.map((items: LinksType, index: number) => (
                            <div key={index} onClick={() => onClickHandler(index)}>
                                <HeaderLinkButton title={items.title} />
                            </div>
                        ))}
                        <div onClick={() => { router.push('\article'), onClickHandler(-1) }}>
                            <HeaderLinkButton title='blog' isIcon={false} />
                        </div>
                        <div onClick={() => { router.push('\store'), onClickHandler(-1) }}>
                            <HeaderLinkButton title='store' isIcon={false} />
                        </div>
                        <div onClick={() => { router.push('\contact'), onClickHandler(-1) }}>
                            <HeaderLinkButton title='contact' isIcon={false} />
                        </div>
                    </div>
                    <div className='flex gap-[25px] lg:gap-[32px]'>
                        <LanguageButton />
                        <div
                            className='block lg:hidden'
                            onClick={() => onHamburgerHandler()}
                        >
                            <HamburgerButton
                                state={isNavOpen}
                            />
                        </div>
                    </div>
                </div>
                <div className={`h-screen w-full ${MenuPage < 0 ? 'hidden opacity-0' : 'block opacity-100'} max-md:hidden absolute top-[90px] z-9`}>
                    <div className='w-full bg-bcg border-b border-deviders transaction-all duration-300 flex justify-center'>
                        <div className='max-w-[1225px] mx-[20px] w-full py-[40px] flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]'>
                            <div className='w-full lg:w-1/3 flex flex-col gap-[20px]'>
                                <div className={style.MenuTitle}>{MenuPage >= 0 && HeaderLinks[MenuPage].title}</div>
                                <div>Resource for mind-body health, meditationi, personal growth, nutrition, and more.</div>
                            </div>
                            <div className={style.dividerWrapper}>
                                <div className={style.dividerInner} />
                            </div>
                            <div className='w-full lg:w-2/3 grid grid-cols-3 gap-[30px]'>
                                {MenuPage >= 0 && HeaderLinks[MenuPage].links.map((item: LinkType, index: number) => (
                                    <button key={index} className={style.MenuItem} onClick={() => { document.body.style.overflow = 'visible', router.push(item.link), setMenuPage(-1) }}>{item.title}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='h-full bg-dark opacity-50' onClick={() => { setMenuPage(-1), document.body.style.overflow = 'visible' }}>
                    </div>
                </div>
            </div>
            <div className={`${isNavOpen ? 'px-[20px] py-[20px] h-[calc(100vh_-_70px)] md:h-[calc(100vh_-_90px)] opacity-100' : 'h-0 opacity-0'} overflow-auto fixed block lg:hidden w-full bg-bcg transition-all duration-300 top-[70px] md:top-[90px] left-0 z-[2000]`}>
                <div className='grid gap-[15px]'>
                    {HeaderLinks.map((items: LinksType, index: number) => (
                        <>
                            <div className='uppercase text-[18px]'>{items.title}</div>
                            <div className='grid gap-[10px]'>
                                {HeaderLinks[index].links.map((item: LinkType, index: number) => (
                                    <button key={index} className={style.MenuItem} onClick={() => { document.body.style.overflow = 'visible', router.push(item.link), setMenuPage(-1) }}>{item.title}</button>
                                ))}
                            </div>
                        </>
                    ))}
                    <div onClick={() => { router.push('\article'), document.body.style.overflow = 'visible' }}>
                        <HeaderLinkButton title='blog' isIcon={false} />
                    </div>
                    <div onClick={() => { router.push('\store'), document.body.style.overflow = 'visible' }}>
                        <HeaderLinkButton title='store' isIcon={false} />
                    </div>
                    <div onClick={() => { router.push('\contact'), document.body.style.overflow = 'visible' }}>
                        <HeaderLinkButton title='contact' isIcon={false} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
