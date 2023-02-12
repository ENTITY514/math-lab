import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { TextureFile } from "../DataObjects/texture_file";

export class Sprite extends Primitive {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    constructor(
        name: string = "Sprite",
        type: string = "sprite",
        texture_file?: TextureFile | undefined) {
        super(name, type)
        this.sprite = texture_file ? new PIXI.Sprite(texture_file.texture) : this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        this.sprite.anchor.x = 0.5
        this.sprite.anchor.y = 0.5
        this.transform = new Transform(this)
        this.transform.setSize(100, 100)
    }
}