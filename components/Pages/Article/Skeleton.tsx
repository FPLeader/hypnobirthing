
export default function Skeleton() {
    return (
        <div className='w-full flex justify-center pt-[70px] md:pt-[90px]'>
            <div className='pt-[70px] lg:pt-[90px] w-full max-w-[1225px] mx-[20px]'>
                <div className='h-3 md:h-4 bg-gray-300 rounded-full w-full max-w-[300px]'></div>
                <div className='w-full mt-[35px] space-y-[20px]'>
                    <div className='w-full max-w-[750px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[550px] h-2 bg-gray-200 rounded-full'></div>
                </div>

                <div className='grid md:grid-cols-4 gap-2 mt-[30px] md:mt-[50px]'>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                    <div className='w-full max-w-[250px] h-2 bg-gray-200 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
