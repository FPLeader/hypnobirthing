import { SearchButton, RegularButton } from '../Buttons'
import { CommunityCard } from '../Cards'
import { CategorySelect } from '../Select'
import { CommunityCards, CommunityCardType } from '@/services/Constants/CardsData'
import { SelectData1 } from '@/services/Constants/SelectOptions'
import { PromoteBar, UpcomingClassesBar } from '../Sections'
import { RegularTitle } from '../Titles'
import { SearchInput } from '../Inputs'

export default function OurCommunity() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='max-w-[1225px] mx-[20px] min-h-screen pt-[70px] md:pt-[90px]'>
                    <div className='mt-[50px] md:flex md:justify-between md:items-end'>
                        <RegularTitle text='Our Community' />
                        <div className='hidden md:block'>
                            <RegularButton text='Become a professional' />
                        </div>
                    </div>
                    <div className='text-dark text-[16px] md:max-w-[800px] text-center md:text-left mt-[10px] md:mt-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='mt-[20px] block md:hidden'>
                        <RegularButton text='Become a professional' />
                    </div>
                    <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                        <div className='flex w-full md:w-6/12 gap-2.5'>
                            <CategorySelect category='Category' selectItems={SelectData1} />
                            <CategorySelect category='Area' selectItems={SelectData1} />
                        </div>
                        <div className='w-full flex items-center gap-[10px] md:w-6/12'>
                            <SearchInput />
                            <SearchButton />
                        </div>
                    </div>
                    <div className='flex flex-col md:grid md:grid-cols-3 gap-[20px] md:gap-[35px] pt-10'>
                        {
                            CommunityCards.map((obj: CommunityCardType, index: number) => (
                                <CommunityCard key={index} image={obj.image} name={obj.name} description={obj.description} />
                            ))
                        }
                    </div>
                    <div className='mt-[20px] md:mt-[80px] lg:mt-[120px]'>
                        <PromoteBar />
                    </div>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
                <UpcomingClassesBar title='Upcoming Childbirth Classes' buttonText='Learn More' link='\upcomingcourse' />
            </div>
        </>
    )
}