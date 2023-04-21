import { Fragment, useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/assests/Icons'
import { ModalButton } from '../Buttons'
import { CategoryInput } from '../Inputs'
import { CategorySelect } from '../Select'
import API from '@/services/API'
import useWindowSize from '@/services/Hooks/useWindowSize'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

import dynamic from 'next/dynamic'
const QuillNoSSRWrapper = dynamic(
    () => import('./RenderQuillReact'),
    { ssr: false, loading: () => <p>Loading ...</p> }
)

interface AddArticleProps {
    isOpen: boolean,
    // setIsOpen: Dispatch<SetStateAction<boolean>>,
    // openModal: () => void,
    closeModal: () => void,
    numberOfTotal: number, /// number of total blogs
    loadBlogs: () => void
}

export default function AddArticle({
    isOpen,
    // setIsOpen,
    // openModal,
    closeModal,
    numberOfTotal = 0,
    loadBlogs
}: AddArticleProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { width } = useWindowSize();
    const { currentUser } = useAppSelector((state) => state.auth);

    // values
    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
    const languageOptions = [
        { id: 0, value: 'I only know English' },
        { id: 1, value: 'I only know Hebrew' },
        { id: 2, value: 'I know English and Hebrew both' },
    ]
    const [selectedLangauge, setSelectedLanguage] = useState(languageOptions[0]);
    const categoryOptions = [
        { id: 0, value: 'Article' },
        { id: 1, value: 'Birth Stories' },
        { id: 2, value: 'Recipe' },
    ]
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
    // for English
    const [titleEn, setTitleEn] = useState<string>('');
    const [readTimeEn, setReadTimeEn] = useState<string>('');
    // for quill
    const [contentEn, setContentEn] = useState('');

    // for Hebrew
    const [titleHe, setTitleHe] = useState<string>('');
    const [readTimeHe, setReadTimeHe] = useState<string>('');
    // for quill
    const [contentHe, setContentHe] = useState('');

    // image thumbnail upload
    const thumbnailBtn = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [image, setImage] = useState<string>('');

    // Blog image urls
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    // initalize
    useEffect(() => {
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        let MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
        let MIN_IMAGE_W_SIZE = 780; // 780 px
        let MIN_IMAGE_H_SIZE = 430; // 430 px

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                toast.error('File size too large!\nPlease select an image less than 4MB.');
            } else {
                const img = new Image();
                img.src = URL.createObjectURL(file);
                img.onload = () => {
                    if (img.width < MIN_IMAGE_W_SIZE || img.height < MIN_IMAGE_H_SIZE) {
                        toast.error(`Image must be at least ${MIN_IMAGE_W_SIZE} x ${MIN_IMAGE_H_SIZE} pixels`);
                    } else {
                        setSelectedImage(file);
                    }
                };
            }
        }
    }
    // thumbnail url generate
    useEffect(() => {
        if (selectedImage)
            setImage(URL.createObjectURL(selectedImage));
    }, [selectedImage]);

    // Quill handle change
    const handleChangeEn = (content: any, delta: any, source: any, editor: any) => {
        setContentEn(content);
        // console.log(delta, source, editor);
        // console.log(editor.getContents());
    }
    // Quill handle change
    const handleChangeHe = (content: any, delta: any, source: any, editor: any) => {
        setContentHe(content);
        // console.log(delta, source, editor);
        // console.log(editor.getContents());
    }

    const isPublish = () => {
        if (selectedLangauge.id === 0)
            return titleEn !== '' && selectedImage !== null && contentEn !== '' && readTimeEn !== '';
        else if (selectedLangauge.id === 1)
            return titleHe !== '' && selectedImage !== null && contentHe !== '' && readTimeHe !== '';
        else
            return titleEn !== '' && selectedImage !== null && contentEn !== '' && readTimeEn !== '' && titleHe !== '' && contentHe !== '' && readTimeHe !== '';
    }

    const isButtonDisabled = () => {
        if (selectedLangauge.id === 0)
            return !(titleEn !== '' || selectedImage !== null || contentEn !== '' || readTimeEn !== '');
        else if (selectedLangauge.id === 1)
            return !(titleHe !== '' || selectedImage !== null || contentHe !== '' || readTimeHe !== '');
        else
            return !(titleEn !== '' || selectedImage !== null || contentEn !== '' || readTimeEn !== '' || titleHe !== '' || selectedImage !== null || contentHe !== '' || readTimeHe !== '');
    }

    // upload blog
    const handlePublish = () => {
        if (!loadingOpen) {
            // setLoadingOpen(true);
            let formData = new FormData();
            let id_blog = currentUser.cd_educator + '_' + (numberOfTotal + 1).toString();
            if (selectedImage !== null) {
                let parts = selectedImage.name.split('.');
                let ext = parts[parts.length - 1];
                let newFileName = id_blog + '_thumb' + '.' + ext;
                let _selectedImage = new File([selectedImage], newFileName, { type: selectedImage.type, lastModified: selectedImage.lastModified });
                // console.log(_selectedImage);
                formData.append('image', _selectedImage as File);
            } else {
                formData.append('image', selectedImage as unknown as File);
            }
            formData.append('id_blog', id_blog);
            formData.append('cd_educator', currentUser.cd_educator);
            formData.append('nm_user', currentUser.nm_user);
            formData.append('ds_category', selectedCategory.value);
            if (isPublish())
                formData.append('ds_state', 'underreview');
            else
                formData.append('ds_state', 'draft');   /// draft or underreview or live
            let blog_en = {
                id_lng: 0,
                ds_title: titleEn,
                ds_content: contentEn,
                ds_readtime: readTimeEn,
            }
            let blog_he = {
                id_lng: 1,
                ds_title: titleHe,
                ds_content: contentHe,
                ds_readtime: readTimeHe,
            }
            // console.log('contentEn', contentEn);
            // console.log('contentHe', contentHe);
            if (selectedLangauge.id === 0) // English
                formData.append('mainbody', JSON.stringify(blog_en));
            else if (selectedLangauge.id === 1) // Hebrew
                formData.append('mainbody', JSON.stringify(blog_he));
            else {
                let blog_total = [
                    blog_en,
                    blog_he
                ];
                formData.append('mainbody', JSON.stringify(blog_total));
            }
            // delete unnecessary image files in Upload folder in backend
            let _ds_images: string[] = [];
            if (selectedLangauge.id === 0) { // in case of English
                imageUrls.map((imageUrl: string) => {
                    // search title En
                    if (!contentEn.includes(imageUrl))
                        _ds_images.push(imageUrl);
                })
            } else if (selectedLangauge.id === 1) { // in case of Hebrew
                imageUrls.map((imageUrl: string) => {
                    // search title He
                    if (!contentHe.includes(imageUrl))
                        _ds_images.push(imageUrl);
                })
            } else if (selectedLangauge.id === 2) { // in case of En/He option
                imageUrls.map((imageUrl: string) => {
                    // search title in En or He
                    if (!contentEn.includes(imageUrl) && !contentHe.includes(imageUrl))
                        _ds_images.push(imageUrl);
                })
            }
            if (_ds_images.length !== 0) {
                let formData = new FormData();
                formData.append('cd_educator', currentUser.cd_educator);
                formData.append('ds_images', JSON.stringify(_ds_images));
                API.post('blog/deletecontentimages', formData, {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                })
                    .then((result: any) => {
                        if (result.data.status === 'success') {
                            console.log('successfully deleted file', _ds_images);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }

            API.post('blog/uploadblog', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
                .then((result: any) => {
                    if (result.data.status === 'success') {
                        toast.success('Uploaded blog successfully.');
                        setLoadingOpen(false);
                        // English
                        setTitleEn('');
                        setReadTimeEn('');
                        setContentEn('');
                        //Hebrew
                        setTitleHe('');
                        setReadTimeHe('');
                        setContentHe('');
                        // thumbnail
                        setSelectedImage(null);
                        setImage('');
                        // category
                        setSelectedCategory(categoryOptions[0]);
                        // image urls
                        setImageUrls([]);
                        // close modal
                        closeModal();
                        // important load blog again
                        loadBlogs();
                    }
                })
                .catch((err) => {
                    if (err.request?.response === '')
                        toast.error('Something went wrong.');
                    else {
                        try {
                            let errorMessage = JSON.parse(err.request?.response).message;
                            if (errorMessage === 'jwt expired') {
                                dispatch(logout(router, '/login'));
                                toast.error('Your session was expired, Log in again here.');
                            } else
                                toast.error(errorMessage);
                        } catch (error) {
                            console.error('Error parsing response:', err.request?.response);
                            toast.error('Something went wrong.');
                        }
                    }
                    setLoadingOpen(false);
                })
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-[6000]' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-dark bg-opacity-90' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[1000px] transform overflow-hidden rounded-[20px] bg-bcg_2 p-[15px] md:p-[20px] lg:p-[30px] text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    className='text-[20px] lg:text-[28px] font-medium leading-normal text-dark pr-[35px]'
                                >
                                    Adding an article
                                </Dialog.Title>
                                <div className='absolute top-[10px] right-[10px]'>
                                    <button
                                        className='bg-[#DFD3BC80] hover:bg-beighe active:bg-bcg_2 p-[10px] rounded-[10px] focus:outline-none transition-all duration-300'
                                        onClick={closeModal}
                                    >
                                        {width >= 768 ? <CloseIcon /> : <CloseIcon width={15} height={15} />}
                                    </button>
                                </div>
                                <div className='mt-[20px] space-y-[10px]'>
                                    <CategorySelect
                                        category='Language'
                                        selectItems={languageOptions}
                                        inputValue={selectedLangauge}
                                        handleChange={setSelectedLanguage}
                                    />
                                    {selectedLangauge.id === 0 //English
                                        ?
                                        <>
                                            <CategoryInput
                                                category='Title'
                                                placeholder='Enter Title text here'
                                                inputValue={titleEn}
                                                handleChange={setTitleEn}
                                            />

                                            <CategorySelect
                                                category='Category'
                                                selectItems={categoryOptions}
                                                inputValue={selectedCategory}
                                                handleChange={setSelectedCategory}
                                            />

                                            <div className='w-full p-[10px] md:p-[20px] bg-white rounded-[10px] md:rounded-[20px] font-[lato]'>
                                                {image === '' ?
                                                    <>
                                                        <div className='mt-[24px] text-center text-[14px] text-dark leading-4'>
                                                            Minimum size: 780 x 430 px
                                                            <br /><br />
                                                            Weight: 30kb - 10 Mb
                                                            <br /><br />
                                                            Format: jpg, jpeg, png
                                                        </div>
                                                        <div className='mt-[41px] flex justify-center'>
                                                            <div>
                                                                <input
                                                                    accept='.jpg, .jpeg, .png'
                                                                    className='hidden'
                                                                    id='input-image-file'
                                                                    type='file'
                                                                    ref={thumbnailBtn}
                                                                    onChange={handleImageUpload}
                                                                />
                                                                <div
                                                                    className='w-max'
                                                                    onClick={
                                                                        () => { thumbnailBtn.current?.click() }
                                                                    }
                                                                >
                                                                    <ModalButton text='add thumbnail' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[25px] text-center text-[14px] text-Label font-semibold leading-4'>
                                                            Checking the cover before uploading
                                                            <br /><br />
                                                            A good and selling cover contains: a thematic image, a clear, unblurred image,no writing on the image
                                                            <br /><br />
                                                            The article may be returned for revision if the cover: bright &ldquo;acid&ldquo; colours, &ldquo;hypnotic&ldquo; backgrounds, any 18+ images (alcohol, sex, smoking, weapons, violence etc.), contact details and contact requests (including social media logins), watermarks
                                                        </div>
                                                    </>
                                                    :
                                                    <div className='relative'>
                                                        <img
                                                            draggable='false'
                                                            src={image}
                                                            alt='Edit Thumbnail'
                                                            className='w-full min-h-[200px] max-h-[400px] object-cover bg-white'
                                                        />
                                                        <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                                                            <div>
                                                                <input
                                                                    accept='image/*'
                                                                    className='hidden'
                                                                    id='input-image-file'
                                                                    type='file'
                                                                    ref={thumbnailBtn}
                                                                    onChange={handleImageUpload}
                                                                />
                                                                <div
                                                                    className='w-max'
                                                                    onClick={
                                                                        () => { thumbnailBtn.current?.click() }
                                                                    }
                                                                >
                                                                    <ModalButton text='add thumbnail' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>

                                            <div className='space-y-[6px]'>
                                                <label className='text-[14px] text-dark'>
                                                    Main content
                                                </label>
                                                <div>
                                                    <QuillNoSSRWrapper
                                                        theme='snow'
                                                        value={contentEn}
                                                        handleChange={handleChangeEn}
                                                        placeholder={'Start typing!'}
                                                        style={{ background: 'white', fontFamily: 'lato' }}
                                                        imageUrls={imageUrls}
                                                        setImageUrls={setImageUrls}
                                                    />
                                                </div>
                                            </div>

                                            <CategoryInput
                                                category='Enter read time'
                                                placeholder='7 min'
                                                inputValue={readTimeEn}
                                                handleChange={setReadTimeEn}
                                            />
                                        </>
                                        : selectedLangauge.id === 1 //Hebrew
                                            ?
                                            <>
                                                <CategoryInput
                                                    lngId={1}
                                                    category='כותרת'
                                                    placeholder='הזן טקסט כותרת כאן'
                                                    inputValue={titleHe}
                                                    handleChange={setTitleHe}
                                                />

                                                <CategorySelect
                                                    category='קטגוריה'
                                                    selectItems={categoryOptions}
                                                    inputValue={selectedCategory}
                                                    handleChange={setSelectedCategory}
                                                />

                                                <div className='w-full p-[10px] md:p-[20px] bg-white rounded-[10px] md:rounded-[20px] font-[lato]'>
                                                    {image === '' ?
                                                        <>
                                                            <div className='mt-[24px] text-center text-[14px] text-dark leading-4'>
                                                                Minimum size: 780 x 430 px
                                                                <br /><br />
                                                                Weight: 30kb - 10 Mb
                                                                <br /><br />
                                                                Format: jpg, jpeg, png
                                                            </div>
                                                            <div className='mt-[41px] flex justify-center'>
                                                                <div>
                                                                    <input
                                                                        accept='.jpg, .jpeg, .png'
                                                                        className='hidden'
                                                                        id='input-image-file'
                                                                        type='file'
                                                                        ref={thumbnailBtn}
                                                                        onChange={handleImageUpload}
                                                                    />
                                                                    <div
                                                                        className='w-max'
                                                                        onClick={
                                                                            () => { thumbnailBtn.current?.click() }
                                                                        }
                                                                    >
                                                                        <ModalButton text='add thumbnail' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mt-[25px] text-center text-[14px] text-Label font-semibold leading-4'>
                                                                Checking the cover before uploading
                                                                <br /><br />
                                                                A good and selling cover contains: a thematic image, a clear, unblurred image,no writing on the image
                                                                <br /><br />
                                                                The article may be returned for revision if the cover: bright &ldquo;acid&ldquo; colours, &ldquo;hypnotic&ldquo; backgrounds, any 18+ images (alcohol, sex, smoking, weapons, violence etc.), contact details and contact requests (including social media logins), watermarks
                                                            </div>
                                                        </>
                                                        :
                                                        <div className='relative'>
                                                            <img
                                                                draggable='false'
                                                                src={image}
                                                                alt='Edit Thumbnail'
                                                                className='w-full min-h-[200px] max-h-[400px] object-cover bg-white'
                                                            />
                                                            <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                                                                <div>
                                                                    <input
                                                                        accept='image/*'
                                                                        className='hidden'
                                                                        id='input-image-file'
                                                                        type='file'
                                                                        ref={thumbnailBtn}
                                                                        onChange={handleImageUpload}
                                                                    />
                                                                    <div
                                                                        className='w-max'
                                                                        onClick={
                                                                            () => { thumbnailBtn.current?.click() }
                                                                        }
                                                                    >
                                                                        <ModalButton text='add thumbnail' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>

                                                <div className='space-y-[6px]'>
                                                    <label className='text-[14px] text-dark text-right'>תוכן עיקרי</label>
                                                    <div>
                                                        <QuillNoSSRWrapper
                                                            theme='snow'
                                                            value={contentHe}
                                                            handleChange={handleChangeHe}
                                                            placeholder='תתחיל להקליד!'
                                                            style={{ background: 'white', fontFamily: 'lato' }}
                                                            imageUrls={imageUrls}
                                                            setImageUrls={setImageUrls}
                                                        />
                                                    </div>
                                                </div>

                                                <CategoryInput
                                                    category='הזן זמן קריאה'
                                                    placeholder='7 דקות'
                                                    inputValue={readTimeHe}
                                                    handleChange={setReadTimeHe}
                                                />
                                            </>
                                            :
                                            <>
                                                {/* for English */}
                                                <div className='space-y-[6px]'>
                                                    <label className='text-[14px] text-dark'>Title (English)</label>
                                                    <CategoryInput
                                                        category=''
                                                        placeholder='Enter Title text here'
                                                        inputValue={titleEn}
                                                        handleChange={setTitleEn}
                                                    />
                                                </div>

                                                {/* for Hebrew */}
                                                <CategoryInput
                                                    lngId={1}
                                                    category='כותרת'
                                                    placeholder='הזן טקסט כותרת כאן'
                                                    inputValue={titleHe}
                                                    handleChange={setTitleHe}
                                                />

                                                <CategorySelect
                                                    category='Category'
                                                    selectItems={categoryOptions}
                                                    inputValue={selectedCategory}
                                                    handleChange={setSelectedCategory}
                                                />

                                                <div className='w-full p-[10px] md:p-[20px] bg-white rounded-[10px] md:rounded-[20px] font-[lato]'>
                                                    {image === '' ?
                                                        <>
                                                            <div className='mt-[24px] text-center text-[14px] text-dark leading-4'>
                                                                Minimum size: 780 x 430 px
                                                                <br /><br />
                                                                Weight: 30kb - 10 Mb
                                                                <br /><br />
                                                                Format: jpg, jpeg, png
                                                            </div>
                                                            <div className='mt-[41px] flex justify-center'>
                                                                <div>
                                                                    <input
                                                                        accept='.jpg, .jpeg, .png'
                                                                        className='hidden'
                                                                        id='input-image-file'
                                                                        type='file'
                                                                        ref={thumbnailBtn}
                                                                        onChange={handleImageUpload}
                                                                    />
                                                                    <div
                                                                        className='w-max'
                                                                        onClick={
                                                                            () => { thumbnailBtn.current?.click() }
                                                                        }
                                                                    >
                                                                        <ModalButton text='add thumbnail' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mt-[25px] text-center text-[14px] text-Label font-semibold leading-4'>
                                                                Checking the cover before uploading
                                                                <br /><br />
                                                                A good and selling cover contains: a thematic image, a clear, unblurred image,no writing on the image
                                                                <br /><br />
                                                                The article may be returned for revision if the cover: bright &ldquo;acid&ldquo; colours, &ldquo;hypnotic&ldquo; backgrounds, any 18+ images (alcohol, sex, smoking, weapons, violence etc.), contact details and contact requests (including social media logins), watermarks
                                                            </div>
                                                        </>
                                                        :
                                                        <div className='relative'>
                                                            <img
                                                                draggable='false'
                                                                src={image}
                                                                alt='Edit Thumbnail'
                                                                className='w-full min-h-[200px] max-h-[400px] object-cover bg-white'
                                                            />
                                                            <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                                                                <div>
                                                                    <input
                                                                        accept='image/*'
                                                                        className='hidden'
                                                                        id='input-image-file'
                                                                        type='file'
                                                                        ref={thumbnailBtn}
                                                                        onChange={handleImageUpload}
                                                                    />
                                                                    <div
                                                                        className='w-max'
                                                                        onClick={
                                                                            () => { thumbnailBtn.current?.click() }
                                                                        }
                                                                    >
                                                                        <ModalButton text='add thumbnail' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>

                                                {/* for English */}

                                                <div className='space-y-[6px]'>
                                                    <label className='text-[14px] text-dark'>Main content (English)</label>
                                                    <div>
                                                        <QuillNoSSRWrapper
                                                            theme='snow'
                                                            value={contentEn}
                                                            handleChange={handleChangeEn}
                                                            placeholder='Start typing!'
                                                            style={{ background: 'white', fontFamily: 'lato' }}
                                                            imageUrls={imageUrls}
                                                            setImageUrls={setImageUrls}
                                                        />
                                                    </div>
                                                </div>

                                                {/* for Hebrew */}

                                                <div className='space-y-[6px]'>
                                                    <label className='text-[14px] text-dark text-right'>תוכן עיקרי (עברית)</label>
                                                    <div>
                                                        <QuillNoSSRWrapper
                                                            theme='snow'
                                                            value={contentHe}
                                                            handleChange={handleChangeHe}
                                                            placeholder='תתחיל להקליד!'
                                                            style={{ background: 'white', fontFamily: 'lato' }}
                                                            imageUrls={imageUrls}
                                                            setImageUrls={setImageUrls}
                                                        />
                                                    </div>
                                                </div>

                                                <CategoryInput
                                                    category='Enter read time (English)'
                                                    placeholder='7 min'
                                                    inputValue={readTimeEn}
                                                    handleChange={setReadTimeEn}
                                                />
                                                <CategoryInput
                                                    lngId={1}
                                                    category='הזן זמן קריאה (עברית)'
                                                    placeholder='7 דקות'
                                                    inputValue={readTimeHe}
                                                    handleChange={setReadTimeHe}
                                                />
                                            </>
                                    }

                                </div>

                                <div className='mt-[20px]'>
                                    <button
                                        className='flex items-center justify-center gap-[5px] md:gap-[10px] whitespace-nowrap w-full whitespace-nowrap md:w-max h-max text-center px-[38px] py-[12.5px] lg:py-[17.5px] text-dark text-[14px] font-medium uppercase bg-beighe hover:bg-bhover active:bg-beighe disabled:bg-disabled disabled:cursor-not-allowed rounded-[500px] select-none cursor-pointer transition-all duration-300'
                                        onClick={handlePublish}
                                        disabled={isButtonDisabled()}
                                    >
                                        {loadingOpen && <svg aria-hidden='true' className='w-[25px] h-[25px] text-gray-200 animate-spin fill-dark' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                                        </svg>}
                                        {isPublish() ? 'publish' : 'save as draft'}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}