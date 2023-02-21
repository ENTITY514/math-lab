import * as React from 'react'
import style from './editor.module.css'
import { Engine } from '../../../engine/main';


export const CodeEditor: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    })
    const view = React.useMemo(() => {
        return engine.script_module.active_file !== null ?
            engine.script_module.get_editor() :
            <div className={style.nonFileView}>
                <div>
                    <div className={style.icon} style={{ backgroundImage: "url(/document.png)" }}></div>
                    <div className={style.text}>Выберете файл для редактирования</div>
                </div>
            </div>
    }, [engine.script_module.active_file])
    return (
        <div className={style.container}>
            {view}
        </div>
    );
}