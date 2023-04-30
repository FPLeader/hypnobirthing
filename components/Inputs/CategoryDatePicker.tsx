import { useState, Dispatch, SetStateAction } from 'react'
import DatePicker from 'react-multi-date-picker'

interface InputProps {
    category: string,
    title: string,
    placeholder: string,
    value: Date | undefined,
    setValue: Dispatch<SetStateAction<Date | undefined>>
}

export default function Category({
    category,
    title = '',
    placeholder = '',
    value,
    setValue,
}: InputProps) {
    // const [show, setShow] = useState<boolean>(false)
    // const handleChange = (selectedDate: Date) => {
    //     console.log(selectedDate)
    //     setValue(selectedDate);
    // }
    // const handleClose = (state: boolean) => {
    //     setShow(state)
    // }

    // const options = {
    //     title: '',
    //     autoHide: true,
    //     todayBtn: false,
    //     clearBtn: false,
    //     maxDate: new Date('2030-01-01'),
    //     minDate: new Date('1950-01-01'),
    //     theme: {
    //         background: 'bg-white z-[4000]',
    //         todayBtn: '',
    //         clearBtn: '',
    //         icons: '',
    //         text: '',
    //         disabledText: 'bg-gray',
    //         input: '',
    //         inputIcon: '',
    //         selected: '',
    //     },
    //     icons: {
    //         // () => ReactElement | JSX.Element
    //         prev: () => <span>Previous</span>,
    //         next: () => <span>Next</span>,
    //     },
    //     datepickerClassNames: 'top-[70px] w-full flex justify-center',
    //     defaultDate: new Date(),
    //     language: 'en',
    // }

    const handleChange = (value: any) => {
        setValue(value);
    }

    return (
        <div className='flex flex-col gap-[6px] relative'>
            <label className='text-[14px] text-dark'>{category}</label>
            {/* <Datepicker
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
            /> */}
            <DatePicker
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
