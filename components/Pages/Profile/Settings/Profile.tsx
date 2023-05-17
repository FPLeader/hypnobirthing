import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import i18n from '@/services/i18n'
import { useTranslation } from 'react-i18next'
import { MultiSelect } from 'react-multi-select-component'
import ReactPlayer from 'react-player'
import { setUser } from '@/services/Actions/Auth.action'
import API from '@/services/API'
import { SkillSetEn, SkillSetHe, TypeOptions } from '@/services/Constants/SelectOptions'
import { Textarea, CategoryRuleInput, IconInput } from '@/components/Inputs'
import { CategoryCheckbox } from '@/components/Checkbox'
import { CategorySelect } from '@/components/Select'
import { UploadButton } from '@/components/Buttons'
import { YouTubeInputModal } from '@/components/Modals'
import { LanguageOptions } from '@/services/Constants/SelectOptions'
import { useAppDispatch, useAppSelector } from '@/services/Hooks'
import { logout } from '@/services/Actions/Auth.action'

export default function Profile() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const style = {
        Title: 'text-[24px] font-medium',
    }

    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const { t } = useTranslation();
    const lngId: number = i18n.language === 'en' ? 0 : 1;
    const { currentUser } = useAppSelector((state) => state.auth);
    const [loadingOpen, setLoadingOpen] = useState<boolean>(false);

    interface MultiSelectOption {
        value: any;
        label: string;
        key?: string;
        disabled?: boolean;
    }

    const initialValue = {
        value: '',
        visibility: false,
        errorMessage: '',
        rules: [],
    };

    // values
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [image, setImage] = useState<string>('/img/editphoto1.png');
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>('');

    const [selectedLangauge, setSelectedLanguage] = useState(LanguageOptions[0]);
    const [descriptionEn, setDescriptionEn] = useState({ ...initialValue, rules: ['min:200', 'max:1200'] });
    const [descriptionHe, setDescriptionHe] = useState({ ...initialValue, rules: ['min:200', 'max:1200'] });
    const [personalTitleEn, setPersonalTitleEn] = useState({ ...initialValue, rules: ['required'] });
    const [personalTitleHe, setPersonalTitleHe] = useState({ ...initialValue, rules: ['required'] });

    const [profileType, setProfileType] = useState(TypeOptions[0]);
    const [skills, setSkills] = useState<MultiSelectOption[]>([]);
    const [privateCourse, setPrivateCourse] = useState<boolean>(false);

    const [personalsite, setPersonalsite] = useState({ ...initialValue, rules: ['personalsite'] });
    const [instagram, setInstagram] = useState({ ...initialValue, rules: ['instagram'] });
    const [facebook, setFacebook] = useState({ ...initialValue, rules: ['facebook'] });
    const [twitter, setTwitter] = useState({ ...initialValue, rules: ['twitter'] });


    const handleChangeValue = (value: any, setValue: any) => (event: any) => {
        checkValidity({ ...value, value: event.target.value }, setValue);
    };

    const checkValidity = (value: any, setValue: any) => {
        let message = '';
        for (const rule of value.rules) {
            if (rule === 'required') {
                if (value.value.length === 0) {
                    message = 'This field should not be empty.';
                }
            } else if (rule === 'personalsite') {
                let siteRegex = /^https:\/\//;
                if (!siteRegex.test(value.value)) {
                    message = 'Invalid Site URL.';
                }
            } else if (rule === 'instagram') {
                let siteRegex = /^https:\/\/(www\.)?instagram\.com\//;
                if (!siteRegex.test(value.value)) {
                    message = 'Invalid Instagram URL.';
                }
            } else if (rule === 'facebook') {
                let siteRegex = /^https:\/\/(www\.)?facebook\.com\//;
                if (!siteRegex.test(value.value)) {
                    message = 'Invalid Facebook URL.';
                }
            } else if (rule === 'twitter') {
                let siteRegex = /^https:\/\/(www\.)?twitter\.com\//;
                if (!siteRegex.test(value.value)) {
                    message = 'Invalid Twitter URL.';
                }
            } else if (rule === 'min:200') {
                if (value.value.length < 200) {
                    message = 'This field should greater than 200.';
                }
            } else if (rule === 'max:1200') {
                if (value.value.length > 1200) {
                    message = 'This field should lower than 1200.';
                }
            }
        }

        setValue({
            ...value,
            errorMessage: message,
        });
    };


    //modal
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // initalize
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    // console.log(getVideoIdFromUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
    // console.log(getVideoIdFromUrl('https://youtu.be/dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
    // console.log(getVideoIdFromUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'
    // console.log(getVideoIdFromUrl('https://www.youtube.com/watch?feature=youtu.be&v=dQw4w9WgXcQ')); // output: 'dQw4w9WgXcQ'

    const getVideoIdFromUrl = (url: string): string | null => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/; // match the video ID in the URL
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    useLayoutEffect(() => {
        if (currentUser) {
            if (currentUser.ar_aboutme[0] !== '' && currentUser.ar_personaltitle[0] !== '')
                setSelectedLanguage(LanguageOptions[0]);
            if (currentUser.ar_aboutme[1] !== '' && currentUser.ar_personaltitle[1] !== '')
                setSelectedLanguage(LanguageOptions[1]);
            if (currentUser.ar_aboutme[0] !== '' && currentUser.ar_personaltitle[1] !== '')
                setSelectedLanguage(LanguageOptions[2]);

            if (currentUser.ds_avatar !== '')
                setImage(process.env.FILE_IMAGE_BASE + currentUser.ds_avatar);
            if (currentUser.ds_video !== '') {
                if (getVideoIdFromUrl(currentUser.ds_video) === null)
                    setVideoUrl(process.env.FILE_VIDEO_BASE + currentUser.ds_video);
                else
                    setVideoUrl(currentUser.ds_video);
            }
            TypeOptions.map((item, index: number) => {
                if (currentUser.ds_category === item.value) {
                    setProfileType(TypeOptions[index]);
                    return;
                }
            })
            let _skills: MultiSelectOption[] = [];
            currentUser.ar_skills.map((text: string) => (
                _skills.push({
                    value: text,
                    label: text
                })
            ))
            currentUser.ar_skills.map((text: string) => {
                
            })
            setSkills(_skills);
            setDescriptionEn({ ...initialValue, value: currentUser.ar_aboutme[0], rules: ['min:200', 'max:1200'] });
            setDescriptionHe({ ...initialValue, value: currentUser.ar_aboutme[1], rules: ['min:200', 'max:1200'] });
            setPersonalTitleEn({ ...initialValue, value: currentUser.ar_personaltitle[0], rules: ['required'] });
            setPersonalTitleHe({ ...initialValue, value: currentUser.ar_personaltitle[1], rules: ['required'] });
            setPrivateCourse(Boolean(currentUser.ic_privatecourse));
            //contact information
            setPersonalsite({ ...initialValue, value: currentUser?.ln_personalsite === undefined ? '' : currentUser?.ln_personalsite, rules: ['personalsite'] });
            setInstagram({ ...initialValue, value: currentUser?.ln_instagram === undefined ? '' : currentUser?.ln_instagram, rules: ['instagram'] });
            setFacebook({ ...initialValue, value: currentUser?.ln_facebook === undefined ? '' : currentUser?.ln_facebook, rules: ['facebook'] });
            setTwitter({ ...initialValue, value: currentUser?.ln_twitter === undefined ? '' : currentUser?.ln_twitter, rules: ['twitter'] });
        }
    }, [currentUser]);

    const avatarBtn = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        let MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
        let MIN_IMAGE_SIZE = 385; // 385 px

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                toast.error('File size too large!\nPlease select an image less than 4MB.');
            } else {
                const img = new Image();
                img.src = URL.createObjectURL(file);
                img.onload = () => {
                    if (img.width < MIN_IMAGE_SIZE || img.height < MIN_IMAGE_SIZE) {
                        toast.error(`Image must be at least ${MIN_IMAGE_SIZE} x ${MIN_IMAGE_SIZE} pixels`);
                    } else {
                        setSelectedImage(file);
                    }
                };
            }
        }
    }

    useEffect(() => {
        if (selectedImage && selectedImage.name !== currentUser.ds_avatar) {
            setImage(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    const videoBtn = useRef<HTMLInputElement | null>(null);

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        let MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                toast.error('File size too large!\nPlease select a video less than 50MB.');
            } else {
                setSelectedVideo(file);
            }
        }
    }

    useEffect(() => {
        if (selectedVideo && selectedVideo.name !== currentUser.ds_video) {
            setVideoUrl(URL.createObjectURL(selectedVideo));
        }
    }, [selectedVideo]);

    const isCategorysChanged = () => {
        if (currentUser) {
            return currentUser.ds_category !== profileType.value;
        }
        return false;
    }

    const isSkillsChanged = () => {
        if (currentUser) {
            if (currentUser?.ar_skills.length !== skills.length)
                return true;
            else {
                for (let i = 0; i < skills.length; i++) {
                    if (skills[i].label !== currentUser?.ar_skills[i])
                        return true;
                }
            }
        }
        return false;
    }

    const isSaveButtonActive = () => {
        if (currentUser &&
            !personalsite.errorMessage &&
            !instagram.errorMessage &&
            !facebook.errorMessage &&
            !twitter.errorMessage &&
            skills.length > 0 &&
            !loadingOpen &&
            (selectedLangauge.id === 0 ?
                (!descriptionEn.errorMessage &&
                    !personalTitleEn.errorMessage)
                :
                selectedLangauge.id === 1 ?
                    (!descriptionHe.errorMessage &&
                        !personalTitleHe.errorMessage)
                    :
                    (!descriptionEn.errorMessage &&
                        !personalTitleEn.errorMessage &&
                        !descriptionHe.errorMessage &&
                        !personalTitleHe.errorMessage)
            )
        ) {
            // console.log('---------------------');
            // console.log(process.env.FILE_IMAGE_BASE + currentUser?.ds_avatar !== image);
            // console.log((currentUser?.ds_video === '' ? videoUrl !== '' : getVideoIdFromUrl(videoUrl) === null ? process.env.FILE_VIDEO_BASE + currentUser?.ds_video !== videoUrl : currentUser?.ds_video !== videoUrl));
            // console.log(currentUser?.ar_aboutme[lngId] !== description);
            // console.log(currentUser.ar_personaltitle[lngId] !== personalTitle.value);
            // console.log((currentUser?.ln_personalsite === undefined ? '' !== personalsite.value : currentUser?.ln_personalsite !== personalsite.value));
            // console.log((currentUser?.ln_instagram === undefined ? '' !== instagram.value : currentUser?.ln_instagram !== instagram.value));
            // console.log((currentUser?.ln_facebook === undefined ? '' !== facebook.value : currentUser?.ln_facebook !== facebook.value));
            // console.log((currentUser?.ln_twitter === undefined ? '' !== twitter.value : currentUser?.ln_twitter !== twitter.value));
            // console.log(isCategorysChanged());
            // console.log(isSkillsChanged());
            const descriptionEnChanged = currentUser.ar_aboutme[0] !== descriptionEn.value;
            const descriptionHeChanged = currentUser.ar_aboutme[1] !== descriptionHe.value;
            const personaltitleEnChanged = currentUser.ar_personaltitle[0] !== personalTitleEn.value;
            const personaltitleHeChanged = currentUser.ar_personaltitle[1] !== personalTitleHe.value;
            if (selectedLangauge.id === 0 && (descriptionEnChanged || personaltitleEnChanged))
                return true;
            if (selectedLangauge.id === 1 && (descriptionHeChanged || personaltitleHeChanged))
                return true;
            if (selectedLangauge.id === 2 && (descriptionEnChanged || personaltitleEnChanged || descriptionHeChanged || personaltitleHeChanged))
                return true;
            return process.env.FILE_IMAGE_BASE + currentUser.ds_avatar !== image ||
                (currentUser.ds_video === '' ? videoUrl !== '' : getVideoIdFromUrl(videoUrl) === null ? process.env.FILE_VIDEO_BASE + currentUser?.ds_video !== videoUrl : currentUser?.ds_video !== videoUrl) ||
                privateCourse !== currentUser.ic_privatecourse ||
                (currentUser?.ln_personalsite === undefined ? '' !== personalsite.value : currentUser?.ln_personalsite !== personalsite.value) ||
                (currentUser?.ln_instagram === undefined ? '' !== instagram.value : currentUser?.ln_instagram !== instagram.value) ||
                (currentUser?.ln_facebook === undefined ? '' !== facebook.value : currentUser?.ln_facebook !== facebook.value) ||
                (currentUser?.ln_twitter === undefined ? '' !== twitter.value : currentUser?.ln_twitter !== twitter.value) ||
                isCategorysChanged() ||
                isSkillsChanged();
        }
        return false;
    }

    const handleSave = () => {
        if (isSaveButtonActive()) {
            setLoadingOpen(true);
            console.log('selectedLangauge.id', selectedLangauge.id);

            let formData = new FormData();
            if (selectedImage !== null) {
                let parts = selectedImage.name.split('.');
                let ext = parts[parts.length - 1];
                let newFileName = 'avatar_' + currentUser.cd_educator + '.' + ext;
                let _selectedImage = new File([selectedImage], newFileName, { type: selectedImage.type, lastModified: selectedImage.lastModified });
                // console.log(_selectedImage);
                formData.append('image', _selectedImage as File);
            } else {
                formData.append('image', selectedImage as unknown as File);
            }
            if (selectedVideo !== null) {
                let parts = selectedVideo.name.split('.');
                let ext = parts[parts.length - 1];
                let newFileName = 'video_' + currentUser.cd_educator + '.' + ext;
                let _selectedVideo = new File([selectedVideo], newFileName, { type: selectedVideo.type, lastModified: selectedVideo.lastModified });
                // console.log(_selectedVideo);
                formData.append('video', _selectedVideo as File);
            } else {
                formData.append('video', selectedVideo as unknown as File);
            }
            if (getVideoIdFromUrl(videoUrl) !== null) {
                formData.append('youtubelink', videoUrl);
            } else
                formData.append('youtubelink', '');
            formData.append('cd_educator', currentUser.cd_educator);
            formData.append('ln_personalsite', personalsite.value);
            formData.append('ln_instagram', instagram.value);
            formData.append('ln_facebook', facebook.value);
            formData.append('ln_twitter', twitter.value);
            if (selectedLangauge.id === 0) {
                formData.append('ar_aboutme[]', descriptionEn.value);
                formData.append('ar_aboutme[]', '');
                formData.append('ar_personaltitle[]', personalTitleEn.value);
                formData.append('ar_personaltitle[]', '');
            } else if (selectedLangauge.id === 1) {
                formData.append('ar_aboutme[]', '');
                formData.append('ar_aboutme[]', descriptionHe.value);
                formData.append('ar_personaltitle[]', '');
                formData.append('ar_personaltitle[]', personalTitleHe.value);
            } else if (selectedLangauge.id === 2) {
                formData.append('ar_aboutme[]', descriptionEn.value);
                formData.append('ar_aboutme[]', descriptionHe.value);
                formData.append('ar_personaltitle[]', personalTitleEn.value);
                formData.append('ar_personaltitle[]', personalTitleHe.value);
            }
            formData.append('ic_privatecourse', privateCourse.toString());
            formData.append('ds_category', profileType.value);
            skills.map((obj: MultiSelectOption) => (
                formData.append('ar_skills[]', obj.label)
            ))
            API.post('user/setpersonaldata', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
                .then((result: any) => {
                    if (result.data.status === 'success') {
                        toast.success('Updated successfully.');
                        dispatch(setUser(result.data.currentUser));
                        setLoadingOpen(false);
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
        <>
            {domLoaded && (
                <div className='grid md:grid-cols-3 gap-[20px] md:gap-[35px]'>
                    <YouTubeInputModal
                        isOpen={isOpen}
                        closeModal={closeModal}
                        setVideoUrl={setVideoUrl}
                    />
                    <div className='w-full md:col-span-2 text-dark flex flex-col gap-[20px] md:gap-[30px]'>
                        <div className=''>
                            <div className={style.Title}>
                                {t('Introduction')}
                            </div>
                            <div className='mt-[12px] grid gap-[10px] border border-beighe rounded-[10px] p-[10px]'>
                                <CategorySelect
                                    category=''
                                    selectItems={LanguageOptions}
                                    inputValue={selectedLangauge}
                                    handleChange={setSelectedLanguage}
                                />
                                {
                                    (selectedLangauge.id === 0 || selectedLangauge.id === 2) &&
                                    <div className='grid gap-[6px]'>
                                        <Textarea
                                            lngId={0}
                                            category='About me'
                                            placeholder='To help students learn more about you, your curriculum vitae should include information about your reputation, personal qualities and interests.'
                                            inputValue={descriptionEn}
                                            handleChange={handleChangeValue(descriptionEn, setDescriptionEn)}
                                        />
                                        <div className='text-Label text-[14px] font-medium text-right'>
                                            {descriptionEn.value.length} of 1200 characters (minimum 200)
                                        </div>
                                    </div>
                                }
                                {
                                    (selectedLangauge.id === 1 || selectedLangauge.id === 2) &&
                                    <div className='grid gap-[6px]'>
                                        <Textarea
                                            lngId={1}
                                            category='אודותי'
                                            placeholder='כדי לעזור לתלמידים ללמוד עליך יותר, קורות החיים שלך צריכים לכלול מידע על המוניטין שלך, תכונות אישיות ותחומי עניין שלך.'
                                            inputValue={descriptionHe}
                                            handleChange={handleChangeValue(descriptionHe, setDescriptionHe)}
                                        />
                                        <div className='text-Label text-[14px] font-medium text-right'>
                                            {descriptionHe.value.length} of 1200 characters (minimum 200)
                                        </div>
                                    </div>
                                }
                                {
                                    (selectedLangauge.id === 0 || selectedLangauge.id === 2) &&
                                    <CategoryRuleInput
                                        lngId={0}
                                        category='Personal Title'
                                        placeholder={'Modern Applied Psychology & Personal Development'}
                                        inputValue={personalTitleEn}
                                        handleChange={handleChangeValue(personalTitleEn, setPersonalTitleEn)}
                                    />
                                }
                                {
                                    (selectedLangauge.id === 1 || selectedLangauge.id === 2) &&
                                    <CategoryRuleInput
                                        lngId={1}
                                        category='Personal Title'
                                        placeholder={'Modern Applied Psychology & Personal Development'}
                                        inputValue={personalTitleHe}
                                        handleChange={handleChangeValue(personalTitleHe, setPersonalTitleHe)}
                                    />
                                }
                            </div>
                            <div className='mt-[10px] flex flex-col gap-[10px]'>
                                <CategorySelect
                                    category='Pashut Laledet Certification'
                                    selectItems={TypeOptions}
                                    inputValue={profileType}
                                    handleChange={setProfileType}
                                />
                                <div className='w-full flex flex-col gap-[6px]'>
                                    <label className='text-sm text-dark'>
                                        {t('Professional Expertise')}
                                    </label>
                                    <MultiSelect
                                        options={lngId == 0 ? SkillSetEn : SkillSetHe}
                                        value={skills}
                                        onChange={setSkills}
                                        labelledBy='Select'
                                        hasSelectAll={false}
                                        className='w-full'
                                    />
                                </div >
                                <CategoryCheckbox
                                    id='check-private-course'
                                    text='I can do private one to one course'
                                    checkValue={privateCourse}
                                    setCheckValue={setPrivateCourse}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className={style.Title}>
                                {t('My contacts')}
                            </div>
                            <div className='flex flex-col gap-[6px]'>
                                <IconInput
                                    lngId={lngId}
                                    IconType={0}
                                    placeholder='https://'
                                    inputValue={personalsite}
                                    handleChange={handleChangeValue(personalsite, setPersonalsite)}
                                />
                                <IconInput
                                    lngId={lngId}
                                    IconType={1}
                                    placeholder='https://www.instagram.com/'
                                    inputValue={instagram}
                                    handleChange={handleChangeValue(instagram, setInstagram)}
                                />
                                <IconInput
                                    lngId={lngId}
                                    IconType={2}
                                    placeholder='https://www.facebook.com/'
                                    inputValue={facebook}
                                    handleChange={handleChangeValue(facebook, setFacebook)}
                                />
                                <IconInput
                                    lngId={lngId}
                                    IconType={3}
                                    placeholder='https://www.twitter.com/'
                                    inputValue={twitter}
                                    handleChange={handleChangeValue(twitter, setTwitter)}
                                />
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='w-max' onClick={handleSave}>
                                <UploadButton
                                    text={t('Save changes')}
                                    disabled={!isSaveButtonActive()}
                                    loadingOpen={loadingOpen}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] md:gap-[30px] text-dark'>
                        <div className='flex flex-col gap-[12px]'>
                            <div className={style.Title}>
                                {t('Preview image')}
                            </div>
                            <div>
                                <div className='border border-beighe bg-white rounded-[10px] lg:rounded-[15px] w-full max-w-[385px] min-w-[233px] overflow-hidden' >
                                    <div className='aspect-w-1 aspect-h-1'>
                                        <img draggable='false' src={image} alt='Edit Photo' className={`w-full h-full object-cover bg-white`} />
                                        <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                                            <div>
                                                <input
                                                    accept='image/*'
                                                    className='hidden'
                                                    id='input-image-file'
                                                    type='file'
                                                    ref={avatarBtn}
                                                    onChange={handleImageUpload}
                                                />
                                                <div
                                                    className='w-max'
                                                    onClick={
                                                        () => { avatarBtn.current?.click() }
                                                    }
                                                >
                                                    <UploadButton text={t('add photo')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[6px] text-Label text-[18px] font-medium'>
                                    We recommend using an image of at least 385 x 385 pixels in PNG or GIF format. Animated images cannot be uploaded. The file size should not exceed 4 MB.
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className={style.Title}>
                                {t('Preview video of me')}
                            </div>
                            <div className='border border-beighe bg-white rounded-[10px] lg:rounded-[15px] w-full max-w-[385px]'>
                                <div className='aspect-w-16 aspect-h-9'>
                                    {
                                        getVideoIdFromUrl(videoUrl) === null ?
                                            <ReactPlayer
                                                url={videoUrl}
                                                width='100%'
                                                height='100%'
                                                // controls={true}
                                                playing={false}
                                            />
                                            :
                                            <iframe
                                                width='100%'
                                                height='100%'
                                                src={`https://www.youtube.com/embed/${getVideoIdFromUrl(videoUrl)}`}
                                                frameBorder={0}
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title={'About me'}
                                            />
                                    }
                                    <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                                        <div className='grid gap-[15px]'>
                                            <div className='m-auto'>
                                                <input
                                                    accept='video/*'
                                                    className='hidden'
                                                    id='video-upload-file'
                                                    type='file'
                                                    ref={videoBtn}
                                                    onChange={handleVideoUpload}
                                                />
                                                <div
                                                    onClick={
                                                        () => { videoBtn.current?.click() }
                                                    }
                                                >
                                                    <UploadButton text={t('Upload video')} />
                                                </div>
                                            </div>
                                            <div onClick={openModal}>
                                                <UploadButton text={t('Youtube link')} style='full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[6px] text-Label text-[18px] font-medium'>
                                Insert a video (no more than 50 MB) or link to it (e.g. YouTube) that describes you as a professional.
                            </div>
                        </div>
                        <div className='block md:hidden'>
                            <div className='w-max' onClick={handleSave}>
                                <UploadButton
                                    text={t('Save changes')}
                                    disabled={!isSaveButtonActive()}
                                    loadingOpen={loadingOpen}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
