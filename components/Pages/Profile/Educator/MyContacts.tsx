import { ContactButton } from '@/components/Buttons'


export default function MyContacts() {
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>My contacts</div>
      <div className='grid md:grid-cols-2 gap-[8px]'>
        <ContactButton Icontype={0} text='786-457-6460' link='' />
        <ContactButton Icontype={1} text='Personal site' link='' />
        <ContactButton Icontype={2} text='Instagram' link='' />
        <ContactButton Icontype={3} text='facebook' link='' />
        <ContactButton Icontype={4} text='twitter' link='' />
      </div>
    </div>
  )
}
