interface VideoProps {
    title: string,
    code: string,
    style?: string,
}

// https://www.youtube.com/watch?v=YGxKPJDzok8

export default function Video({
    title,
    code,
    style
}: VideoProps) {
    return (
        <div className={`${style} border-[4px] border-[#DFD3BC38] rounded-[10px] lg:rounded-[15px] bg-gradient-to-r from-[#DFD3BC38] to-[#DFD3BC38] overflow-hidden`}>
            <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${code}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title={title}
            />
        </div>
    )
}