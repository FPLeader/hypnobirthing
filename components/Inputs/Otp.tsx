import { useMemo } from 'react'

interface OtpInputProps {
    value: any,
    valueLength: number,
    handleChange: any,
    wrongOtpTimer: number,
}

export default function OtpInput({
    value,
    valueLength,
    handleChange,
    wrongOtpTimer = 0
}: OtpInputProps) {
    const RE_DIGIT = new RegExp(/^\d+$/);

    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [value, valueLength]);

    const focusToNextInput = (target: any) => {
        const nextElementSibling =
            target.nextElementSibling;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };
    const focusToPrevInput = (target: any) => {
        const previousElementSibling =
            target.previousElementSibling;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnChange = (e: any, idx: any) => {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }

        const nextInputEl = target.nextElementSibling;

        // only delete digit if next input element has no value
        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : ' ';

        targetValue = isTargetValueDigit ? targetValue : ' ';
        const targetValueLength = targetValue.length;
        if (targetValueLength === 1) {
            const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);

            handleChange(newValue);

            if (!isTargetValueDigit) {
                return;
            }

            const nextElementSibling = target.nextElementSibling;

            if (nextElementSibling) {
                nextElementSibling.focus();
            }

            focusToNextInput(target);
        } else if (targetValueLength === valueLength) {
            handleChange(targetValue);

            target.blur();
        }
    };

    const inputOnKeyDown = (e: any) => {
        const { key } = e;
        const target = e.target;
        if (key === 'ArrowRight' || key === 'ArrowDown') {
            e.preventDefault();
            return focusToNextInput(target);
        }

        if (key === 'ArrowLeft' || key === 'ArrowUp') {
            e.preventDefault();
            return focusToPrevInput(target);
        }

        const targetValue = target.value;

        // keep the selection range position
        // if the same digit was typed
        target.setSelectionRange(0, targetValue.length);

        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }

        const previousElementSibling =
            target.previousElementSibling;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnFocus = (e: any) => {
        const { target } = e;

        // keep focusing back until previous input
        // element has value
        const prevInputEl = target.previousElementSibling;

        if (prevInputEl && prevInputEl.value === '') {
            return prevInputEl.focus();
        }

        target.setSelectionRange(0, target.value.length);
    };

    return (
        <div className='w-full flex max-w-[360px] gap-[5px] md:gap-[10px]'>
            {valueItems.map((digit, idx) => (
                <input
                    key={idx}
                    type='text'
                    inputMode='numeric'
                    autoComplete='one-time-code'
                    pattern='\d{1}'
                    maxLength={valueLength}
                    className={`w-full p-0 h-[40px] md:h-[60px] ${wrongOtpTimer > 0 ? 'border-danger' : 'border-deviders'} border rounded-[5px] text-center text-[26px] md:text-[32px] focus:ring-0 focus:border-dark transition-all duration-300`}
                    value={digit}
                    onChange={(e) => inputOnChange(e, idx)}
                    onFocus={inputOnFocus}
                    onKeyDown={inputOnKeyDown}
                />
            ))}
        </div>
    );
}