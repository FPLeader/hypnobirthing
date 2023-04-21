interface InputProps {
    category?: string,
    placeholder: string,
    inputValue: any,
    handleChange: any,
    dir?: string,
}

export default function Textarea({
    category = '',
    placeholder = '',
    inputValue,
    handleChange,
    dir = 'ltr'
}: InputProps) {
    const isError = () => {
        return (inputValue.errorMessage !== '' && inputValue.errorMessage.length !== 0);
    }

    return (
        <div className='flex flex-col gap-[6px]'>
            {category.length !== 0 &&
                <label className={`text-[14px] text-dark ${dir === 'rtl' && 'text-right'}`}>
                    {category}
                </label>
            }
            <textarea
                dir={dir}
                id={category}
                className={`w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border ${isError() ? 'border-danger' : 'border-deviders'} text-dark text-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:text-[Lato] transition-border duration-300`}
                placeholder={placeholder}
                rows={5}
                cols={33}
                value={inputValue.value}
                onChange={handleChange}
                required
            />
            {isError() &&
                <span className={`pl-[5px] text-[14px] text-danger ${dir === 'rtl' && 'text-right'}`}>
                    {inputValue.errorMessage}
                </span>
            }
        </div >
    )
}
