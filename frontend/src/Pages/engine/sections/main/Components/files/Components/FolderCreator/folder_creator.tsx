import * as React from 'react'
import { Assets } from '../../../../../../../../assets/get'
import { Icon } from '../../../../../../../../UI/Icon/icon'
import style from './folder_creator.module.css'

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