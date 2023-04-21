import { INPUTTYPES, Input } from "../Input";
import { RangeInputView } from "./range_input_view";

export class RangeInput extends Input {
    constructor() {
        super(INPUTTYPES.RANGE)
    }

    __react_view__(): JSX.Element {
        return <RangeInputView input_obj={this}/>
    }
}