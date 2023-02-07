import React from 'react'
import { DropdownIcon, WorldIcon } from './icons'

export default function Header() {
    return (
        <main className='w-full flex justify-center text-dark bg-white fixed border-b border-deviders py-4 z-10'>
            <div className='max-w-[1536px] w-full flex items-center justify-between'>
                <img src='/img/logo.png' alt='Logo' className='w-[170px] h-[65px]' />
                <div className='flex items-center gap-8'>
                    <div className='uppercase flex items-center gap-2 cursor-pointer py-2 group relative select-none'>
                        HypnoBirthing
                        <DropdownIcon />
                        <div className='absolute hidden group-hover:flex flex-col py-2 border border-deviders rounded-md shadow-md top-10 bg-white'>
                            <div className='min-w-[150px] hover:bg-bcg_2 px-4 py-1'>Dashboard</div>
                            <div className='min-w-[150px] hover:bg-bcg_2 px-4 py-1'>Settings</div>
                            <div className='min-w-[150px] hover:bg-bcg_2 px-4 py-1'>Earnings</div>
                        </div>
                    </div>
                    <div className='uppercase flex items-center gap-2 cursor-pointer py-2 select-none'>
                        For Parents
                        <DropdownIcon />
                    </div>
                    <div className='uppercase flex items-center gap-2 cursor-pointer py-2 select-none'>
                        For Professionals
                        <DropdownIcon />
                    </div>
                    <div className='uppercase flex items-center gap-2 cursor-pointer py-2 select-none'>
                        Blog
                        <DropdownIcon />
                    </div>
                    <div className='uppercase flex items-center gap-2 cursor-pointer py-2 select-none'>
                        Store
                        <DropdownIcon />
                    </div>
                    <div className='uppercase cursor-pointer  select-none'>Contact</div>
                </div>
                <div className='bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none'>
                    <WorldIcon />
                    EN
                </div>
            </div>
        </main>
    )
}
