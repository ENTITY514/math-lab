import { IInputInterface } from "../types";

export const BooleanInputView: React.FC<IInputInterface> = ({ input_obj }) => {
    return (
        <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { input_obj.__onChange_execute__(e.target.value) }} />
    );
}