import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";

export class Sprite extends Primitive {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    constructor(name: string = "Sprite", type:string = "sprite") {
        super(name, type)
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        this.transform = new Transform(this)
    }
}