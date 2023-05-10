interface InputProps {
    lngId?: number,
    category?: string,
    placeholder: string,
    inputValue: any,
    handleChange: any
}

export default function Textarea({
    lngId = 0,
    category = '',
    placeholder = '',
    inputValue,
    handleChange
}: InputProps) {
    const isError = () => {
        return (inputValue.errorMessage !== '' && inputValue.errorMessage.length !== 0);
    }

    return (
        <div className='flex flex-col gap-[6px]'>
            {category.length !== 0 &&
                <label className={`text-[14px] text-dark ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                    {category}
                </label>
            }
            <textarea
                dir={lngId === 0 ? 'ltr' : 'rtl'}
                id={category}
                className={`w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border ${isError() ? 'border-danger' : 'border-deviders'} text-dark text-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[lato] transition-border duration-300`}
                placeholder={placeholder}
                rows={5}
                cols={33}
                value={inputValue.value}
                onChange={handleChange}
                required
            />
            {isError() &&
                <span className={`pl-[5px] text-[14px] text-danger ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                    {inputValue.errorMessage}
                </span>
            }
        </div >
    )
}
