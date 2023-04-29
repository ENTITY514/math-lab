import * as PIXI from 'pixi.js'
import { Vector2 } from '../../../Types/math_types'
import { Primitive } from './primitive'
import { ObjectTypes } from '../../../Types/object_types'
import { DevAssets } from '../../../assets/get'
import { DataModule } from '../../../Modules/DataM/data_module'

export class Camera extends Primitive {
    display_object: PIXI.Sprite
    world: PIXI.Container<PIXI.DisplayObject>
    mouse_coords_global!: {
        x: number
        y: number
    }
    canvas: HTMLCanvasElement
    is_drag: boolean
    click_coor: { x: number, y: number }
    scale: number
    screen_w: number
    screen_h: number
    borders: Array<PIXI.Sprite>
    app: PIXI.Application
    data_module: DataModule
    border_r: number = 8
    constructor(app: PIXI.Application, data_module: DataModule) {
        super("camera", ObjectTypes.CAMERA)
        this.app = app
        this.data_module = data_module
        this.display_object = new PIXI.Sprite(PIXI.Texture.from(DevAssets.camera))
        this.display_object.anchor.x = 0.5
        this.display_object.anchor.y = 0.5
        this.display_object.scale.x = 0.2
        this.display_object.scale.y = 0.2

        this.screen_w = Number(data_module.project_data.screen_settings.width)
        this.screen_h = Number(data_module.project_data.screen_settings.height)

        this.borders = []

        this.world = app.stage
        this.world.interactive = true
        this.world.buttonMode = true
        this.position = { x: 0, y: 0 }
        this.canvas = app.view
        this.is_drag = false
        this.click_coor = { x: 0, y: 0 }
        this.scale = 1

        this.createBorder()



        this.world.on('pointermove', (e: PIXI.InteractionEvent) => {
            this.mouse_coords_global = e.data.getLocalPosition(this.world)
        })
    }

    createBorder() {
        let right_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        right_border.anchor.x = 0.5
        right_border.anchor.y = 0.5
        right_border.width = this.border_r
        right_border.height = this.screen_h + this.border_r * 3
        right_border.position.y = this.transform.position.y
        right_border.position.x = this.transform.position.x + this.screen_w / 2 + this.border_r


        let left_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        left_border.anchor.x = 0.5
        left_border.anchor.y = 0.5
        left_border.width = this.border_r
        left_border.height = this.screen_h + this.border_r * 3
        left_border.position.y = this.transform.position.y
        left_border.position.x = this.transform.position.x - this.screen_w / 2 - this.border_r


        let top_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        top_border.anchor.x = 0.5
        top_border.anchor.y = 0.5
        top_border.width = this.screen_w + this.border_r * 3
        top_border.height = this.border_r
        top_border.position.y = this.transform.position.y - this.screen_h / 2 - this.border_r
        top_border.position.x = this.transform.position.x

        let bottom_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        bottom_border.anchor.x = 0.5
        bottom_border.anchor.y = 0.5
        bottom_border.width = this.screen_w + this.border_r * 3
        bottom_border.height = this.border_r
        bottom_border.position.y = this.transform.position.y + this.screen_h / 2 + this.border_r
        bottom_border.position.x = this.transform.position.x

        this.borders.push(right_border)
        this.borders.push(left_border)
        this.borders.push(top_border)
        this.borders.push(bottom_border)

        this.app.stage.addChild(right_border)
        this.app.stage.addChild(left_border)
        this.app.stage.addChild(top_border)
        this.app.stage.addChild(bottom_border)
    }

    setPosition(x: number = this.world.x, y: number = this.world.y) {
        this.world.x = x
        this.world.y = y
    }

    getPosition() {
        return { x: this.world.x, y: this.world.y }
    }

    get position(): Vector2 {
        return { x: this.world.x, y: this.world.y }
    }

    set position(pos: Vector2) {
        this.world.x = pos.x
        this.world.y = pos.y
    }

    update(): void {
        this.borders[0].position.y = this.transform.position.y
        this.borders[0].position.x = this.transform.position.x + this.screen_w / 2 + this.border_r


        this.borders[1].position.y = this.transform.position.y
        this.borders[1].position.x = this.transform.position.x - this.screen_w / 2 - this.border_r


        this.borders[2].position.y = this.transform.position.y - this.screen_h / 2 - this.border_r
        this.borders[2].position.x = this.transform.position.x

        this.borders[3].position.y = this.transform.position.y + this.screen_h / 2 + this.border_r
        this.borders[3].position.x = this.transform.position.x
    }
}