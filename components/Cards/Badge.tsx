interface Badge {
  text: string;
  type?: number,
}

export default function Badge({
  text,
  type = 0
}: Badge) {
  return (
    <div className={`w-max py-[2px] px-[8px] ${type === 0 ? 'bg-white text-dark' : 'bg-bcg_2 text-dark'} capitalize text-[14px] font-medium rounded-[6px]`}>
      {text}
    </div>
  )
}
