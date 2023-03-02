import { Entity } from "./entity";
import * as PIXI from "pixi.js"
import { Component } from "../components/component";
import { Transform } from "../components/Transform/transform_component";
import { PrimitiveData, TransformComponentData } from "../../../Types/objects_interfaces";

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
        } as PrimitiveData
    }

    __create_from_data(data: PrimitiveData) {
        this.setName(data.name)
        this.id = data.id
        this._type = data.type
        this.components = []
        data.components.forEach(component => {
            switch (component.type) {
                case "transform":
                    let transform_component = new Transform(this)
                    transform_component.__create_from_data(component as TransformComponentData)
                    this.transform = transform_component
                    this.components.push(transform_component)
                    break;
            
                default:
                    break;
            }
        });
    }
}