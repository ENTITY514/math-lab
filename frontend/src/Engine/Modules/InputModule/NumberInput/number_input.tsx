import { INPUTTYPES, Input } from "../Input";
import { NumberInputView } from "./number_input_view";

export class NumberInput extends Input {
    constructor() {
        super(INPUTTYPES.NUMBER)
    }

    __react_view__(): JSX.Element {
        return <NumberInputView input_obj={this}/>
    }
}