import { SelectData1 } from '@/services/Constants/SelectOptions'
import { BigBlogCards } from '@/services/Constants/CardsData'
import { CategorySelect } from '@/components/Select'
import { SearchInput } from '@/components/Inputs'
import { SearchButton } from '@/components/Buttons'
import { RegularTitle } from '@/components/Titles'
import { BigBlogCard } from '@/components/Cards'
import { SmallBlogCard } from '@/components/Cards'
import { SmallBlogsData, SmallBlogType } from '@/services/Constants/Sections/BlogData'

export default function OurBlogPosts() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <div className='pt-[50px] relative'>
                    <RegularTitle text='Our Blog Posts' />
                    <div className='text-base max-w-[800px] mt-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                    <div className='w-full flex flex-col md:flex-row md:w-8/12 gap-2.5'>
                        {/* <CategorySelect category='Category' selectItems={SelectData1} />
                        <CategorySelect category='Author' selectItems={SelectData1} />
                        <CategorySelect category='Subject' selectItems={SelectData1} /> */}
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-[10px] items-center md:w-4/12'>
                        <SearchInput />
                        <SearchButton />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 gap-[20px] lg:gap-[35px] mt-[20px] md:mt-[30px] lg:mt-[48px]'>
                    <div className='w-full lg:col-span-2'>
                        <BigBlogCard id={BigBlogCards[0].id} image={BigBlogCards[0].image} title={BigBlogCards[0].title} header={BigBlogCards[0].header} content={BigBlogCards[0].content} author={BigBlogCards[0].author} />
                    </div>
                    <div className='w-full lg:col-span-1'>
                        <div className='h-full grid gap-[20px]'>
                            {/* {SmallBlogsData.map((CardData: SmallBlogType, index: number) => (
                                <SmallBlogCard key={index} id={CardData.id} image={CardData.image} header={CardData.header} content={CardData.content} author={CardData.author} />
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
