interface InputProps {
    category: string,
    placeholder: string,
    type?: string,
}

export default function Category({
    category,
    placeholder = '',
    type = 'text'
}: InputProps) {
    return (
        <div className='flex flex-col gap-[6px]'>
            <label className='text-[14px] text-dark'>{category}</label>
            <input
                type={type}
                id={category}
                className='appearance-none w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border border-deviders focus:border-pink-500y text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato]'
                placeholder={placeholder}
                required
            />
        </div>
    )
}
