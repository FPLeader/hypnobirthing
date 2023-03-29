import { PhoneIcon, WorldIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/assests/Icons'

interface ButtonProps {
    Icontype: number,
    text: string,
    disabled?: boolean,
}

export default function Contact({
    Icontype,
    text,
    disabled = false,
}: ButtonProps) {
    const renderIcon = () => {
        switch (Icontype) {
            case 0:
                return <PhoneIcon width={18} height={18} color='#2B2525' />;
            case 1:
                return <WorldIcon width={20} height={20} color='#2B2525' />;
            case 2:
                return <InstagramIcon width={18} height={18} color='#2B2525' />;
            case 3:
                return <FacebookIcon width={12} height={23} color='#2B2525' />;
            case 4:
                return <TwitterIcon width={18} height={15} color='#2B2525' />;
            default:
                return null;
        }
    }

    return (
        <div className={`w-full h-[50px] md:h-[45px] flex justify-center items-center disabled:bg-disabled border border-beighe ${disabled ? 'bg-transparent opacity-50' : 'bg-[#F0E6DB]'} rounded-[10px] transition-all duration-400`}>
            <div className='w-full grid grid-cols-3 min-[350px]:grid-cols-7 gap-[14px]'>
                <div className='col-span-1 min-[350px]:col-span-3'>
                    <div className='float-right'>
                        {renderIcon()}
                    </div>
                </div>
                <div className='col-span-2 min-[350px]:col-span-4 text-dark text-left font-medium text-[14px] uppercase'>
                    {text}
                </div>
            </div>
        </div >
    )
}
