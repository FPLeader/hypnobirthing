import { WorldIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'

interface InputProps {
    lngId?: number,
    IconType: number,
    placeholder: string,
    inputValue: any,
    handleChange: any
}

export default function Category({
    lngId = 0,
    IconType = 0,
    placeholder = '',
    inputValue,
    handleChange
}: InputProps) {
    const renderIcon = () => {
        switch (IconType) {
            case 0:
                return <WorldIcon width={15} height={15} color='#2B2525' />;
            case 1:
                return <InstagramIcon width={13} height={13} color='#2B2525' />;
            case 2:
                return <FacebookIcon width={9} height={17} color='#2B2525' />;
            case 3:
                return <TwitterIcon width={13} height={11} color='#2B2525' />;
            default:
                return null;
        }
    }

    const isError = () => {
        if (inputValue.value === '')
            return false;
        return (inputValue.errorMessage !== '' && inputValue.errorMessage.length !== 0);
    }

    return (
        <div>
            <div className='relative w-full'>
                <div className={`absolute top-0 h-full ${lngId === 0 ? 'left-2 pl-3' : 'right-2 pr-3'} flex items-center pointer-events-none`}>
                    {renderIcon()}
                </div>
                <input
                    type='text'
                    className={`appearance-none w-full ${lngId === 0 ? 'pl-[40px] pr-[15px]' : 'pl-[15px] pr-[40px]'} py-[9.5px] lg:py-[11px] bg-white border ${isError() ? 'border-danger' : 'border-deviders'} text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato] transition-all duration-300`}
                    placeholder={placeholder}
                    value={inputValue.value}
                    onChange={handleChange}
                />
            </div>
            {isError() &&
                <span className={`${lngId === 0 ? 'pl-[40px]' : 'pr-[40px]'} text-[14px] text-danger`}>
                    {inputValue.errorMessage}
                </span>
            }
        </div>
    )
}