import style from "./image.module.css"

interface IImageProps {
    url: string
}

export const Image: React.FC<IImageProps> = ({ url }) => {
    return (
        <div className={style.container} >
            <div className={style.img} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div >
    )
}