import { Component } from "../component";
import { Sprite } from "../../ViewObjects/spite";
import { GraphicView } from "./graphic_view";

export class GraphicComponent extends Component {
    object!: Sprite
    constructor(object: Sprite) {
        super(object, "graphic")
        this.object = object
        this.object.components.push(this)
    }

    __react_view__() {
        return <GraphicView object={this.object} key={this.id}/>
    }
}