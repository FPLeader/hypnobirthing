import { isImageOrVideoOrYoutube } from '@/components/Functions'
import { VideoCard } from '@/components/Cards'
import { RegularTitle } from '@/components/Titles'

interface PageProps {
    lngId: number,
    pageTitle: string,
    text1: string,
    text2: string,
    fileName1: string,
    fileName2: string,
}

export default function Introduction({
    lngId,
    pageTitle,
    text1,
    text2,
    fileName1,
    fileName2
}: PageProps) {

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <RegularTitle lngId={lngId} text={pageTitle} />
                <div className='mt-[20px] w-full grid md:grid-cols-2 gap-[35px] items-center'>
                    <span className='whitespace-pre-line text-[18px] text-dark max-md:row-start-2'>
                        {text1}
                    </span>
                    {/* <VideoCard title='What is HypnoBirthing?' videoUrl='YGxKPJDzok8' style='w-full aspect-w-16 aspect-h-9 min-h-[177px]' /> */}
                    {/* <img draggable='false' src='/img/whathypno2.png' alt='' className={`w-full h-full min-h-[250px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`} /> */}
                    {
                        isImageOrVideoOrYoutube(fileName1) === 'image'
                            ?
                            <img
                                draggable='false'
                                src={process.env.FILE_IMAGE_BASE + fileName1}
                                alt=''
                                className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                            />
                            :
                            <div className='w-full'>
                                <div className='min-h-[200px] max-w-[800px] m-auto'>
                                    <div className='aspect-w-16 aspect-h-9'>
                                        <VideoCard
                                            title=''
                                            videoUrl={fileName1}
                                            style='min-h-[200px] max-h-[480px]'
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        isImageOrVideoOrYoutube(fileName2) === 'image'
                            ?
                            <img
                                draggable='false'
                                src={process.env.FILE_IMAGE_BASE + fileName2}
                                alt=''
                                className={`w-full h-full min-h-[200px] object-cover rounded-[10px] lg:rounded-[15px] ${process.env.DEV_MODE && 'blur-lg'}`}
                            />
                            :
                            <div className='w-full'>
                                <div className='min-h-[200px] max-w-[800px] m-auto'>
                                    <div className='aspect-w-16 aspect-h-9'>
                                        <VideoCard
                                            title=''
                                            videoUrl={fileName2}
                                            style='min-h-[200px] max-h-[480px]'
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                    <span className='whitespace-pre-line text-[18px] text-dark'>
                        {text2}
                    </span>
                </div>
            </div>
        </div>
    )
}
