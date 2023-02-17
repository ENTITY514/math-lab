import { Component } from "../component";
import { Sprite } from "../../ViewObjects/spite";
import { GraphicView } from "./graphic_view";
import { TextureFile } from "../../DataObjects/texture_file";
import * as PIXI from 'pixi.js'

export class GraphicsComponent extends Component {
    object!: Sprite
    constructor(object: Sprite) {
        super(object, "graphic")
        this.object = object
        this.object.components.push(this)
    }

    getTextureFile(): TextureFile | null {
        return this.object.texture_file
    }

    getOpacity(): number {
        return this.object.sprite.alpha
    }

    getTint():number {
        return this.object.sprite.tint
    }

    getBlendMode():PIXI.BLEND_MODES {
        return this.object.sprite.blendMode
    }

    setTexture(texture_file: TextureFile) {
        this.object.sprite.texture = texture_file.texture
        this.object.texture_file = texture_file
        console.log("texture_changed");
    }

    changeOpacity(value: number) {
        if (value > 0) {
            if (value <= 1) {
                this.object.sprite.alpha = value
            }
            else {
                this.object.sprite.alpha = 1
            }
        }
        console.log("alpha changed");

    }

    changeTint(value: number) {
        this.object.sprite.tint = value
    }

    changeBlendMode(blendMode: PIXI.BLEND_MODES) {
        this.object.sprite.blendMode = blendMode
    }

    __react_view__() {
        return <GraphicView component={this} key={this.id} />
    }
}