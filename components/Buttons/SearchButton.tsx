export default function SearchButton() {
    return (
        <div className='flex items-center w-full'>
            <div className='relative w-full relative'>
                <div className='absolute top-2.5 right-2 flex items-center pl-3 pointer-events-none'>
                    <svg aria-hidden='true' className='w-5 h-5 text-deviders' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd'></path></svg>
                </div>
                <input type='text' id='simple-search' className='bg-gray-50 border border-deviders text-gray-900 text-sm rounded-lg block w-full pr-7 p-2.5' placeholder='Search' required />
            </div>
            <div className='h-[46px] w-[138px] flex justify-center ml-2.5 bg-bcg_2 border border-deviders uppercase text-base rounded-[6px] px-2 py-[6px] flex items-center gap-1 cursor-pointer select-none'>
                search
            </div>
        </div>
    )
}
