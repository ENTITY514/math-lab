import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { ScriptComponent } from "../components/Script/script_component";
import { SpriteData, TransformComponentData, ScriptComponentData } from "../../../Types/objects_interfaces";
import { ObjectTypes } from "../../../Types/object_types";
import { DevAssets } from "../../../assets/get";

export class EmptyObject extends Primitive {
    display_object!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    scripts: {};
    constructor(
        name: string = "Empty",
        type: ObjectTypes = ObjectTypes.EMPTYOBJECT) {
        super(name, type)
        this.display_object = new PIXI.Sprite(PIXI.Texture.from(DevAssets.empty))
        this.display_object.anchor.x = 0.5
        this.display_object.anchor.y = 0.5
        this.transform = new Transform(this)
        this.transform.setSize(50, 50)
        new ScriptComponent(this)
        this.scripts = {}
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
        } as SpriteData
    }

    __create_from_data(data: SpriteData) {
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
                    break;

                case "script":
                    let script_component = new ScriptComponent(this)
                    script_component.__create_from_data(component as ScriptComponentData)
                    break;

                default:
                    break;
            }
        });
    }
}