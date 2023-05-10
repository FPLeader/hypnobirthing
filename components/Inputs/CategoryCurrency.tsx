import CurrencyInput from 'react-currency-input-field';

interface InputProps {
    lngId?: number
    category: string,
    placeholder: string,
    inputValue: any,
    handleChange: any,
    disabled?: boolean,
    className?: string,
}

export default function CategoryCurrency({
    lngId = 0,
    category,
    placeholder = '',
    inputValue,
    handleChange,
    disabled = false,
    className
}: InputProps) {
    return (
        <div className={`flex flex-col gap-[6px] ${className}`}>
            {category !== '' &&
                <label className={`text-[14px] text-dark ${lngId === 0 ? 'text-left' : 'text-right'}`}>
                    {category}
                </label>
            }
            <CurrencyInput
                dir={lngId === 0 ? 'ltr' : 'rtl'}
                id="input-currency"
                name="input-name"
                placeholder={placeholder}
                prefix='₪ '
                groupSeparator=','
                decimalSeparator='.'
                defaultValue={0.00}
                decimalsLimit={2}
                value={inputValue}
                onValueChange={(value) => handleChange(value)}
                className='appearance-none w-full px-[12px] py-[9.5px] lg:py-[11px] border border-deviders focus:border-pink-500y text-dark font-[Lato] text-[16px] rounded-[10px] placeholder:text-[#2B252590] placeholder:font-[Lato] transition-all duration-300'
                required
            />
        </div>
    )
}