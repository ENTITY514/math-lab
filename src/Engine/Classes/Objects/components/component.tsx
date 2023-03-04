import { nanoid } from "nanoid";
import { ComponentData } from "../../../Types/objects_interfaces";
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
        return <ComponentView object={this.object} />
    }

    __get_data__(): ComponentData {
        return {
            type: this.type,
            id: this.id
        }
    }

    __create_from_data(data: ComponentData) {
        this.type = data.type
        this.id = data.id
    }
}