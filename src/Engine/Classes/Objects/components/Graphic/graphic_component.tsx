import { Component } from "../component";
import { Sprite } from "../../ViewObjects/sprite";
import { GraphicView } from "./graphic_view";
import { TextureFile } from "../../DataObjects/texture_file";
import * as PIXI from 'pixi.js'
import { Engine } from "../../../../core";
import { GraphicComponentData } from "../../../../Types/objects_interfaces";

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

    getTint(): number {
        return this.object.sprite.tint
    }

    getBlendMode(): PIXI.BLEND_MODES {
        return this.object.sprite.blendMode
    }

    setTexture(texture_file: TextureFile) {
        this.object.sprite.texture = texture_file.texture
        this.object.texture_file = texture_file
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

    __get_data__() {
        return {
            type: this.type,
            id: this.id,
            texture_file_name: this.getTextureFile()?.name,
            tint: this.getTint(),
            alpha: this.getOpacity(),
        } as GraphicComponentData
    }


    __create_from_data(data: GraphicComponentData): void {
        let engine = new Engine()
        this.type = data.type
        this.id = data.id
        this.changeTint(data.tint)
        this.changeOpacity(data.alpha)
        if (data.texture_file_name !== undefined) {
            this.setTexture(engine.file_system.root.findFirstFileByName(data.texture_file_name) as TextureFile)
        }
    }
}