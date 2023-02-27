interface SelectItem {
    value: string;
    text: string;
}

interface SelectProps {
    category: string;
    selectItems: SelectItem[];
}

export default function Category({
    category,
    selectItems,
}: SelectProps) {
    return (
        <div className='w-full flex flex-col gap-[6px]'>
            <label className='text-sm font-sm text-dark'>{category}</label>
            <select id='countries' className='w-full h-[44px] bg-white border border-deviders text-dark text-sm rounded-lg w-full p-2.5'>
                <option defaultValue=''>Select&nbsp;{category}</option>
                {selectItems.map((obj, index) => (
                    <option key={index} value={obj.value}>{obj.text}</option>
                ))}
            </select>
        </div>
    )
}
