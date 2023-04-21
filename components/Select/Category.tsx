import { Dispatch, SetStateAction, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, UpdownIcon } from '@/assests/Icons'

interface SelectItem {
    id: number,
    value: string,
}

interface SelectProps {
    category: string,
    selectItems: SelectItem[],
    inputValue: SelectItem,
    handleChange: Dispatch<SetStateAction<SelectItem>>,
}

export default function Category({
    category,
    selectItems,
    inputValue,
    handleChange
}: SelectProps) {

    return (
        <div className='flex flex-col gap-[6px]'>
            <label className='text-[14px] text-dark'>{category}</label>
            <Listbox value={inputValue} onChange={handleChange}>
                <div className='relative mt-1'>
                    <Listbox.Button className='relative w-full cursor-default rounded-[10px] bg-white py-[11px] px-[12px] text-left border border-deviders'>
                        <span className='block truncate font-[Lato] text-[16px]'>{inputValue.value}</span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[12px]'>
                            <UpdownIcon />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-[10px] bg-white py-1 font-[Lato] text-[16px] border border-deviders z-10'>
                            {selectItems.map((item: SelectItem, index: number) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none ${active ? 'bg-bcg' : 'bg-white'}`
                                    }
                                    value={item}
                                >
                                    <span
                                        className={`block truncate py-[10px] px-[12px] ${item.value === inputValue.value ? 'font-medium bg-bcg_2' : 'font-normal'}`}
                                    >
                                        {item.value}
                                    </span>
                                    {item.value === inputValue.value ? (
                                        <span className='absolute inset-y-0 right-0 flex items-center pr-[12px]'>
                                            <CheckIcon />
                                        </span>
                                    ) : null}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
