import { ComponentView } from "./component_view";

export class Component {
    object!: any;
    type: string;
    constructor(object: any, type: string) {
        this.object = object
        this.type = type
    }

    __react_view__() {
        return <ComponentView object={this.object}/>
    }
}