import { SelectButton, SearchButton } from '../ButtonComponents'
import { BlogCard } from '../CardComponents'
import { BlogCards, BlogCardType } from '../constants/CardsData'
import { SelectData1} from '../constants/SelectOptions'
import { PromoteBlogs, ComingChildBirth } from '../Sections'

export default function Article() {
    return (
        <>
            <div className='max-w-[1536px] m-auto min-h-screen pt-[90px]'>
                <div className='pt-[50px] relative'>
                    <div className='text-6xl font-light text-dark italic'>
                        Our Blog Posts
                    </div>
                    <div className='text-base max-w-[800px] pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className='pt-[60px] flex flex-col md:flex-row gap-2.5 items-end'>
                    <div className='flex w-full md:w-9/12 gap-2.5'>
                        <SelectButton category='Category' selectItems={SelectData1} />
                        <SelectButton category='Author' selectItems={SelectData1} />
                        <SelectButton category='Subject' selectItems={SelectData1} />
                    </div>
                    <div className='w-full md:w-3/12'>
                        <SearchButton />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between gap-10 pt-10'>
                    {
                        BlogCards.map((obj: BlogCardType, index: number) => (
                            <BlogCard key={index} id={obj.id} image={obj.image} title={obj.title} header={obj.header} content={obj.content} author={obj.author} />
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