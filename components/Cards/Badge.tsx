interface Badge {
  text: string;
}

export default function Badge({
  text
}: Badge) {
  return (
    <div className='w-max py-[2px] px-[8px] bg-white capitalize text-dark text-[14px] font-medium rounded-[6px]'>
      {text}
    </div>
  )
}
