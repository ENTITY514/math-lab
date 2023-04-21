import { Engine } from "../../core";
import { Module } from "../module";
import { BooleanInput } from "./BooleanInput/boolean_input";
import { ColorInput } from "./ColorInput/color_input";
import { INPUTTYPES, Input } from "./Input";
import { NumberInput } from "./NumberInput/number_input";
import { RangeInput } from "./RangeInput/range_input";
import { TextInput } from "./TextInput/text_input";

export class InputModule extends Module {
    name: string = "InputModule"
    inputs: Array<Input> = []
    constructor(engine: Engine) {
        super(engine)
        this.register(INPUTTYPES.TEXT)
        this.register(INPUTTYPES.NUMBER)
        this.register(INPUTTYPES.RANGE)
        this.register(INPUTTYPES.COLOR)
    }

    register(input_type: string | INPUTTYPES) {
        let inp: Input = new Input(INPUTTYPES.TEXT)
        switch (input_type) {
            case INPUTTYPES.TEXT:
                inp = new TextInput()
                break;
            case INPUTTYPES.BOOLEAN:
                inp = new BooleanInput()
                break;
            case INPUTTYPES.RANGE:
                inp = new RangeInput()
                break;
            case INPUTTYPES.COLOR:
                inp = new ColorInput()
                break;
            case INPUTTYPES.NUMBER:
                inp = new NumberInput()
                break;

            default:
                break;
        }
        this.inputs.push(inp)
    }

    __get_data__() {
        let inputs_data = []
        this.inputs.forEach(input => {
            inputs_data.push(input.__get_data__())
        });
    }

    __get_input_react_view__(): JSX.Element[] {
        return this.inputs.map(input => {
            return <div key={input.id}>{input.__react_view__()}</div>
        })
    }
}