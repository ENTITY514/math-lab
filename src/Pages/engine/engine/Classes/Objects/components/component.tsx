import { nanoid } from "nanoid";
import { ComponentView } from "./component_view";

export class Component {
    object!: any;
    type: string;
    id: string
    constructor(object: any, type: string) {
        this.object = object
        this.type = type
        this.id = nanoid()
    }

    __react_view__() {
        return <ComponentView object={this.object}/>
    }
}