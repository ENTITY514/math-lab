import { Entity } from "./entity";
import * as PIXI from "pixi.js"

export class Primitive extends Entity {
    sprite!: PIXI.Sprite;
    constructor(name: string = "Primitive") {
        super(name, "primitive")
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
    }
}