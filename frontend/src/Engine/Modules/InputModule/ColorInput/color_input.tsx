import { INPUTTYPES, Input } from "../Input";
import { ColorInputView } from "./color_input_view";

export class ColorInput extends Input {
    constructor() {
        super(INPUTTYPES.COLOR)
    }

    __react_view__(): JSX.Element {
        return <ColorInputView input_obj={this}/>
    }
}