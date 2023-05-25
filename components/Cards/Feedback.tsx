import { useState, useEffect } from 'react'
import { StarIcon } from '@/assests/Icons'

interface FeedbackCardProps {
  rating: number,
  content: string,
  name: string,
}

export default function FeedbackCard({
  rating = 0,
  content,
  name,
}: FeedbackCardProps) {
  const [numberEmptyStar, setNumberEmptyStar] = useState<number>(0);

  useEffect(() => {
    setNumberEmptyStar(5 - rating);
  }, [rating])

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex gap-[3px]'>
        {Array.from({ length: rating }, (_, index: number) => (
          <StarIcon key={'star' + index} />
        ))}
        {/* {Array.from({ length: numberEmptyStar }, (_, index: number) => (
          <StarIcon />
        ))} */}
      </div>
      <div className='mt-[15px] flex flex-col items-center gap-[10px] text-dark text-center'>
        <div className='whitespace-pre-line line-clamp-6 text-[18px] lg:text-[20px]'>
          {content}
        </div>
        <div className='w-0 h-[15px] border-r-[1px] border-dark'></div>
        <div className='font-medium text-[14px] lg:text-[16px]'>
          {name}
        </div>
      </div>
    </div>
  )
}