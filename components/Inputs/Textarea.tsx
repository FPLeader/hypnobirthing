interface InputProps {
    category?: string,
    placeholder: string,
    inputValue: string,
    handleChange: any,
}

export default function Textarea({
    category = '',
    placeholder = '',
    inputValue,
    handleChange,
}: InputProps) {
    return (
        <div className='flex flex-col gap-[6px]'>
            {category.length !== 0 && <label className='text-[14px] text-dark'>{category}</label>}
            <textarea
                id=''
                className='w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border border-deviders text-dark text-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:text-[Lato] transition-border duration-300'
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
