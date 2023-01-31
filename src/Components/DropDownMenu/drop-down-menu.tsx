import { nanoid } from 'nanoid'
import * as React from 'react'
import { useAppDispatch } from '../../Store/hooks/redux'
import style from './drop-down-menu.module.css'

interface Item {
    title: string
    action: any
}

interface IDropDownMenuProps {
    src: string
    list: Item[]
}

export const DropDownMenu: React.FC<IDropDownMenuProps> = ({ src, list }) => {
    let [isOpen, setIsOpen] = React.useState<Boolean>(false)
    function handleChange() {
        setIsOpen(prev => !prev)
    }
    
    if (isOpen) {
        return (
            <div className={style.container} onClick={handleChange}>
                <div className={style.wrapper} style={{ backgroundImage: "url(" + src + ")" }}></div>
                <div className={style.bg}></div>
                <div className={style.menu}>
                    {list.map((item) => {
                        return (
                            <div className={style.menu_item} onClick={() => { console.log("Click");
                            
                                item.action() }} key={nanoid()}>{item.title}</div>
                        )
                    })}
                </div>
            </div >
        )
    }
    else {
        return (
            <div className={style.container} onClick={handleChange}>
                <div className={style.wrapper} style={{ backgroundImage: "url(" + src + ")" }}></div>
            </div >
        )
    }
}