import { Banner, PromoteBlogs, ComingChildBirth } from '@/components/Sections'

export default function Contact() {
    return (
        <>
            <Banner title='Contact Us' textStyle='center' />
            <div className='max-w-[1536px] m-auto'>
                <div className='pt-[97px]'>
                    <PromoteBlogs />
                </div>
            </div>
            <div className='pt-[40px]'>
                <ComingChildBirth />
            </div>
        </>
    )
}
