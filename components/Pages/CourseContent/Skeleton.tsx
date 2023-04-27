import {
    NormalTextSkeleton,
    ImageSkeleton,
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='mt-[20px] md:mt-[30px] lg:mt-[70px]'>
            <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
            <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px]'>
                <NormalTextSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <div className='max-lg:row-start-3'>
                    <NormalTextSkeleton />
                </div>
            </div>
        </div>
    )
}
