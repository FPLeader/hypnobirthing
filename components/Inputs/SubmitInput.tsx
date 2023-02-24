interface InputProps {
    placeholder?: string,

}

export default function SubmitInput({
    placeholder
}: InputProps) {
    return (
        <input
            type='text'
            id=''
            className='max-w-[356px] bg-gray-50 border border-dark text-dark text-[Lato] text-[16px] rounded-[500px] block w-full px-[24px]'
            placeholder={placeholder ? placeholder : ''}
            required
        />
    )
}