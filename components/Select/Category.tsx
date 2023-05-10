import { Dispatch, SetStateAction, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, UpdownIcon } from '@/assests/Icons'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'

interface SelectItem {
    id: number,
    value: string,
}

interface SelectProps {
    category: string,
    selectItems: SelectItem[],
    inputValue: SelectItem,
    handleChange: Dispatch<SetStateAction<SelectItem>>,
    className?: string,
}

export default function Category({
    category,
    selectItems,
    inputValue,
    handleChange,
    className
}: SelectProps) {
    // language option
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;

    return (
        <div className={`flex flex-col gap-[6px] ${className}`}>
            <label className='text-[14px] text-dark'>{category}</label>
            <Listbox value={inputValue} onChange={handleChange}>
                <div className='relative mt-1'>
                    <Listbox.Button className={`relative w-full cursor-default rounded-[10px] bg-white py-[11px] px-[12px] ${lngId === 0 ? 'text-left' : 'text-right'} border border-deviders`}>
                        <span className={`block truncate font-[Lato] text-[16px] ${lngId === 0 ? 'pr-[12px]' : 'pl-[12px]'}`}>
                            {t(inputValue.value)}
                        </span>
                        <span className={`pointer-events-none absolute inset-y-0 ${lngId === 0 ? 'right-0 pr-[12px]' : 'left-0 pl-[12px]'} flex items-center`}>
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
                                        className={`block truncate py-[10px] px-[12px] line-clamp-1 ${lngId === 0 ? 'pr-[28px] text-left' : 'pl-[28px] text-right'} ${item.value === inputValue.value ? 'font-medium bg-bcg_2' : 'font-normal'}`}
                                    >
                                        {t(item.value)}
                                    </span>
                                    {item.value === inputValue.value ? (
                                        <span className={`absolute inset-y-0 ${lngId === 0 ? 'right-0 pr-[12px]' : 'left-0 pl-[12px]'} flex items-center`}>
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
