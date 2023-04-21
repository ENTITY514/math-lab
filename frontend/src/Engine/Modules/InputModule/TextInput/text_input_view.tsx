import React from "react";
import { IInputInterface } from "../types";

export const TextInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    );
}