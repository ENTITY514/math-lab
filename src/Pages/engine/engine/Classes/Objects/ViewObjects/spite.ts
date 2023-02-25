import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { TextureFile } from "../DataObjects/texture_file";
import { GraphicsComponent } from "../components/Graphic/graphic_component";
import { ABD_graphic_component, ABD_sprite, ABD_transform_component } from "../../Modules/TestM/data_of_objects";
import { ScriptComponent } from "../components/Script/script_component";

export class Sprite extends Primitive {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    texture_file!: TextureFile | null
    constructor(
        name: string = "Sprite",
        type: string = "sprite",
        texture_file?: TextureFile | undefined) {
        super(name, type)
        this.sprite = texture_file ? new PIXI.Sprite(texture_file.texture) : this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        this.texture_file = texture_file ? texture_file : null
        this.sprite.anchor.x = 0.5
        this.sprite.anchor.y = 0.5
        this.transform = new Transform(this)
        this.transform.setSize(200, 200)
        new GraphicsComponent(this)
        new ScriptComponent(this)
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
        } as ABD_sprite
    }

    __create_from_data(data: ABD_sprite) {
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

                case "graphic":
                    let graphic_component = new GraphicsComponent(this)
                    graphic_component.__create_from_data(component as ABD_graphic_component)
                    this.components.push(graphic_component)
                    break;

                default:
                    break;
            }
        });
    }
}