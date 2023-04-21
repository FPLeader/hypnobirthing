
import { RegularButton } from '@/components/Buttons'
import { CategoryInput, TextareaNormal } from '@/components/Inputs'
import { useTranslation } from 'react-i18next'

interface ContactFromProps {
    lngId: number,
    name: any,
    setName: any,
    number: any,
    setNumber: any,
    email: any,
    setEmail: any,
    location: any,
    setLocation: any,
    comments: any,
    setComments: any,
}

export default function ContactForm({
    lngId,
    name,
    setName,
    number,
    setNumber,
    email,
    setEmail,
    location,
    setLocation,
    comments,
    setComments
}: ContactFromProps) {
    // language option
    const { t } = useTranslation();

    return (
        <div className='lg:grid lg:grid-cols-10 bg-bcg_2 p-[20px] lg:p-[30px] rounded-[10px] flex items-center justify-between'>
            <div className='lg:col-span-6 w-full flex flex-col gap-[20px]'>
                <div className={`text-center ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[24px] lg:text-[28px] font-medium`}>
                    {t('Contact Form')}
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <CategoryInput
                        category={t('Full name')}
                        placeholder={t('Enter your name')}
                        inputValue={name}
                        handleChange={setName}
                        lngId={lngId}
                    />
                    <CategoryInput
                        category={t('Phone number')}
                        type='text'
                        placeholder='+972'
                        inputValue={number}
                        handleChange={setNumber}
                        lngId={lngId}
                    />
                    <CategoryInput
                        category={t('Email')}
                        type='email'
                        placeholder='user@example.com'
                        inputValue={email}
                        handleChange={setEmail}
                        lngId={lngId}
                    />
                    <CategoryInput
                        category={t('Location')}
                        placeholder={t('Enter your location')}
                        inputValue={location}
                        handleChange={setLocation}
                        lngId={lngId}
                    />
                    <TextareaNormal
                        // @ts-ignore
                        category={t('Comments')}
                        placeholder={t('Enter text here')}
                        inputValue={comments}
                        handleChange={setComments}
                        lngId={lngId}
                    />
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-[20px]'>
                    <RegularButton text={t('submit')} />
                    <div className='text-center md:text-left text-Label text-[14px]'>
                        {t('By clicking \"SUBMIT\" you accept our Terms & Conditions and Privacy Policy')}
                    </div>
                </div>
            </div>
            <div className='lg:col-span-4 w-full hidden lg:block'>
                <img draggable='false' src='\img\blogSec6.png' alt='' className='' />
            </div>
        </div>
    )
}
