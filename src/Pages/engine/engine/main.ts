import * as PIXI from "pixi.js"

export class PIXI_ENGINE {
    private static _instance: any
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    constructor() {
        if (typeof PIXI_ENGINE._instance === 'object') {
            return PIXI_ENGINE._instance
        }
        this.initRenderer();
        this.render();
        this.animate()
        PIXI_ENGINE._instance = this
        return PIXI_ENGINE._instance
    }

    addView(canvasContainer: HTMLDivElement) {
        this.canvasContainer = canvasContainer
        this.canvasContainer.appendChild(this.app.view);
        this.app.resizeTo = this.canvasContainer
    }

    initRenderer() {
        this.app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0x000000 });
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