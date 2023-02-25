import { useRouter } from 'next/router'
import { DropdownIcon, WorldIcon } from '@/assests/Icons'
import { LinkType, LinkPart1, LinkPart2, LinkPart3, LinkPart4 } from '@/services/Constants/Links'

export default function Header() {
    const router = useRouter();

    const style = {
        dropDownWrapper: 'uppercase flex items-center gap-2 cursor-pointer py-2 group relative select-none',
        dropDownInner: 'absolute hidden group-hover:flex flex-col py-2 border border-deviders rounded-md shadow-md top-10 bg-white',
        dropDownItem: 'normal-case min-w-[150px] hover:bg-bcg_2 px-4 py-1',
    }

    return (
        <main className='w-full h-[90px] flex justify-center items-center text-dark bg-bcg fixed border-b border-deviders z-10'>
            <div className='max-w-[1536px] mx-[20px] w-full flex items-center justify-between'>
                <div className='cursor-pointer selcet-none' onClick={() => router.push('/')}>
                    <img src='/img/logo.png' alt='Logo' className='w-[170px] h-[65px]' />
                </div>
                <div className='gap-x-[10px] xl:gap-x-8 hidden lg:flex lg:items-center '>
                    <div className={style.dropDownWrapper}>
                        HypnoBirthing
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            {LinkPart1.map((obj: LinkType, index: number) => (
                                <div key={index} className={`${index === 0 ? 'hidden' : `${style.dropDownItem}`}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                    {obj.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.dropDownWrapper}>
                        For Parents
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            {LinkPart2.map((obj: LinkType, index: number) => (
                                <div key={index} className={`${index === 0 ? 'hidden' : `${style.dropDownItem}`}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                    {obj.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.dropDownWrapper}>
                        For Professionals
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            {LinkPart3.map((obj: LinkType, index: number) => (
                                <div key={index} className={`${index === 0 ? 'hidden' : `${style.dropDownItem}`}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                    {obj.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.dropDownWrapper}>
                        Blog
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            {LinkPart4.map((obj: LinkType, index: number) => (
                                <div key={index} className={`${index === 0 ? 'hidden' : `${style.dropDownItem}`}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                    {obj.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.dropDownWrapper}>
                        Store
                        <DropdownIcon />
                    </div>
                    <div className={style.dropDownWrapper} onClick={() => router.push('\contact')}>Contact</div>
                </div>
                <div className='bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none'>
                    <WorldIcon />
                    EN
                </div>
            </div>
        </main>
    )
}
