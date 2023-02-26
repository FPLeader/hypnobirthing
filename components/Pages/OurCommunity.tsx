import { SelectButton, SearchButton } from '../Buttons'
import { CommunityCard } from '../Cards'
import { CommunityCards, CommunityCardType } from '@/services/Constants/CardsData'
import { SelectData1} from '@/services/Constants/SelectOptions'
import { PromoteBlogs, ComingChildBirth } from '../Sections'

export default function OurCommunity() {
    return (
        <>
            <div className='max-w-[1536px] m-auto min-h-screen pt-[70px] md:pt-[90px]'>
                <div className='pt-[50px] relative'>
                    <div className='text-6xl text-dark font-light italic'>
                        Our Community
                    </div>
                    <div className='text-base max-w-[800px] pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='absolute top-[100px] right-0 bg-beighe w-[250px] uppercase text-sm text-dark font-medium flex justify-center py-[17.5px] rounded-full select-none cursor-pointer'>Become a professional</div>
                </div>
                <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                    <div className='flex w-full md:w-6/12 gap-2.5'>
                        <SelectButton category='Category' selectItems={SelectData1}/>
                        <SelectButton category='Area' selectItems={SelectData1}/>
                    </div>
                    <div className='w-full md:w-6/12'>
                        <SearchButton />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between gap-10 pt-10'>
                    {
                        CommunityCards.map((obj: CommunityCardType, index: number) => (
                            <CommunityCard key={index} image={obj.image} name={obj.name} description={obj.description} />
                        ))
                    }
                </div>
                <div className='pt-[140px]'>
                    <PromoteBlogs />
                </div>
            </div>
            <div className='pt-[40px]'>
                <ComingChildBirth />
            </div>
        </>
    )
}