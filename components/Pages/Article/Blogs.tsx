import { BigBlogCard } from '@/components/Cards'
import { SmallBlogCard } from '@/components/Cards'
import { RegularTitle } from '@/components/Titles'

interface mainbodyType {
    id_lng: number,
    ds_title: string,
    ds_content: string,
    ds_readtime: string,
}

interface BlogType {
    id_blog: string,
    cd_educator: string,
    ds_state: string,
    dt_upload: Date,
    dt_publish: Date,
    ds_thumbnail: string,
    nm_user: string,
    ds_category: string,
    mainbody: mainbodyType[]
}

interface BlogsProps {
    lngId: number,
    title: string,
    blogs: BlogType[];
}

export default function Blogs({
    lngId,
    title,
    blogs
}: BlogsProps) {
    const getTextFromContent = (text: string) => {
        let cleanedText = text.replace(/<\/[^>]+>/g, '\n') // Replace ending tags with newline
            .replace(/<[^>]+>/g, ''); // Remove all HTML tags
        if (cleanedText === '')
            return 'No Content';
        return cleanedText;
    }

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1225px] mx-[20px]'>
                <RegularTitle lngId={lngId} text={title} />
                <div className='mt-[20px] grid lg:grid-cols-3 gap-[20px] lg:gap-[35px]'>
                    <div className='w-full lg:col-span-2'>
                        <BigBlogCard
                            lngId={
                                blogs[0].mainbody.length == 2
                                    ?
                                    lngId
                                    :
                                    blogs[0].mainbody[0].id_lng
                            }
                            id={blogs[0].id_blog}
                            image={blogs[0].ds_thumbnail}
                            // category={blogs[0].ds_category}
                            category={title}
                            title={
                                blogs[0].mainbody.length == 2
                                    ?
                                    blogs[0].mainbody[lngId].ds_title
                                    :
                                    blogs[0].mainbody[0].ds_title
                            }
                            content={
                                getTextFromContent(
                                    blogs[0].mainbody.length == 2
                                        ?
                                        blogs[0].mainbody[lngId].ds_content
                                        :
                                        blogs[0].mainbody[0].ds_content
                                )
                            }
                            author={blogs[0].nm_user}
                        />
                    </div>
                    <div className='w-full lg:col-span-1'>
                        <div className='grid gap-[20px]'>
                            {
                                blogs.slice(1).map((CardData: BlogType, index: number) => (
                                    <SmallBlogCard
                                        key={CardData.ds_category + index}
                                        id={CardData.id_blog}
                                        image={CardData.ds_thumbnail}
                                        mainbody={CardData.mainbody}
                                        author={CardData.nm_user}
                                        ds_category={CardData.ds_category}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
