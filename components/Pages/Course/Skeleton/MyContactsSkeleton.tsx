import {
  ContactButtonSkeleton,
} from '@/components/Skeletons'

export default function MyContactsSkeleton() {
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        My contacts
      </div>
      <div dir={'ltr'} className='grid md:grid-cols-2 gap-[8px]'>
        {Array.from({ length: 5 }, (_, index: number) => (
          <ContactButtonSkeleton
            key={`sk-contact-${index}`}
          />
        ))}
      </div>
    </div>
  )
}