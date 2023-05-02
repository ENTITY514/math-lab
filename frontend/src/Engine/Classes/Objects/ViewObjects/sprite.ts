import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { TextureFile } from "../DataObjects/texture_file";
import { GraphicsComponent } from "../components/Graphic/graphic_component";
import { ScriptComponent } from "../components/Script/script_component";
import { SpriteData, TransformComponentData, GraphicComponentData, ScriptComponentData } from "../../../Types/objects_interfaces";
import { ObjectTypes } from "../../../Types/object_types";

export class Sprite extends Primitive {
    display_object!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    texture_file!: TextureFile | null
    scripts: {};
    constructor(
        name: string = "Sprite",
        type: ObjectTypes = ObjectTypes.SPRITE,
        texture_file?: TextureFile | undefined) {
        super(name, type)
        this.display_object = texture_file ? new PIXI.Sprite(texture_file.texture) : this.display_object = new PIXI.Sprite(PIXI.Texture.WHITE)
        this.texture_file = texture_file ? texture_file : null
        this.display_object.anchor.x = 0.5
        this.display_object.anchor.y = 0.5
        this.transform = new Transform(this)
        this.transform.setSize(200, 200)
        new GraphicsComponent(this)
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
            tag: this.tag,
            components: components
        } as SpriteData
    }

    __create_from_data(data: SpriteData) {
        this.setName(data.name)
        this.id = data.id
        this._type = data.type
        this.tag = data.tag
        this.components = []
        data.components.forEach(component => {
            switch (component.type) {
                case "transform":
                    let transform_component = new Transform(this)
                    transform_component.__create_from_data(component as TransformComponentData)
                    this.transform = transform_component
                    break;

                case "graphic":
                    let graphic_component = new GraphicsComponent(this)
                    graphic_component.__create_from_data(component as GraphicComponentData)
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