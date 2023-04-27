import {
    NormalTextSkeleton,
    ImageSkeleton,
    TeacherCardSkeleton
} from '@/components/Skeletons'

export default function Skeleton() {
    return (
        <div className='w-full flex justify-center'>
            <div className='pt-[70px] lg:pt-[90px] w-full max-w-[1225px] mx-[20px]'>
                <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
                <div className='w-full mt-[20px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-x-[35px] lg:gap-y-[70px] items-center'>
                    <NormalTextSkeleton />
                    <ImageSkeleton />
                </div>

                <div className='grid md:grid-cols-4 gap-2 mt-[30px] md:mt-[50px]'>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                </div>

                <div className='flex flex-col md:grid md:grid-cols-3 gap-[20px] md:gap-[35px] pt-10'>
                    {Array.from({ length: 9 }, (_, index: number) => (
                        <TeacherCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
