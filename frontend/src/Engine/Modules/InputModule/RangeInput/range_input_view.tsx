import { IInputInterface } from "../types";

export const RangeInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <input type="range"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    );
}