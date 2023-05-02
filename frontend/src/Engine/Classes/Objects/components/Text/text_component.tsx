import { Component } from "../component";
import { GraphicComponentData } from "../../../../Types/objects_interfaces";
import { Text } from "../../ViewObjects/text";
import { TextView } from "./text_view";


export class TextComponent extends Component {
    object!: Text
    constructor(object: Text) {
        super(object, "text")
        this.object = object
        this.object.components.push(this)
    }

    __react_view__() {
        return <TextView component={this} key={this.id} />
    }

    __get_data__() {
        return {
            type: this.type,
            id: this.id,
        } as GraphicComponentData
    }


    __create_from_data(data: GraphicComponentData): void {
    }
}