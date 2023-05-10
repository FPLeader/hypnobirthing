interface InputProps {
    lngId?: number,
    category: string,
    placeholder: string,
    type?: string,
    inputValue: any,
    handleChange: any,
}

export default function CategoryRule({
    lngId = 0,
    category,
    placeholder = '',
    type = 'text',
    inputValue,
    handleChange,

}: InputProps) {
    const isError = () => {
        return (inputValue.errorMessage !== '' && inputValue.errorMessage.length !== 0);
    }

    return (
        <div className='flex flex-col gap-[6px]'>
            <label className={`text-[14px] text-dark ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                {category}
            </label>
            <input
                dir={lngId === 0 ? 'ltr' : 'rtl'}
                type={type}
                id={category}
                value={inputValue.value}
                onChange={handleChange}
                className={`appearance-none w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border ${isError() ? 'border-danger' : 'border-deviders'} text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato] transition-all duration-300`}
                placeholder={placeholder}
                required
            />
            {isError() &&
                <span className={`pl-[5px] text-[14px] text-danger ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                    {inputValue.errorMessage}
                </span>
            }
        </div>
    )
}
