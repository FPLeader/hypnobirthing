import { useRouter } from 'next/router'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
    ds_readtime: string,
}

interface BlogCardProps {
    id: string,
    image: string,
    mainbody: mainbodyType[],
    author: string,
    disabled?: boolean,
    ds_category: string,
}

export default function SmallBlogCard({
    id,
    image,
    mainbody,
    author,
    disabled = false,
    ds_category,
}: BlogCardProps) {
    const router = useRouter();
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    const getTextFromTitle = () => {
        let title;
        if (mainbody.length === 2) {
            title = mainbody[lngId].ds_title;
        } else {
            title = mainbody[0].ds_title;
        }
        if (title === '')
            return 'No Title';
        return title;
    }

    const getTextFromContent = () => {
        let text;
        if (mainbody.length === 2) {
            text = mainbody[lngId].ds_content;
        } else {
            text = mainbody[0].ds_content;
        }
        let cleanedText = text.replace(/<\/[^>]+>/g, '\n') // Replace ending tags with newline
            .replace(/<[^>]+>/g, ''); // Remove all HTML tags
        if (cleanedText === '')
            return 'No Content';
        return cleanedText;
    }

    const currentLngId = () => {
        if (mainbody.length === 2) {
            return lngId;
        } else {
            return mainbody[0].id_lng;
        }
    }

    return (
        <button className='min-h-[137px] flex items-center gap-[15px] overflow-hidden border-[2px] border-beighe rounded-[10px] hover:bg-bcg_2 active:bg-beighe duration-300 transaction-all'>
            <div className='w-full h-full max-w-[100px]'>
                {image !== '' ?
                    <img draggable={false} src={process.env.FILE_IMAGE_BASE + image} alt='' className={`object-cover w-full h-full`} />
                    :
                    <div className='flex items-center justify-center w-full h-full bg-gray-300'>
                        <svg className='w-12 h-12 text-gray-200'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 640 512'>
                            <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                        </svg>
                    </div>
                }
            </div>
            <div
                className='w-full text-dark grid gap-[5px] pr-[15px]'
                onClick={() => { disabled ? '' : router.push(`/blog/${id}`) }}
            >
                <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='text-[16px] md:text-[20px] font-medium line-clamp-1 px-[5px]'>
                    {getTextFromTitle()}
                </div>
                <div dir={currentLngId() === 0 ? 'ltr' : 'rtl'} className='whitespace-pre-line line-clamp-2 text-[14px] md:text-[16px] px-[5px]'>
                    {getTextFromContent()}
                </div>
                <div className='text-[14px] md:text-[16px] opacity-60 capitalize line-clamp-1'>
                    —&nbsp;{author}
                </div>
            </div>
        </button>
    )
}