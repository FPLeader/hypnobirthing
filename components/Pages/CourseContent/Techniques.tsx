import { NormalButton } from '@/components/Buttons'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

interface PageProps {
    lngId: number,
    title1: string,
    title2: string,
    text4: string,
    text5: string,
    text6: string,
    text7: string,
}

export default function Techniques({
    lngId,
    title1,
    title2,
    text4,
    text5,
    text6,
    text7,
}: PageProps) {
    const router = useRouter();
    const { t } = useTranslation();
    const style = {
        Title: `text-dark text-center font-medium ${lngId === 0 ? 'md:text-left' : 'md:text-right'} text-[20px] md:text-[24px] lg:text-[28px]`,
        Content: 'whitespace-pre-line text-dark text-[16px] lg:text-[20px]',
    }

    return (
        <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
                <div className={style.Title}>
                    {title1}
                </div>
                <div className={style.Content}>
                    {text4}
                </div>
                <ul className={`list-disc ${lngId === 0 ? 'pl-[30px]' : 'pr-[30px]'}`}>
                    {text5.split('\n').map((item: string, index: number) => (
                        <li key={index} className='text-dark text-[16px] md:text-[18px]'>{item}</li>
                    ))}
                </ul>
                <div className={style.Content}>
                    {text6}
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <div className={style.Title}>
                    {title2}
                </div>
                <div className={style.Content}>
                    {text7}
                </div>
            </div>
            <div className='mt-[25px]'>
                <div onClick={() => router.push('/upcomingcourse')}>
                    <NormalButton text={t('Go to courses')} />
                </div>
            </div>
        </div>
    )
}
