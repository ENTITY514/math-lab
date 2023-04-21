import { INPUTTYPES, Input } from "../Input";
import { BooleanInputView } from "./boolean_input_view";

export class BooleanInput extends Input {
    constructor() {
        super(INPUTTYPES.BOOLEAN)
    }

    __react_view__(): JSX.Element {
        return <BooleanInputView input_obj={this}/>
    }
}