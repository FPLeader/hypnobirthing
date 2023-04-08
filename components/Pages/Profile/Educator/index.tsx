import { useRouter } from 'next/router'
import { useState, useEffect, useLayoutEffect } from 'react'
import { useAppSelector } from '@/services/Hooks'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import { IntroductionSection, AboutMeSection, UpcomingSection, MyAritclesSection, MyContactsSection } from './Sections'
import { PromoteBar, UpcomingClassesBar } from '@/components/Sections'

export default function index() {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { isLogIn } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const lngId: number = i18n.language === 'en' ? 0 : 1;
  const { currentUser } = useAppSelector((state) => state.auth);
  // values
  const [name, setName] = useState<string>('');
  const [personalTitle, setPersonalTitle] = useState<string>('');
  const [avatarImage, setAvatarImage] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [category, setCategory] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [aboutMe, setAboutMe] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isPersonalSite, setIsPersonalSite] = useState<boolean>(false);
  const [isInstagram, setIsInstagram] = useState<boolean>(false);
  const [isFacebook, setIsFacebook] = useState<boolean>(false);
  const [isTwitter, setIsTwitter] = useState<boolean>(false);

  // initalize
  useEffect(() => {
    if (isLogIn === '') {
      router.push('/login');
    }
    setDomLoaded(true);
  }, []);

  useLayoutEffect(() => {
    if (currentUser) {
      setName(currentUser.nm_user);
      setPersonalTitle(currentUser?.ar_personaltitle[lngId]);
      setAvatarImage(currentUser?.ds_avatar);
      setVideoUrl(currentUser?.ds_video);
      setCategory(currentUser.ar_category);
      setSkills(currentUser?.ar_skills);
      setAboutMe(currentUser?.ar_aboutme[lngId]);
      //contact information
      setPhoneNumber(currentUser.ds_phonenumber);
      setIsPersonalSite(!currentUser?.ln_personalsite?.length);
      setIsInstagram(!currentUser?.ln_instagram?.length);
      setIsFacebook(!currentUser?.ln_facebook?.length);
      setIsTwitter(!currentUser?.ln_twitter?.length);
    }
  }, [currentUser]);

  return (
    <>
      <div className='pt-[70px] md:pt-[90px] min-h-screen w-full'>
        {domLoaded && (
          <>
            {isLogIn &&
              <>
                <IntroductionSection
                  name={name}
                  personalTitle={personalTitle}
                  category={category}
                  avatarImage={avatarImage}
                  videoUrl={videoUrl}
                />
                <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[70px]'>
                  <div className='w-full max-w-[1225px] mx-[20px]'>
                    <div className='min-[1260px]:max-w-[805px] lg:max-w-[calc(100vw-460px)] w-full max-md:mt-[820px] max-lg:mt-[240px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[70px]'>
                      <AboutMeSection
                        aboutMe={aboutMe}
                        skills={skills}
                      />
                      <UpcomingSection />
                      <MyAritclesSection />
                      <MyContactsSection
                        phoneNumber={phoneNumber}
                        isPersonalSite={isPersonalSite}
                        isInstagram={isInstagram}
                        isFacebook={isFacebook}
                        isTwitter={isTwitter}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-[20px] md:mt-[70px] lg:mt-[100px]'>
                  <PromoteBar />
                </div>
                <div className='mt-[20px] md:mt-[40px]'>
                  <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
                </div>
              </>
            }
          </>
        )}
      </div>
    </>
  )
}