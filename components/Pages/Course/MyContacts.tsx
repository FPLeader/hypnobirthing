import { ContactButton } from '@/components/Buttons'

interface SectionProps {
  ds_phonenumber: string,
  ln_personalsite: string,
  ln_instagram: string,
  ln_facebook: string,
  ln_twitter: string
}

export default function MyContacts({
  ds_phonenumber,
  ln_personalsite,
  ln_instagram,
  ln_facebook,
  ln_twitter
}: SectionProps) {
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        My contacts
      </div>
      <div dir={'ltr'} className='grid md:grid-cols-2 gap-[8px]'>
        <ContactButton Icontype={0} text={ds_phonenumber} link='' />
        {ln_personalsite?.length !== 0 &&
          <ContactButton Icontype={1} text='Personal site' link={ln_personalsite} />
        }
        {ln_instagram?.length !== 0 &&
          <ContactButton Icontype={2} text='ln_instagram' link={ln_instagram} />
        }
        {ln_facebook?.length !== 0 &&
          <ContactButton Icontype={3} text='facebook' link={ln_facebook} />
        }
        {ln_twitter?.length !== 0 &&
          <ContactButton Icontype={4} text='twitter' link={ln_twitter} />
        }
      </div>
    </div>
  )
}
