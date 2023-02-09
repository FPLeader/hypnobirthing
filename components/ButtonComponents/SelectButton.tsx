

interface SelectItem {
    value: string;
    text: string;
}

interface SelectProps {
    category: string;
    selectItems: SelectItem[];
}

export default function SelectButton({
    category,
    selectItems,
}: SelectProps) {
    return (
        <div className='w-full flex flex-col'>
            <label className='block mb-2 text-sm font-sm text-dark'>{category}</label>
            <select id='countries' className='w-full bg-gray-50 border border-deviders text-dark text-sm rounded-lg block w-full p-2.5 h-[46px]'>
                <option defaultValue=''>Select&nbsp;{category}</option>
                {selectItems.map((obj, index) => (
                    <option key={index} value={obj.value}>{obj.text}</option>
                ))}
            </select>
        </div>
    )
}
