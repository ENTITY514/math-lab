import React from "react";
import { IInputInterface } from "../types";
import style from './style.module.css'

export const TextView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <div className={style.container}>
            <div className={style.name}>{input_obj.label}</div>
        </div>
    );
}