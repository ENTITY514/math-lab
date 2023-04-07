import style from "./image.module.css"

interface IImageProps {
    url: string
    cover?: boolean
    width?: string
    height?: string
    margin?: string
    padding?: string
}

export const ImageUI: React.FC<IImageProps> = ({ url, cover = false, width, margin, height, padding }) => {
    return (
        <div className={style.container} style={{ width, margin, padding, height }}>
            <div className={style.img} style={
                {
                    backgroundImage: "url(" + url + ")",
                    backgroundSize: cover ? "cover" : "contain"
                }}></div>
        </div >
    )
}