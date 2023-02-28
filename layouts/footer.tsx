import { useRouter } from 'next/router'
import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'
import { LinkType, LinkPart1, LinkPart2, LinkPart3, LinkPart4 } from '@/services/Constants/Links'

export default function Footer() {
    const router = useRouter();

    const style = {
        IconStyle: 'bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer',
        GroupStyle: 'flex flex-col items-start gap-y-[10px] md:gap-y-[15px]',
        MenuTitle: 'text-[18px] font-semibold',
        ItemsStyle: 'w-full grid grid-cols-2 md:flex md:flex-col gap-x-[27px] gap-y-[10px] md:gap-y-[12px]',
        MenuItem: 'cursor-pointer uppercase text-[14px]'
    }

    return (
        <main className='w-full bg-beighe text-dark flex justify-center'>
            <div className='mx-[20px] w-full max-w-[1225px]'>
                <div className='w-full flex flex-col md:flex-row justify-center md:justify-between md:gap-x-[40px]'>
                    <div className='w-full flex flex-row justify-between md:w-5/12 lg:w-3/12 gap-x-[15px] md:flex-col mt-[39px] md:mt-[49px]'>
                        <div>
                            <img src='/img/logo.png' alt='Logo' className='w-[230px]' />
                            <div className='text-[16px] max-w-[277px] text-base mt-[15px]'>
                                Rights reserved to Pashut Laledet - the Israeli Childbirth Education Center for calm birthing.
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:flex-row mt-[15px] gap-[15px]'>
                            <div className={style.IconStyle}>
                                <InstagramIcon />
                            </div>
                            <div className={style.IconStyle}>
                                <FacebookIcon />
                            </div>
                            <div className={style.IconStyle}>
                                <TwitterIcon />
                            </div>
                        </div>
                        <div className='hidden md:block lg:hidden mt-[73px]'>
                            <div className='flex flex-col gap-y-[7px]'>
                                <img src='/img/affiliated.png' alt='Logo' className='w-[21px] h-[21px]' />
                                <div className='text-dark text-[18px] opacity-60'>
                                    <div>Affiliated with&nbsp;</div>
                                    <div className='underline underline-offset-4 cursor-pointer select-none' onClick={() => router.push('/')}>HypnoBirthing International</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-7/12 lg:w-9/12 relative mt-[25px] md:mt-[60px]'>
                        <div className='grid md:grid-cols-2 gap-y-[25px] md:gap-[32px] lg:gap-[0px] lg:flex lg:justify-between'>
                            <div className={style.GroupStyle}>
                                <div className={style.MenuTitle}>
                                    {LinkPart1[0].name}
                                </div>
                                <div className={style.ItemsStyle}>
                                    {LinkPart1.slice(1).map((obj: LinkType, index: number) => (
                                        <div key={index} className={style.MenuItem} onClick={() => router.push(obj.link)}>
                                            {obj.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.GroupStyle}>
                                <div className={style.MenuTitle}>
                                    {LinkPart2[0].name}
                                </div>
                                <div className={style.ItemsStyle}>
                                    {LinkPart2.slice(1).map((obj: LinkType, index: number) => (
                                        <div key={index} className={style.MenuItem} onClick={() => router.push(obj.link)}>
                                            {obj.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.GroupStyle}>
                                <div className={style.MenuTitle}>
                                    {LinkPart3[0].name}
                                </div>
                                <div className={style.ItemsStyle}>
                                    {LinkPart3.slice(1).map((obj: LinkType, index: number) => (
                                        <div key={index} className={style.MenuItem} onClick={() => router.push(obj.link)}>
                                            {obj.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.GroupStyle}>
                                <div className={style.MenuTitle}>
                                    {LinkPart4[0].name}
                                </div>
                                <div className={style.ItemsStyle}>
                                    {LinkPart4.slice(1).map((obj: LinkType, index: number) => (
                                        <div key={index} className={style.MenuItem} onClick={() => router.push(obj.link)}>
                                            {obj.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex items-center absolute bottom-0 right-0 gap-x-[2px]'>
                                <img src='/img/affiliated.png' alt='Logo' className='w-[21px] h-[21px]' />
                                <div className='flex text-dark text-[18px] opacity-60'>Affiliated with&nbsp;<div className='underline underline-offset-4 cursor-pointer select-none' onClick={() => router.push('/')}>HypnoBirthing International</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block md:hidden mt-[27.5px] w-full flex justify-center'>
                    <div className='flex gap-x-[7px]'>
                        <img src='/img/affiliated.png' alt='Logo' className='w-[21px] h-[21px]' />
                        <div className='flex text-dark text-[14px] opacity-60'>
                            <div>Affiliated with&nbsp;</div>
                            <div className='underline underline-offset-4 cursor-pointer select-none' onClick={() => router.push('/')}>HypnoBirthing International</div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1536px] w-full mb-[20px] lg:mb-[30px]'>
                    <div className='border-t border-[#B7AB94] mt-[32px] lg:mt-[72px] mb-[20px]' />

                    <div className='flex flex-col md:flex-row gap-[20px] items-center md:justify-between uppercase text-[12px]'>
                        <div>
                            ©2023 Pashut Laledet HypnoBirthing
                        </div>
                        <div className='flex gap-x-[30px]'>
                            <div className='cursor-pointer select-none'>
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
                </div>
            </div>
        </main >
    )
}
