import { nanoid } from "nanoid"

export enum INPUTTYPES {
    TEXT = "text",
    NUMBER = "number",
    RANGE = "range",
    BOOLEAN = "boolean",
    COLOR = "color"
}

export class Input {
    name: string
    id: string
    type: INPUTTYPES
    onChangeEvents: Array<(value: string) => void> = []
    value: string
    constructor(type: INPUTTYPES) {
        this.name = "input"
        this.id = nanoid()
        this.type = type
        this.value = ""
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