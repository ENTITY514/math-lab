import { Engine } from "../../../main";
import { Module } from "../module";
import * as PIXI from "pixi.js"
import { Sprite } from "../../Objects/ViewObjects/spite";

export class ObjectsModule extends Module {
    objects!: Array<Sprite>;
    constructor(engine: Engine) {
        super(engine)
        this.objects = []
    }
    createObject() {
        const object = new Sprite()
        this.objects.push(object)
        this.engine.app.stage.addChild(object.sprite);
    }

    deleteObject() {
    }
}