import { Engine } from "../../../main";
import * as PIXI from "pixi.js"

export class Test {
    engine: Engine
    constructor(engine: Engine) {
        this.engine = engine
    }

    createObject() {
        const bunny = PIXI.Sprite.from('/logo192.png');

        // center the sprite's anchor point
        bunny.anchor.set(0.5);

        // move the sprite to the center of the screen
        bunny.x = this.engine.app.screen.width / 2;
        bunny.y = this.engine.app.screen.height / 2;

        this.engine.app.stage.addChild(bunny);
    }
}