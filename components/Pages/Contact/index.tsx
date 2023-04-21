import { useState, useEffect } from 'react'
import {
    ContactInforSection,
    ContactFormSection,
    SkeletonSection
} from './Sections'
import { Banner } from '@/components/Sections'
import API from '@/services/API'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'

export default function Contact() {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    interface MainBodyType {
        phone: string,
        email: string,
        instagram: string,
        facebook: string,
        twitter: string,
        imageTitle: string[]
        fileName1: string,
    }

    const [domLoaded, setDomLoaded] = useState<number>(-1);
    const [previousMainBody, setPreviousMainBody] = useState<MainBodyType | null>(null);

    // contact form
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [comments, setComments] = useState<string>('');


    useEffect(() => {
        setDomLoaded(0);
    }, [])

    const loadCurrentPageData = () => {
        API.post('contents/getcurrentpage', {
            id_page: 'contact',
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    if (result.data.currentPage) {
                        console.log(result.data.currentPage);
                        setPreviousMainBody(result.data.currentPage.js_mainbody);
                    }
                    setDomLoaded(1);
                }
            })
            .catch((err) => {
                toast.error('Something went wrong.');
            })
    }

    useEffect(() => {
        if (domLoaded === 0) {
            loadCurrentPageData();
        }
    }, [domLoaded])

    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <Banner image='/img/banner4.png' />
            <div dir={lngId === 0 ? 'ltr' : 'rtl'} className='w-full my-[20px] md:my-[30px] lg:my-[70px] flex justify-center'>
                <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[70px]'>
                    {domLoaded === 1 && previousMainBody ?
                        <>
                            <div className='flex flex-col gap-[40px]'>
                                <ContactInforSection
                                    lngId={lngId}
                                    phone={previousMainBody.phone}
                                    email={previousMainBody.email}
                                    instagram={previousMainBody.instagram}
                                    facebook={previousMainBody.facebook}
                                    twitter={previousMainBody.twitter}
                                />
                                <ContactFormSection
                                    lngId={lngId}
                                    name={name}
                                    setName={setName}
                                    number={number}
                                    setNumber={setNumber}
                                    email={email}
                                    setEmail={setEmail}
                                    location={location}
                                    setLocation={setLocation}
                                    comments={comments}
                                    setComments={setComments}
                                />
                            </div>
                            <div className='relative'>
                                {
                                    isImageOrVideoOrYoutube(previousMainBody.fileName1) === 'image'
                                        ?
                                        <>
                                            <img
                                                draggable='false'
                                                src={process.env.FILE_IMAGE_BASE + previousMainBody.fileName1}
                                                alt=''
                                                className={`w-full h-full min-h-[200px] max-h-[480px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                                            />
                                            <div className={`text-white text-[16px] lg:text-[18px] absolute top-[15px] lg:top-[20px] ${lngId === 0 ? 'left-[15px] lg:left-[25px]' : 'right-[15px] lg:right-[25px]'}`}>
                                                {previousMainBody.imageTitle[lngId]}
                                            </div>
                                        </>
                                        :
                                        <div className='w-full'>
                                            <div className='min-h-[200px] max-w-[800px] m-auto'>
                                                <div className='aspect-w-16 aspect-h-9'>
                                                    <VideoCard
                                                        title='Contact Us'
                                                        videoUrl={previousMainBody.fileName1}
                                                        style='min-h-[200px] max-h-[480px]'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </>
                        :
                        <SkeletonSection />
                    }
                </div>
            </div>
        </div>
    )
}