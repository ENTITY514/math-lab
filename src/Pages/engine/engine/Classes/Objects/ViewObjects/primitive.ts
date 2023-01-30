import { Entity } from "./entity";
import * as PIXI from "pixi.js"
import { Component } from "../components/component";
import { Transform } from "../components/Transform/transform_component";

export class Primitive extends Entity {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    transform: Transform
    constructor(name: string = "primitive", type: string = "primitive") {
        super(name, type)
        this.sprite = new PIXI.Sprite(PIXI.Texture.EMPTY)
        this.transform = new Transform(this)
    }
}