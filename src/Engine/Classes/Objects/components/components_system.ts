import { Sprite } from "../ViewObjects/sprite";
import { Component } from "./component";

export class ComponentSystem {
    object!: Sprite
    components: Array<Component> = []
    constructor(object: Sprite) {
        this.object = object
        this.components = object.components
    }
}