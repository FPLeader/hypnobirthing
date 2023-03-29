import { ContactCard } from '@/components/Cards'

interface SectionProps {
  phoneNumber: string,
  isPersonalSite: boolean;
  isInstagram: boolean;
  isFacebook: boolean;
  isTwitter: boolean;
}

export default function MyContacts({
  phoneNumber,
  isPersonalSite,
  isInstagram,
  isFacebook,
  isTwitter
}: SectionProps) {
  return (
    <div className='flex flex-col gap-[16px] text-dark'>
      <div className='text-[24px] lg:text-[28px] font-medium'>My contacts</div>
      <div className='text-Label text-[16px] lg:text-[18px]'>Add your contact info below</div>
      <div className='grid md:grid-cols-2 gap-[8px]'>
        <ContactCard Icontype={0} text={phoneNumber}/>
        <ContactCard Icontype={1} text='Personal site' disabled={isPersonalSite} />
        <ContactCard Icontype={2} text='Instagram' disabled={isInstagram} />
        <ContactCard Icontype={3} text='facebook' disabled={isFacebook} />
        <ContactCard Icontype={4} text='twitter' disabled={isTwitter} />
      </div>
    </div>
  )
}
