import React from 'react'
import { useRouter } from 'next/router'
import { DropdownIcon, WorldIcon } from './icons'
import { LinkTypes, Link_part1, Link_part2, Link_part3, Link_part4 } from './constants/footer'

export default function Header() {
    const router = useRouter();

    const style = {
        dropDownWrapper: 'uppercase flex items-center gap-2 cursor-pointer py-2 group relative select-none',
        dropDownInner: 'absolute hidden group-hover:flex flex-col py-2 border border-deviders rounded-md shadow-md top-10 bg-white',
        dropDownItem: 'min-w-[150px] hover:bg-bcg_2 px-4 py-1',
    }

    return (
        <main className='w-full flex justify-center text-dark bg-white fixed border-b border-deviders py-3.5 z-10'>
            <div className='max-w-[1536px] w-full flex items-center justify-between'>
                <img src='/img/logo.png' alt='Logo' className='w-[170px] h-[65px]' />
                <div className='flex items-center gap-8'>
                    <div className={style.dropDownWrapper}>
                        HypnoBirthing
                        <DropdownIcon />
                        <div className={style.dropDownInner}>
                            {Link_part1.map((obj: LinkTypes, index: number) => (
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
                            {Link_part2.map((obj: LinkTypes, index: number) => (
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
                            {Link_part3.map((obj: LinkTypes, index: number) => (
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
                            {Link_part4.map((obj: LinkTypes, index: number) => (
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
                    <div className={style.dropDownWrapper}>Contact</div>
                </div>
                <div className='bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none'>
                    <WorldIcon />
                    EN
                </div>
            </div>
        </main>
    )
}
