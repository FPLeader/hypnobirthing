import { ContactCard } from '@/components/Cards'
import { ContactButton } from '@/components/Buttons';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[16px] text-dark'>
      <div className='text-[24px] lg:text-[28px] font-medium'>
        {t('My contacts')}
      </div>
      <div className='text-Label text-[16px] lg:text-[18px]'>
        {t('Add your contact info below')}
      </div>
      <div dir='ltr' className='grid md:grid-cols-2 gap-[8px]'>
        <ContactCard Icontype={0} text={phoneNumber} />
        {personalSite.length !== 0 &&
          <ContactButton Icontype={1} text={t('Personal site')} link={personalSite} />
        }
        {instagram.length !== 0 &&
          <ContactButton Icontype={2} text='Instagram' link={instagram} />
        }
        {facebook.length !== 0 &&
          <ContactButton Icontype={3} text='facebook' link={facebook} />
        }
        {twitter.length !== 0 &&
          <ContactButton Icontype={4} text='twitter' link={twitter} />
        }
      </div>
    </div>
  )
}
