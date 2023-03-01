import { Entity } from "./entity";
import * as PIXI from "pixi.js"
import { Component } from "../components/component";
import { Transform } from "../components/Transform/transform_component";
import { ABD_primitive, ABD_transform_component } from "../../Modules/TestM/data_of_objects";

export class Primitive extends Entity {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    constructor(name: string = "primitive", type: string = "primitive") {
        super(name, type)
        this.sprite = new PIXI.Sprite(PIXI.Texture.EMPTY)
        this.sprite.anchor.x = 0.5
        this.sprite.anchor.y = 0.5
        this.transform = new Transform(this)
    }

    __get_data__() {
        const components = this.components.map((component) => {
            return component.__get_data__()
        })
        return {
            name: this.name,
            type: this.type,
            id: this.id,
            components: components
        } as ABD_primitive
    }

    __create_from_data(data: ABD_primitive) {
        this.setName(data.name)
        this.id = data.id
        this._type = data.type
        this.components = []
        data.components.forEach(component => {
            switch (component.type) {
                case "transform":
                    let transform_component = new Transform(this)
                    transform_component.__create_from_data(component as ABD_transform_component)
                    this.transform = transform_component
                    this.components.push(transform_component)
                    break;
            
                default:
                    break;
            }
        });
    }
}