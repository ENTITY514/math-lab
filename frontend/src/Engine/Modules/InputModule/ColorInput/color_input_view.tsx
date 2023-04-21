import { IInputInterface } from "../types";

export const ColorInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <input type="color" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    );
}