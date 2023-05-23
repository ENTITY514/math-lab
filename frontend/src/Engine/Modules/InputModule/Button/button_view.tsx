import React from "react";
import { IInputInterface } from "../types";
import style from './style.module.css'

export const ButtonView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <div className={style.Container}>
            <div className={style.name}>{input_obj.label}</div>
        </div>
    );
}