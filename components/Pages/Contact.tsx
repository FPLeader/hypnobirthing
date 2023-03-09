import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'
import { Banner } from '@/components/Sections'
import { RegularButton } from '../Buttons'
import { CategoryInput, Textarea } from '../Inputs'

export default function Contact() {
    const style = {
        wrapper: 'p-[15px] md:p-[20px] lg:p-[25px] text-dark border border-beighe bg-bcg_2 rounded-[10px] flex flex-col gap-[10px]',
        title: 'text-[20px] md:text-[24px] font-medium',
        content: 'text-[16px] md:text-[18px]',
        IconStyle: 'bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer',
    }

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner title='Contact Us' textStyle='center' />
            <div className='w-full my-[20px] md:my-[30px] lg:my-[70px] flex justify-center'>
                <div className='max-w-[1225px] mx-[20px] flex flex-col gap-[70px]'>
                    <div className='flex flex-col gap-[40px]'>
                        <div className='grid md:grid-cols-6 lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                            <div className={`${style.wrapper} md:max-lg:col-start-1 md:max-lg:col-span-5`}>
                                <div className={style.title}>Phone</div>
                                <div className={style.content}>054-222-3003</div>
                            </div>
                            <div className={`${style.wrapper} md:max-lg:col-start-1 md:max-lg:col-span-5`}>
                                <div className={style.title}>E-mail</div>
                                <div className={style.content}>hypnobirthing.israel@gmail</div>
                            </div>
                            <div className='flex justify-center items-center border border-beighe bg-bcg_2 rounded-[10px] md:max-lg:col-start-6 md:max-lg:row-start-1 md:max-lg:row-span-2'>
                                <div className='p-[15px] flex md:flex-col lg:flex-row gap-[20px]'>
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
                            </div>
                        </div>
                        <div className='lg:grid lg:grid-cols-10 bg-bcg_2 p-[20px] lg:p-[30px] rounded-[10px] flex items-center justify-between'>
                            <div className='lg:col-span-6 w-full flex flex-col gap-[20px]'>
                                <div className='text-center md:text-left text-[24px] lg:text-[28px] font-medium'>Contact Form</div>
                                <div className='flex flex-col gap-[10px]'>
                                    <CategoryInput category='Full name' placeholder='Enter your name' />
                                    <CategoryInput category='Phone number' type='number' placeholder='+972' />
                                    <CategoryInput category='Email' placeholder='user@example.com' />
                                    <CategoryInput category='Location' placeholder='Enter your location' />
                                    <Textarea category='Comments' placeholder='Enter text here' />
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center gap-[20px]'>
                                    <RegularButton text='submit' />
                                    <div className='text-center md:text-left text-Label text-[14px]'>By clicking &quot;send&quot; you accept our Terms & Conditions and Privacy Policy</div>
                                </div>
                            </div>
                            <div className='lg:col-span-4 w-full hidden lg:block'>
                                <img draggable='false' src='\img\blogSec6.png' alt='' className='' />
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src='/img/contactus.png' alt='contactus' className='rounded-[10px] lg:rounded-[15px] blur-lg' />
                        <div className='text-white text-[16px] lg:text-[18px] absolute top-[15px] lg:top-[20px] left-[15px] lg:left-[25px]'>photo by Shelley Lawnikanus</div>
                    </div>
                </div>
            </div>
        </div>
    )
}