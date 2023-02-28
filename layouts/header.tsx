import { useState } from 'react'
import { useRouter } from 'next/router'
import { DropdownIcon, WorldIcon } from '@/assests/Icons'
import { LinkType, LinkPart1, LinkPart2, LinkPart3, LinkPart4 } from '@/services/Constants/Links'
import { HamburgerButton } from '@/components/Buttons'

export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(true)
    const router = useRouter();

    const style = {
        dropDownWrapper: 'uppercase flex items-center gap-2 cursor-pointer py-2 group relative select-none',
        dropDownInner: `${showMenu ? 'h-auto' : 'h-0'} absolute top-10 overflow-hidden opacity-0 group-hover:opacity-100 transactioin-all duration-500`,
        dropDownItems: 'flex flex-col py-2 border border-deviders rounded-md shadow-md bg-white',
        dropDownItem: 'normal-case min-w-[150px] hover:bg-bcg_2 px-4 py-1',
    }

    return (
        <main className='w-full h-[70px] md:h-[90px] flex justify-center items-center text-dark bg-bcg fixed border-b border-deviders z-10'>
            <div className='max-w-[1225px] mx-[20px] md:mx-[40px] w-full flex items-center justify-between'>
                <div className='cursor-pointer selcet-none' onClick={() => router.push('/')}>
                    <img src='/img/logo.png' alt='Logo' className='w-[142px] md:w-[170px] h-[61px] md:h-[65px]' />
                </div>
                <div className='gap-x-[10px] xl:gap-x-8 hidden lg:flex lg:items-center '>
                    <div className={style.dropDownWrapper} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                        HypnoBirthing
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            <div className={style.dropDownItems}>
                                {LinkPart1.slice(1).map((obj: LinkType, index: number) => (
                                    <div key={index} className={style.dropDownItem} onClick={() => {
                                        setShowMenu(false)
                                        router.push(obj.link)
                                    }}>
                                        {obj.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.dropDownWrapper} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                        For Parents
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            <div className={style.dropDownItems}>
                                {LinkPart2.slice(1).map((obj: LinkType, index: number) => (
                                    <div key={index} className={style.dropDownItem} onClick={() => {
                                        setShowMenu(false)
                                        router.push(obj.link)
                                    }}>
                                        {obj.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.dropDownWrapper} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                        For Professionals
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            <div className={style.dropDownItems}>
                                {LinkPart3.slice(1).map((obj: LinkType, index: number) => (
                                    <div key={index} className={style.dropDownItem} onClick={() => {
                                        setShowMenu(false)
                                        router.push(obj.link)
                                    }}>
                                        {obj.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.dropDownWrapper} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                        Blog
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            <div className={style.dropDownItems}>
                                {LinkPart4.slice(1).map((obj: LinkType, index: number) => (
                                    <div key={index} className={style.dropDownItem} onClick={() => {
                                        setShowMenu(false)
                                        router.push(obj.link)
                                    }}>
                                        {obj.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.dropDownWrapper}>
                        Store
                        <DropdownIcon />
                    </div>
                    <div className={style.dropDownWrapper} onClick={() => router.push('\contact')}>Contact</div>
                </div>
                <div className='flex gap-[25px] lg:gap-[32px]'>
                    <div className='max-md:hidden bg-white hover:bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none transaction-all duration-100'>
                        <WorldIcon />
                        EN
                    </div>
                    <div className='block lg:hidden'>
                        <HamburgerButton />
                    </div>
                </div>
            </div>
        </main >
    )
}
