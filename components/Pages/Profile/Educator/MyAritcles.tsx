import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { SmallBlogCard } from '@/components/Cards'
import { UploadButton } from '@/components/Buttons'
import API from '@/services/API'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

export default function MyAritcles() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);

    interface mainbodyType {
        id_lng: number,
        ds_title: string,
        ds_content: string,
    }

    interface BlogType {
        id_blog: string,
        cd_educator: string,
        ds_state: string,
        dt_upload: Date,
        dt_publish: Date,
        ds_thumbnail: string,
        nm_user: string[],
        ds_category: string,
        mainbody: mainbodyType[]
    }

    // values
    const [domLoaded, setDomLoaded] = useState<number>(0);
    const [liveBlogs, setLiveBlogs] = useState<BlogType[]>([]);

    // initalize
    useEffect(() => {
        // load blogs
        loadBlogs();
    }, []);


    const loadBlogs = () => {
        API.post('blog/getmyblogs', {
            cd_educator: currentUser.cd_educator,
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    console.log(result.data.allBlogs);
                    SetBlogsData(result.data.allBlogs);
                }
            })
            .catch((err) => {
                if (err.request?.response === '')
                    toast.error('Something went wrong.');
                else {
                    try {
                        let errorMessage = JSON.parse(err.request?.response).message;
                        if (errorMessage === 'jwt expired') {
                            setDomLoaded(3);
                        } else
                            setDomLoaded(2);
                    } catch (error) {
                        console.error('Error parsing response:', err.request?.response);
                        setDomLoaded(2);
                    }
                }
            })
    }

    const SetBlogsData = (allBlogs: []) => {
        let _liveBlogs: BlogType[] = [];
        allBlogs.map((blogData: BlogType) => {
            if (blogData.ds_state === 'live')
                _liveBlogs.push(blogData);
        })
        setLiveBlogs(_liveBlogs);
        setDomLoaded(1);
    }

    useEffect(() => {
        if (domLoaded === 2)
            toast.error('please reoload your page');
        else if (domLoaded === 3) {   // jwt expired
            dispatch(logout(router, '/login'));
            toast.error('Your session was expired, Log in again here.');
        }
    }, [domLoaded]);


    return (
        <div className='flex flex-col gap-[16px] text-dark'>
            <div className='text-[24px] lg:text-[28px] font-medium'>My articles ({liveBlogs.length})</div>
            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[35px]'>
                {liveBlogs.map((CardData: BlogType, index: number) => (
                    <SmallBlogCard
                        key={'live' + index}
                        id={CardData.id_blog}
                        image={CardData.ds_thumbnail}
                        mainbody={CardData.mainbody}
                        author={CardData.nm_user}
                        ds_category={CardData.ds_category}
                    />
                ))}
                <div className='w-full min-h-[137px] flex justify-center items-center border border-beighe rounded-[10px]'>
                    <div onClick={() => router.push({ pathname: '/profile/settings', query: { setting: 3 } })}>
                        <UploadButton text='add article' />
                    </div>
                </div>
            </div>
        </div>
    )
}