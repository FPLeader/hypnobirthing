import { useState } from 'react'
import { useRouter } from 'next/router'
import { LinkType, LinksType, HeaderLinks } from '@/services/Constants/Links'
import { HeaderLinkButton, LanguageButton, HamburgerButton } from '@/components/Buttons'
export default function Header() {
    const [MenuPage, setMenuPage] = useState<number>(-1)
    const router = useRouter();

    const style = {
        MenuTitle: 'text-dark text-[24px] uppercase font-semibold',
        MenuItem: 'text-dark text-[16px] uppercase text-left',
        dividerWrapper: 'w-full lg:w-0 flex justify-center items-center',
        dividerInner: 'w-full lg:w-0 h-full border-[1px] border-deviders'
    }

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


    return (
        <div className='w-full h-[70px] md:h-[90px] flex justify-center items-center text-dark bg-bcg fixed border-b border-deviders z-[2000]'>
            <div className='max-w-[1225px] mx-[20px] w-full flex items-center justify-between'>
                <div className='cursor-pointer selcet-none' onClick={() => router.push('/')}>
                    <img draggable='false' src='/img/logo.png' alt='Logo' className='w-[142px] md:w-[170px] h-[61px] md:h-[65px]' />
                </div>
                <div className='gap-x-[12px] xl:gap-x-[40px] hidden lg:flex lg:items-center '>
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
                    <div className='block lg:hidden'>
                        <HamburgerButton />
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
        </div >
    )
}
