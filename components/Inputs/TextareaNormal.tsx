interface InputProps {
    category?: string,
    placeholder: string,
    inputValue: any,
    handleChange: any,
    lngId?: number,
}

export default function TextareaNormal({
    category = '',
    placeholder = '',
    inputValue,
    handleChange,
    lngId = 0
}: InputProps) {

    return (
        <div className='flex flex-col gap-[6px]'>
            {category !== '' &&
                <label className={`text-[14px] text-dark ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                    {category}
                </label>
            }
            <textarea
                dir={lngId === 0 ? 'ltr' : 'rtl'}
                id={category}
                className={`w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border border-deviders text-dark text-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:text-[Lato] transition-border duration-300`}
                placeholder={placeholder}
                rows={5}
                cols={33}
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                required
            />
        </div >
    )
}
