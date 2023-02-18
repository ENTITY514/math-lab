import * as React from 'react'
import style from './editor.module.css'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// @ts-ignore
import { atomone } from '@uiw/codemirror-theme-atomone';
import { Engine } from '../../../engine/main';


export const Editor: React.FC = () => {
    return (
        <div className={style.container}>
            <CodeMirror
                value={""}
                height="500px"
                theme={atomone}
                extensions={[javascript({ jsx: true })]}
            />
        </div>
    );
}