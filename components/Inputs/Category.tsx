interface InputProps {
    category: string,
    placeholder: string,
    type?: string,
    inputValue: string,
    handleChange: any,
    disabled?: boolean,
    dir?: string,
}

export default function Category({
    category,
    placeholder = '',
    type = 'text',
    inputValue,
    handleChange,
    disabled = false,
    dir = 'ltr'
}: InputProps) {
    return (
        <div className='flex flex-col gap-[6px]'>
            {category !== '' ?
                <label
                    className={`text-[14px] text-dark ${dir ==='rtl' && 'text-right'}`}
                >{category}</label>
                :
                <></>
            }
            <input
                dir={dir}
                type={type}
                id={category}
                value={inputValue}
                onChange={e => handleChange(e.target.value)}
                className={`appearance-none w-full px-[12px] py-[9.5px] lg:py-[11px] ${disabled ? 'bg-disabled' : 'bg-white'} border border-deviders focus:border-pink-500y text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato] transition-all duration-300`}
                placeholder={placeholder}
                disabled={disabled}
                required
            />
        </div>
    )
}
