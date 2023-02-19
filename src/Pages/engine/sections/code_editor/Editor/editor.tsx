import * as React from 'react'
import style from './editor.module.css'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// @ts-ignore
import { atomone } from '@uiw/codemirror-theme-atomone';
import { Engine } from '../../../engine/main';


export const Editor: React.FC = () => {
    const engine = new Engine()
    const [count, set_update_count] = React.useState<boolean>(false)
    const [is_updatablet, set_is_updatablet] = React.useState<boolean>(false)
    const update = React.useCallback(() => { set_update_count(prev => !prev) }, [is_updatablet])
    React.useEffect(() => {
        if (!is_updatablet) {
            console.log(is_updatablet);
            set_is_updatablet(true)
            engine.script_module.onActiveFileChange(update)
        }
    }, [])
    const getData = React.useMemo(() => {
        if (engine.script_module.active_file !== null) {
            return engine.script_module.active_file.data
        }
        else {
            return ""
        }
    }, [engine.script_module.active_file])
    const onChange = React.useCallback((value: string, viewUpdate: any) => {
        engine.script_module.update_active_file(value)
    }, []);
    return (
        <div className={style.container}>
            <CodeMirror
                value={getData}
                height="500px"
                theme={atomone}
                extensions={[javascript()]}
                onChange={onChange}
            />
        </div>
    );
}