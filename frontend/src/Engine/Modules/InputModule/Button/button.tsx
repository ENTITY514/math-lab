import { INPUTTYPES, Input } from "../Input";
import { ButtonView } from "./button_view";

export class ButtonInput extends Input {
    onClickEvents: Array<() => void> = []
    constructor() {
        super(INPUTTYPES.BUTTON)
    }

    __react_view__(): JSX.Element {
        return <ButtonView input_obj={this} />
    }

    onClick(callback: () => void) {
        this.onClickEvents.push(callback)
    }
}