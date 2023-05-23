
import React from "react";
import { IInputInterface } from "../types";
import style from './style.module.css'

export const NumberInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (<div className={style.Container}>
        <div className={style.name}>{input_obj.label}</div>
        <input
            className={style.input}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    </div>
    );
}
