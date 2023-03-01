import * as React from 'react'
import { Assets } from '../../../../../../../../assets/get'
import { Icon } from '../../../../../../../../Components/Icon/icon'
import style from './sort_files.module.css'

interface ISortFilesProps {
    setSortType: (type: any) => void
}

export const SortFiles: React.FC<ISortFilesProps> = ({ setSortType }) => {
    const input_ref = React.useRef<HTMLSelectElement>(null)
    React.useEffect(() => {
        if (input_ref.current !== null) {
            input_ref.current.addEventListener('change', () => {
                if (input_ref.current !== null) {
                    setSortType(input_ref.current.value)
                }
            })
        }
    }, [])
    return (
        <div className={style.container}>
            <div className={style.iconwrapper}>
                <Icon url={Assets.sort_descending} />
            </div>
            <select className={style.select} ref={input_ref}>
                <option className={style.option} value={'name_normal'}>По имени А-Я</option>
                <option className={style.option} value={'name_revers'}>По имени Я-А</option>
                <option className={style.option} value={'type_normal'}>По типу А-Я</option>
                <option className={style.option} value={'type_revers'}>По типу Я-А</option>
            </select>
        </div>
    )
}