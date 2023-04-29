import * as React from 'react'
import style from './folder_creator.module.css'
import { Icon } from '../../../../../../../../../../UI/Icon/icon'
import { Assets } from '../../../../../../../../../../assets/get'

interface IFolderCreatorProps {
    createFolder: () => void
}

export const FolderCreator: React.FC<IFolderCreatorProps> = ({ createFolder }) => {
    return (
        <div className={style.container} onClick={createFolder}>
            <div className={style.iconwrapper}>
                <Icon url={Assets.add_folder} />
            </div>
        </div>
    )
}