interface InputProps {
    placeholder?: string,

}

export default function SubmitInput({
    placeholder
}: InputProps) {
    return (
        <div className='w-full md:max-w-[356px]'>
            <div className='mx-[20px]'>
                <input
                    type='text'
                    id=''
                    className='w-full px-[24px] py-[11.5px] lg:py-[16.5px] bg-bcg_2 border-[1px] border-dark text-dark text-[Lato] text-[16px] rounded-[500px] placeholder:text-[#2B252590] placeholder:text-[Lato]'
                    placeholder={placeholder ? placeholder : ''}
                    required
                />
            </div>
        </div>
    )
}