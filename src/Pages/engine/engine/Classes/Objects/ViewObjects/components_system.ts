import { Component } from "./component";
import { Sprite } from "./spite";

export class ComponentSystem {
    object!: Sprite
    components: Array<Component> = []
    constructor(object: Sprite) {
        this.object = object
        this.components = object.components
    }
}