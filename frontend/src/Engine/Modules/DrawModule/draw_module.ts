import { Engine } from "../../core";
import { Module } from "../module";
import * as PIXI from "pixi.js"


export class DrawModule extends Module {
    is_draw_mode: boolean
    is_draw: boolean;
    graphics: PIXI.Graphics;
    pos_array: Array<{
        x: number
        y: number
    }>
    color: number
    size: number
    constructor(engine: Engine) {
        super(engine)
        this.is_draw_mode = false
        this.is_draw = false
        this.pos_array = []
        this.size = 10
        this.color = 0xFFFFFF
        this.graphics = new PIXI.Graphics();
        this.engine.app.stage.addChild(this.graphics)
        this.engine.canvasContainer?.addEventListener("mousedown", (e: MouseEvent) => { if (e.button === 0) this.is_draw = true })
        this.engine.canvasContainer?.addEventListener("mouseup", (e: MouseEvent) => { if (e.button === 0) this.is_draw = false })

        this.engine.app.stage.on("pointermove", (e: PIXI.InteractionEvent) => {
            if (this.is_draw_mode) {
                if (this.is_draw) {
                    let pos = e.data.getLocalPosition(this.engine.app.stage)
                    this.pos_array.push({ x: Math.trunc(pos.x), y: Math.trunc(pos.y) })
                    this.graphics.beginFill(this.color);
                    this.graphics.drawCircle(pos.x, pos.y, this.size);
                    this.graphics.endFill();
                }
            }
        })
    }
    __get_data__() {
        let arr: Array<Array<number>> = []
        this.pos_array.forEach(pos => {
            arr.push([pos.x, pos.y])
        });
        return arr
    }

    __create_from_data(data: Array<Array<number>>) {
        this.graphics.clear()
        data.forEach(pos => {
            this.graphics.beginFill(this.color);
            this.graphics.drawCircle(pos[0], pos[1], this.size);
            this.graphics.endFill();
        });
    }
}
