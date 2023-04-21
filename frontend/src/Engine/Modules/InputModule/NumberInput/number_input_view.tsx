import { IInputInterface } from "../types";

export const NumberInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    );
}