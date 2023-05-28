import React from "react";
import { IInputInterface } from "../types";
import style from './style.module.css'
import { ButtonInput } from "./button";

export const ButtonView: React.FC<IInputInterface> = ({ input_obj }) => {
    const onClickExecuter = () => {
        if (input_obj instanceof ButtonInput) {
            input_obj.onClickEvents.forEach(event => {
                event()
            })
        }
    }
    return (
        <div className={style.container} onClick={onClickExecuter}>
            <div className={style.name}>{input_obj.label}</div>
        </div>
    );
}