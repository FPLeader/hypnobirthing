import { useState, Dispatch, SetStateAction, useRef, useEffect } from 'react'
import DatePicker from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import useOutsideClick from '@/services/Hooks/useOutsideClick'
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import type { Value } from 'react-multi-date-picker'

interface InputProps {
    category: string,
    title: string,
    placeholder: string,
    value: Value,
    setValue: Dispatch<SetStateAction<Value>>
}

export default function Category({
    category,
    title = '',
    placeholder = '',
    value,
    setValue,
}: InputProps) {

    const datePickerRef = useRef<HTMLDivElement>(null)
    const datePickerHandler = useOutsideClick({ ref: datePickerRef })

    const handleChange = (value: any) => {
        setValue(value);
    }

    useEffect(() => {
        if (datePickerHandler && datePickerRef.current) {
            (datePickerRef.current as any).closeCalendar()
        }
    }, [datePickerHandler])

    return (
        <div className='flex flex-col gap-[6px] relative'>
            <label className='text-[14px] text-dark'>
                {category}
            </label>
            <DatePicker
                ref={datePickerRef}
                multiple
                value={value}
                onChange={handleChange}
                plugins={[
                    <DatePanel key='date-panel' sort='date' />,
                    <TimePicker key='time-picker' position='bottom' hideSeconds />
                ]}
                inputClass='w-full px-[12px] py-[9.5px] lg:py-[11px] border border-deviders focus:border-pink-500y text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato] transition-all duration-300'
                className=''
                format='MM/DD/YYYY HH:mm'
            />
        </div>
    )
}
