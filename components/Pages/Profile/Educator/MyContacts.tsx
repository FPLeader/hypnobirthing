import { ContactCard } from '@/components/Cards'
import { ContactButton } from '@/components/Buttons';

interface SectionProps {
  phoneNumber: string,
  personalSite: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export default function MyContacts({
  phoneNumber,
  personalSite,
  instagram,
  facebook,
  twitter
}: SectionProps) {
  return (
    <div className='flex flex-col gap-[16px] text-dark'>
      <div className='text-[24px] lg:text-[28px] font-medium'>My contacts</div>
      <div className='text-Label text-[16px] lg:text-[18px]'>Add your contact info below</div>
      <div className='grid md:grid-cols-2 gap-[8px]'>
        <ContactCard Icontype={0} text={phoneNumber} />
        {personalSite.length === 0 ?
          <ContactCard Icontype={1} text='Personal site' disabled={true} />
          :
          <ContactButton Icontype={1} text='Personal site' link={personalSite} />
        }
        {instagram.length === 0 ?
          <ContactCard Icontype={2} text='Instagram' disabled={true} />
          :
          <ContactButton Icontype={2} text='Instagram' link={instagram} />
        }
        {facebook.length === 0 ?
          <ContactCard Icontype={3} text='facebook' disabled={true} />
          :
          <ContactButton Icontype={3} text='facebook' link={facebook} />
        }
        {twitter.length === 0 ?
          <ContactCard Icontype={4} text='twitter' disabled={true} />
          :
          <ContactButton Icontype={4} text='twitter' link={twitter} />
        }
      </div>
    </div>
  )
}
