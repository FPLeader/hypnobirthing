import { RegularButton } from '../Buttons'

export default function Insurance() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] mx-[20px] min-h-screen pt-[70px] md:pt-[90px]'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='flex flex-col items-center gap-[15px] md:gap-[20px] lg:gap-[30px]'>
                            <div className='text-center text-dark font-light text-[30px] md:text-[36px] lg:text-[42px]'>
                                This page doesn't exist.
                            </div>
                            <RegularButton text={'Back to Main Page'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}