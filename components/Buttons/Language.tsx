import { useState } from 'react'
import { WorldIcon } from '@/assests/Icons'

export default function Language() {
    const [Language, SetLanguage] = useState<boolean>(true);
    const ClickHandler = () => {
        SetLanguage(!Language);
    }
    return (
        <div onClick={ClickHandler} className='max-md:hidden bg-white hover:bg-bcg_2 border border-deviders rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none transaction-all duration-100'>
            <WorldIcon />
            {Language ? 'EN' : 'HE'}
        </div>
    )
}
