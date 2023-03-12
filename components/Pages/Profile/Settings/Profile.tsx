import { Textarea, CategoryInput, IconInput } from '@/components/Inputs'
import { CategorySelect } from '@/components/Select'
import { UploadButton } from '@/components/Buttons'

export default function Profile() {
    const style = {
        Title: 'text-[24px] font-medium',
    }

    return (

        <div className='grid md:grid-cols-3 gap-[20px] md:gap-[35px]'>
            <div className='w-full md:col-span-2 text-dark flex flex-col gap-[20px] md:gap-[30px]'>
                <div className=''>
                    <div className={style.Title}>About you</div>
                    <div className='mt-[12px]'>
                        <Textarea
                            category='About me'
                            placeholder='To help students learn more about you, your curriculum vitae should include information about your reputation, personal qualities and interests.'
                        />
                    </div>
                    <div className='mt-[6px] text-Label text-[14px] font-medium'>
                        1200 of 1200 characters (minimum 200)
                    </div>
                    <div className='mt-[10px] flex flex-col gap-[10px]'>
                        <CategorySelect
                            category='Pashut Laledet Cerification'
                            selectItems={[
                                {
                                    value: 'Educator',
                                    text: 'Educator'
                                },
                                {
                                    value: 'Doula',
                                    text: 'Doula'
                                }
                            ]}
                        />
                        <CategoryInput
                            category='Core competence'
                            placeholder='Modern Applied Psychology & Personal Development'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <div className={style.Title}>My contacts</div>
                    <div className='flex flex-col gap-[6px]'>
                        <IconInput
                            IconType={0}
                            placeholder='https://'
                        />
                        <IconInput
                            IconType={1}
                            placeholder='https://www.instagram.com/'
                        />
                        <IconInput
                            IconType={2}
                            placeholder='https://www.facebook.com/'
                        />
                        <IconInput
                            IconType={3}
                            placeholder='https://www.twitter.com/'
                        />
                    </div>
                </div>
                <div className='hidden md:block'>
                    <UploadButton text='Save changes' />
                </div>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                <div className='flex flex-col gap-[12px]'>
                    <div className={style.Title}>Preview image</div>
                    <div>
                        <div className='border border-beighe bg-white rounded-[10px] lg:rounded-[15px] w-full max-w-[385px] min-w-[233px]' >
                            <div className='aspect-w-1 aspect-h-1'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <UploadButton text='add photo' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[6px] text-Label text-[18px] font-medium'>
                            We recommend using an image of at least 385 x 385 pixels in PNG or GIF format. Animated images cannot be uploaded. The file size should not exceed 4 MB.
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <div className={style.Title}>Preview video of me</div>
                    <div className='py-[44px] border border-beighe bg-white rounded-[10px] lg:rounded-[15px] w-full max-w-[385px]'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='grid gap-[15px]'>
                                <UploadButton text='Upload video' />
                                <UploadButton text='Video link' style='full' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[6px] text-Label text-[18px] font-medium'>
                        Insert a video (no more than 50 MB) or link to it (e.g. YouTube) that describes you as a professional.
                    </div>
                </div>
                <div className='block md:hidden'>
                    <UploadButton text='Save changes' />
                </div>
            </div>
        </div>
    )
}
