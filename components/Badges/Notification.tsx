
export default function Notification() {
    return (
        <div className='w-[10px] h-[10px] relative flex'>
            <div className='animate-ping absolute inline-flex h-full w-full bg-danger rounded-full opacity-75'></div>
            <div className='bg-danger inline-flex w-[10px] h-[10px] rounded-full'></div>
        </div>
    )
}
