import { WorldIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'

interface InputProps {
    IconType: number,
    placeholder: string,
}

export default function Category({
    IconType = 0,
    placeholder = '',
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

    return (
        <div className='relative w-full'>
            <div className='absolute top-0 h-full left-2 flex items-center pl-3 pointer-events-none'>
                {renderIcon()}
            </div>
            <input
                type='text'
                className='appearance-none w-full pl-[40px] pr-[15px] py-[9.5px] lg:py-[11px] bg-white border border-deviders focus:border-pink-500y text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato]'
                placeholder={placeholder}
                required
            />
        </div>
    )
}
