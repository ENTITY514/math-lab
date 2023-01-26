import { Engine } from "../../../main";
import { Module } from "../module";
import * as PIXI from "pixi.js"

export class ObjectsModule extends Module {
    constructor(engine: Engine) {
        super(engine)
    }
    createObject() {
        const bunny = PIXI.Sprite.from(PIXI.Texture.WHITE);
        bunny.anchor.set(0.5);
        bunny.x = this.engine.app.screen.width / 2;
        bunny.y = this.engine.app.screen.height / 2;
        this.engine.app.stage.addChild(bunny);
    }

    deleteObject() {

    }
}