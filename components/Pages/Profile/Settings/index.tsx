import { RegularTitle } from '@/components/Titles'
import { Textarea, CategoryInput } from '@/components/Inputs'
import { CategorySelect } from '@/components/Select'

export default function index() {
    return (
        <div className='pt-[70px] md:pt-[90px] w-full'>
            <div className='w-full flex justify-center mt-[20px] md:mt-[30px] lg:mt-[50px]'>
                <div className='w-full max-w-[1225px] mx-[20px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                    <RegularTitle text='Profile Settings' />
                    <div className='max-w-[864px] text-dark'>
                        <div className='sm:hidden'>
                            <select id='tabs' className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
                                <option>profile Pashut Laledet</option>
                                <option>Log-in and security</option>
                                <option>Upcoming Sessions</option>
                                <option>My articles</option>
                            </select>
                        </div>
                        <ul className='hidden text-[14px] font-medium text-center divide-x divide-beighe rounded-[10px] overflow-hidden border-[2px] border-beighe sm:flex'>
                            <li className='w-full'>
                                <div className='inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all bg-beighe active' aria-current='page'>profile Pashut Laledet</div>
                            </li>
                            <li className='w-full'>
                                <div className='inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all bg-bcg hover:bg-bcg_2'>Log-in and security</div>
                            </li>
                            <li className='w-full'>
                                <div className='inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all bg-bcg hover:bg-bcg_2'>Upcoming Sessions</div>
                            </li>
                            <li className='w-full'>
                                <div className='inline-block select-none cursor-pointer uppercase w-full h-full flex justify-center items-center p-[17.5px] transition-all duration-all bg-bcg hover:bg-bcg_2'>My articles</div>
                            </li>
                        </ul>
                    </div>
                    <div className='grid md:grid-cols-3 gap-[20px] md:gap-[35px]'>
                        <div className='w-full col-span-2 text-dark'>
                            <div className=''>
                                <div className='text-[24px] font-medium'>About you</div>
                                <Textarea
                                    category='About me'
                                    placeholder='To help students learn more about you, your curriculum vitae should include information about your reputation, personal qualities and interests.'
                                />
                                <div className='text-[14px] font-medium'>1200 of 1200 characters (minimum 200)</div>
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
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
