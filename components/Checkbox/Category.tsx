import { Dispatch, SetStateAction } from 'react'

interface CheckboxProps {
    lngId?: number
    category?: string,
    id: string,
    text: string,
    checkValue: boolean,
    setCheckValue: Dispatch<SetStateAction<boolean>>,
    disabled?: boolean,
    className?: string,
}

export default function Category({
    lngId,
    category,
    id,
    text,
    checkValue,
    setCheckValue,
    disabled,
    className,
}: CheckboxProps) {
    const style = {
        CheckBox: 'bg-white border rounded-[4px] border-Label w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center',
    }

    return (
        <div className='flex items-center gap-[10px]'>
            <input
                type='checkbox'
                id={id}
                onChange={() => setCheckValue(!checkValue)}
                className='opacity-0 absolute w-[26px] h-[26px]'
                checked={checkValue}
            />
            <div className={style.CheckBox}>
                <svg className='hidden pointer-events-none' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.5 1.125L5.5625 10.0625L1.5 6' stroke='#2B2525' strokeWidth='1.6666' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            </div>
            <label htmlFor={id} className='text-dark text-[14px] select-none'>
                {text}
            </label>
        </div>
    )
}
