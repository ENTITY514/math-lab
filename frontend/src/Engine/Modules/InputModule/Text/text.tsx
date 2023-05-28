import { INPUTTYPES, Input } from "../Input";
import { TextView } from "./text_view";

export class Text extends Input {
    constructor() {
        super(INPUTTYPES.BUTTON)
    }

    __react_view__(): JSX.Element {
        return <TextView input_obj={this} />
    }
}