

export default function Hamburger() {
    return (
        <div>
            <button className='relative group'>
                <div className='relative bg-beighe flex overflow-hidden items-center justify-center rounded-full w-[42px] h-[42px] transform transition-all ring-0 ring-deviders hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
                    <div className='flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden'>
                        <div className='bg-dark h-[2px] w-[16px] transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100'></div>
                        <div className='bg-dark h-[2px] w-[16px] rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75'></div>
                        <div className='bg-dark h-[2px] w-[16px] transform transition-all duration-300 origin-left group-focus:translate-y-6'></div>

                        <div className='absolute items-center justify-between transform transition-all duration-500 top-[8px] -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-[16px]'>
                            <div className='absolute bg-dark h-[2px] w-[16px] transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45'></div>
                            <div className='absolute bg-dark h-[2px] w-[16px] transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45'></div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
