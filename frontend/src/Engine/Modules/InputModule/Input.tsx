import { nanoid } from "nanoid"

export enum INPUTTYPES {
    TEXT = "text",
    NUMBER = "number",
    RANGE = "range",
    BOOLEAN = "boolean",
    COLOR = "color",
    BUTTON = "button",
    TEXT_VAL = "text_val"
}

export class Input {
    name: string
    id: string
    type: INPUTTYPES
    onChangeEvents: Array<(value: string) => void> = []
    value: string
    label: string
    constructor(type: INPUTTYPES) {
        this.name = "input"
        this.id = nanoid()
        this.type = type
        this.value = ""
        this.label = "input"
    }

    setLabel(label: string) {
        this.label = label
    }

    onChange(callback: (value: string) => void) {
        this.onChangeEvents.push(callback)
    }


    __onChange_execute__(value: string) {
        this.onChangeEvents.forEach(element => {
            element(value)
        });
    }

    __react_view__() {
        return <input />
    }

    __get_data__() {
        return {
            name: this.name,
            id: this.id,
            type: this.type
        }
    }
}