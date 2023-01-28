import { Entity } from "./entity";
import * as PIXI from "pixi.js"
import { Component } from "./component";

export class Sprite extends Entity {
    sprite!: PIXI.Sprite;
    components: Array<Component> = [];
    constructor(name: string = "Sprite") {
        super(name, "sprite")
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
    }
}