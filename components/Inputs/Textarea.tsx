interface InputProps {
    category?: string,
    placeholder: string,
}

export default function Textarea({
    category = '',
    placeholder = '',
}: InputProps) {
    return (
        <div className='flex flex-col gap-[6px]'>
            {category.length !== 0 && <label className='text-[14px] text-dark'>{category}</label>}
            <textarea
                id=''
                className='w-full px-[12px] py-[9.5px] lg:py-[11px] bg-white border border-deviders text-dark text-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:text-[Lato]'
                placeholder={placeholder}
                rows={5}
                cols={33}
                required
            />
        </div >
    )
}
