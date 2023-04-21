import { INPUTTYPES, Input } from "../Input";
import { TextInputView } from "./text_input_view";

export class TextInput extends Input {
    constructor() {
        super(INPUTTYPES.TEXT)
    }

    __react_view__(): JSX.Element {
        return <TextInputView input_obj={this} />
    }
}