import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { TextureFile } from "../DataObjects/texture_file";
import { GraphicsComponent } from "../components/Graphic/graphic_component";

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
    }
}