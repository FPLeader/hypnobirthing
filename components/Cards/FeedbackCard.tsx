import ReactStars from 'next-react-stars'

interface FeedbackCardProps {
  rating: number,
  title: string,
  name: string
}

export default function FeedbackCard({
  rating,
  title,
  name
}: FeedbackCardProps) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <ReactStars
        count={5}
        size={24}
        edit={false}
        half={true}
        color1={'#DFD3BC'} />
      <div className='mt-[15px] flex flex-col items-center gap-y-[10px] text-dark text-center'>
        <div className='text-[20px]'>{title}</div>
        <div className='w-0 h-[15px] border-r-[1px] border-dark'></div>
        <div className='font-medium text-[16px]'>{name}</div>
      </div>
    </div>
  )
}