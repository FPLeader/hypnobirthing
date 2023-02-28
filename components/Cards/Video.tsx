interface VideoProps {
    title: string,
    code: string
}

// https://www.youtube.com/watch?v=YGxKPJDzok8

export default function Video({
    title,
    code,
}: VideoProps) {
    return (
        <>
            <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${code}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title={title}
            />
        </>
    )
}