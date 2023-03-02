import { useEffect, useState } from 'react'
import { DropdownIcon } from '@/assests/Icons'

interface HeaderLinkProps {
    title: string,
    isIcon?: boolean,
}

export default function HeaderLink({
    title,
    isIcon = true
}: HeaderLinkProps) {
    const [showIcon, setShowIcon] = useState<boolean>(isIcon)

    return (
        <div className='uppercase flex items-center gap-[5px] xl:gap-[10px] cursor-pointer py-2 relative select-none'>
            {title}
            {showIcon && <DropdownIcon />}
        </div>
    )
}
