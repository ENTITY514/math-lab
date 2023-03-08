import style from "./image.module.css"

interface IImageProps {
    url: string
    cover?: boolean
}

export const ImageUI: React.FC<IImageProps> = ({ url, cover = false }) => {
    return (
        <div className={style.container} >
            <div className={style.img} style={
                {
                    backgroundImage: "url(" + url + ")",
                    backgroundSize: cover ? "cover" : "contain"
                }}></div>
        </div >
    )
}