import React from 'react'
import { useRouter } from 'next/router'
import { InstagramIcon, FacebookIcon, TwitterIcon } from './icons'
import { FooterLink_part1, FooterLink_part2, FooterLink_part3, FooterLink_part4 } from './constants/footer'
import { LinkTypes } from './constants/footer'

export default function Footer() {
    const router = useRouter();

    const style = {
        linkPartStyle: 'px-10 pt-[25px] flex flex-col items-center sm:items-start',
    }

    return (
        <main className='w-full bg-beighe px-2 text-dark flex flex-col items-center'>
            <div className='max-w-[1536px] w-full flex flex-col lg:flex-row justify-center lg:justify-between pt-[36px]'>
                <div className='w-full lg:w-3/12 flex flex-col'>
                    <img src='/img/logo.png' alt='Logo' className='w-[230px] h-[100px]' />
                    <div className='text-base max-w-[277px] text-base pt-3'>
                        Rights reserved to Pashut Laledet - the Israeli Childbirth Education Center for calm birthing.
                    </div>
                    <div className='flex gap-x-4 py-4'>
                        <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
                            <InstagramIcon />
                        </div>
                        <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
                            <FacebookIcon />
                        </div>
                        <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
                            <TwitterIcon />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between w-full lg:w-9/12 relative'>
                    <div className={style.linkPartStyle}>
                        {FooterLink_part1.map((obj: LinkTypes, index: number) => (
                            <div key={index} className={`${index === 0 ? 'text-lg pb-4' : 'cursor-pointer uppercase text-sm pb-3'}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                {obj.name}
                            </div>
                        ))}
                    </div>
                    <div className={style.linkPartStyle}>
                        {FooterLink_part2.map((obj: LinkTypes, index: number) => (
                            <div key={index} className={`${index === 0 ? 'text-lg pb-4' : 'cursor-pointer uppercase text-sm pb-3'}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                {obj.name}
                            </div>
                        ))}
                    </div>
                    <div className={style.linkPartStyle}>
                        {FooterLink_part3.map((obj: LinkTypes, index: number) => (
                            <div key={index} className={`${index === 0 ? 'text-lg pb-4' : 'cursor-pointer uppercase text-sm pb-3'}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                {obj.name}
                            </div>
                        ))}
                    </div>
                    <div className={style.linkPartStyle}>
                        {FooterLink_part4.map((obj: LinkTypes, index: number) => (
                            <div key={index} className={`${index === 0 ? 'text-lg pb-4' : 'cursor-pointer uppercase text-sm pb-3'}`} onClick={() => index !== 0 && router.push(obj.link)}>
                                {obj.name}
                            </div>
                        ))}
                    </div>
                    <div className='flex absolute bottom-0 right-10'>
                        <img src='/img/affiliated.png' alt='Logo' className='w-[21px] h-[21px]' />
                        <div className='flex text-dark text-lg opacity-60'>Affiliated with&nbsp;<div className='underline underline-offset-4 cursor-pointer select-none' onClick={() => router.push('/')}>HypnoBirthing International</div></div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1536px] w-full border-t border-[#B7AB94] mt-14 mb-5'></div>

            <div className='max-w-[1536px] w-full flex items-center justify-between pb-10 uppercase text-xs'>
                <div>
                    ©2023 Pashut Laledet HypnoBirthing
                </div>
                <div className='flex'>
                    <div className='cursor-pointer select-none pr-8'>
                        TERMS OF USE
                    </div>
                    <div className='cursor-pointer select-none'>
                        PRIVACY POLICY
                    </div>
                </div>
                <div>
                    website by andromeda
                </div>
            </div>
        </main >
    )
}
