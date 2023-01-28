import * as PIXI from "pixi.js"
import { ObjectsModule } from "./Classes/Modules/ObjectsM/objects_module"
import { Test } from "./Classes/Modules/TestM/test"

export class Engine {
    private static _instance: any
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    test_module!: Test
    object_module!: ObjectsModule
    constructor() {
        if (typeof Engine._instance === 'object') {
            return Engine._instance
        }
        this.test_module = new Test(this)
        this.object_module = new ObjectsModule(this)
        this.initRenderer();
        this.render();
        this.animate()
        Engine._instance = this
        return Engine._instance
    }

    addView(canvasContainer: HTMLDivElement) {
        this.canvasContainer = canvasContainer
        this.canvasContainer.style.display = "grid"
        if (this.canvasContainer.children.length < 1) {
            this.canvasContainer.appendChild(this.app.view);
            this.app.resizeTo = this.canvasContainer
        }
    }

    initRenderer() {
        this.app = new PIXI.Application({ width: 640, height: 320, backgroundColor: 0x000000 });
    }

    update() {
    }

    render() {
    }

    animate() {
        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
        });
    }
}