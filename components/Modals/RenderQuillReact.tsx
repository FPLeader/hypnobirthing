import { Dispatch, SetStateAction, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import('react-quill');
        return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
    },
    {
        ssr: false,
    }
);
import { Quill } from 'react-quill';
// @ts-ignore
import ImageResize from 'quill-image-resize-module-react' // import as default
// @ts-ignore
// import { ImageDrop } from 'quill-image-drop-module'
// @ts-ignore
import QuillEmoji from 'quill-emoji'
import API from '@/services/API'

// Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/emoji', QuillEmoji);
import { useAppSelector } from '@/services/Hooks'

import 'react-quill/dist/quill.snow.css'
import 'quill-emoji/dist/quill-emoji.css'

interface QuilProps {
    theme: string,
    value: string,
    handleChange: any,
    placeholder: string,
    style: {},
    imageUrls: string[]
    setImageUrls: Dispatch<SetStateAction<string[]>>
}

export default function RenderQuillReact({
    theme,
    value,
    handleChange,
    placeholder,
    style,
    imageUrls = [],
    setImageUrls
}: QuilProps) {
    const { currentUser } = useAppSelector((state) => state.auth);
    const editorRef = useRef(null);

    const imageHandler = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input?.files[0];

            // file type is only image.
            if (/^image\//.test(file.type)) {
                saveToServer(file);
            } else {
                console.warn('You could only upload images.');
            }
        }
    };

    const saveToServer = (selectedImage: File) => {
        let parts = selectedImage.name.split('.');
        let ext = parts[parts.length - 1];
        let newFileName = currentUser.cd_educator + '_content_' + Date.now() + '.' + ext;
        let _selectedImage = new File([selectedImage], newFileName, { type: selectedImage.type, lastModified: selectedImage.lastModified });

        let formData = new FormData();
        formData.append('cd_educator', currentUser.cd_educator);
        formData.append('image', _selectedImage);
        API.post('blog/uploadcontentimage', formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
            .then((result: any) => {
                if (result.data.status === 'success') {
                    let url = result.data.url;
                    let _imageUrls = imageUrls;
                    _imageUrls.push(url);
                    setImageUrls(_imageUrls);

                    insertToEditor(process.env.FILE_IMAGE_BASE + url);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const insertToEditor = (url: string) => {
        if (editorRef.current) {
            let range = editorRef.current.getEditorSelection();
            editorRef.current.getEditor().insertEmbed(range.index, 'image', url);
        }
    }

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ 'header': [1, 2, 3, 4, 5, 6] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'header': 1 }, { 'header': 2 }, 'blockquote', 'code-block'],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { indent: '-1' },
                        { indent: '+1' },
                    ],
                    [{ 'direction': 'rtl' }, { 'align': [] }],
                    ['link', 'image', 'video'],
                    ['emoji'],
                    ['clean']
                ],
                handlers: {
                    emoji: (e: any) => {
                        console.log('e', e);
                    },
                    image: imageHandler
                }
            },
            keyboard: { bindings: { tab: false } },
            'emoji-toolbar': true,
            'emoji-textarea': true,
            'emoji-shortname': true,
            // imageDrop: true,
            // imageResize: {
            //     parchment: Quill.import('parchment')
            // }
        }),
        []
    )

    const formats = useMemo(
        () => (
            [
                'header',
                'size',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'code-block',
                'color',
                'background',
                'list',
                'indent',
                'align',
                'link',
                'bullet',
                'image',
                'video',
                'clean',
                'emoji'
            ]
        ), []
    )

    return (
        <>
            <ReactQuill
                forwardedRef={editorRef}
                theme={theme}
                defaultValue={value}
                onChange={(value: any) => handleChange(value)}
                placeholder={placeholder}
                style={style}
                modules={modules}
                formats={formats}
            />
        </>
    )
}