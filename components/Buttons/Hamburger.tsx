interface ButtonProps {
    state: boolean,
}

export default function Hamburger({
    state
}: ButtonProps) {

    return (
        <div>
            <button className='relative group'>
                <div className={`relative bg-beighe flex overflow-hidden items-center justify-center rounded-full w-[42px] h-[42px] transform transition-all ring-deviders hover:ring-8 ${state ? 'ring-4' : 'ring-0'} ring-opacity-30 duration-200 shadow-md`}>
                    <div className='flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden'>
                        <div className={`bg-dark h-[2px] w-[16px] transform transition-all duration-300 origin-left ${state ? 'translate-y-6' : ''} delay-100`}></div>
                        <div className={`bg-dark h-[2px] w-[16px] rounded transform transition-all duration-300 ${state ? 'translate-y-6' : ''} delay-75`}></div>
                        <div className={`bg-dark h-[2px] w-[16px] transform transition-all duration-300 origin-left ${state ? 'translate-y-6' : ''}`}></div>

                        <div className={`absolute items-center justify-between transform transition-all duration-500 top-[8px] -translate-x-10 ${state ? 'translate-x-0' : ''} flex w-0 ${state ? 'w-[16px]' : ''}`}>
                            <div className={`absolute bg-dark h-[2px] w-[16px] transform transition-all duration-500 rotate-0 delay-300 ${state ? 'rotate-45' : ''}`}></div>
                            <div className={`absolute bg-dark h-[2px] w-[16px] transform transition-all duration-500 -rotate-0 delay-300 ${state ? '-rotate-45' : ''}`}></div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
