import * as React from 'react'
import style from './editor.module.css'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Engine } from '../../../engine/main';


export const Editor: React.FC = () => {
    const script_manager = new Engine()

    const onChange = React.useCallback((value: any, viewUpdate: any) => {
        console.log('value:', value);
    }, []);

    return (
        <div className={style.container}>
            <CodeMirror
                value={"console.log('hello world')"}
                height="1000px"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
        </div>
    );
}