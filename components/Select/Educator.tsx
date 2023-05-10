import { Dispatch, SetStateAction, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, UpdownIcon } from '@/assests/Icons'

interface SelectItem {
    cd_educator: string,
    nm_user: string[],
    ds_avatar: string,
}

interface SelectProps {
    lngId: number,
    category: string,
    selectItems: SelectItem[],
    inputValue: SelectItem,
    handleChange: Dispatch<SetStateAction<SelectItem>>
}

export default function CategoryEducator({
    lngId,
    category,
    selectItems,
    inputValue,
    handleChange
}: SelectProps) {

    const currentName = (value: string[]) => {
        if (value[lngId] !== '')
            return value[lngId];
        else {
            if (lngId === 0)
                return value[1];
            else if (lngId === 1)
                return value[0];
        }
    }

    return (
        <div className='flex flex-col gap-[6px]'>
            <label className='text-[14px] text-dark'>
                {category}
            </label>
            <Listbox value={inputValue} onChange={handleChange}>
                <div className='relative mt-1'>
                    <Listbox.Button className={`relative w-full cursor-default rounded-[10px] bg-white py-[11px] px-[12px] ${lngId === 0 ? 'text-left' : 'text-right'} border border-deviders`}>
                        <div
                            className={`w-full flex gap-[5px] items-center ${lngId === 0 ? 'pr-[12px]' : 'pl-[12px] flex-row-reverse'}`}
                        >
                            <img
                                draggable='false'
                                src={inputValue.ds_avatar === ''
                                    ?
                                    '/img/defaultavatar.png'
                                    :
                                    `${process.env.FILE_IMAGE_BASE + inputValue.ds_avatar}`
                                }
                                alt=''
                                className='w-[30px] h-[30px] object-cover rounded-full overflow-hidden'
                            />
                            <div
                                dir={lngId === 0 ? 'ltr' : 'rtl'}
                                className='font-[lato] text-[16px] capitalize line-clamp-1'
                            >
                                {currentName(inputValue.nm_user)}
                            </div>
                        </div>
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
                                    <div className={`w-full flex gap-[5px] items-center py-[10px] px-[12px] ${lngId === 0 ? 'pr-[28px]' : 'pl-[28px] flex-row-reverse'} ${item.cd_educator === inputValue.cd_educator ? 'font-medium bg-bcg_2' : 'font-normal'}`}>
                                        <img
                                            draggable='false'
                                            src={item.ds_avatar === ''
                                                ?
                                                '/img/defaultavatar.png'
                                                :
                                                `${process.env.FILE_IMAGE_BASE + item.ds_avatar}`
                                            }
                                            alt=''
                                            className='w-[30px] h-[30px] object-cover rounded-full overflow-hidden'
                                        />
                                        <div
                                            dir={lngId === 0 ? 'ltr' : 'rtl'}
                                            className={`w-full line-clamp-1 capitalize ${lngId === 0 ? 'text-left' : 'text-right'}`}
                                        >
                                            {currentName(item.nm_user)}
                                        </div>
                                    </div>
                                    {item.cd_educator === inputValue.cd_educator ? (
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
