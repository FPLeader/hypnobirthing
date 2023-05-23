import { CheckRoundedIcon, SandClockIcon } from '@/assests/Icons'

interface EducatorItemType {
  isPending?: boolean,
  imageUrl: string,
  educatorId: string,
  name: string,
}

export default function EducatorItem({
  isPending = false,
  imageUrl,
  educatorId,
  name,
}: EducatorItemType) {
  return (
    <div
      className={`w-max flex flex-col justify-center items-center ${isPending && 'opacity-70'}`}
    >
      <div className='relative'>
        <img
          draggable='false'
          src={imageUrl === ''
            ?
            '/img/defaultavatar.png'
            :
            `${process.env.FILE_IMAGE_BASE + imageUrl}`
          }
          alt=''
          className='w-[50px] h-[50px] md:w-[64px] md:h-[64px] object-cover rounded-full overflow-hidden'
        />
        <div className='absolute bottom-0 right-[5px]'>
          {
            isPending ?
              <SandClockIcon />
              :
              <CheckRoundedIcon />
          }
        </div>
      </div>
      <a
        href={`/user/${educatorId}`}
        target='_blank'
        rel='noreferrer'
        className='text-[16px] md:text-[18px] capitalize line-clamp-1 underline italic hover:text-Label active:text-dark transition-all duration-300'
      >
        {name}
      </a>
    </div>
  )
}
