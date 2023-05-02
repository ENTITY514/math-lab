import * as PIXI from 'pixi.js'
import { Vector2 } from '../../../Types/math_types'
import { DevAssets } from '../../../assets/get'
import { DataModule } from '../../../Modules/DataM/data_module'
import { CameraData } from '../../../Types/objects_interfaces'

export class Camera {
    app: PIXI.Application
    data_module: DataModule
    is_drag: boolean
    display_object: PIXI.Sprite
    border_width: number = 10
    borders: Array<PIXI.Sprite>
    world: PIXI.Container<PIXI.DisplayObject>
    private width: number
    private height: number
    constructor(app: PIXI.Application, data_module: DataModule) {
        this.app = app;
        this.data_module = data_module
        this.width = Number(this.data_module.project_data.screen_settings.width)
        this.height = Number(this.data_module.project_data.screen_settings.height)
        this.is_drag = false
        this.display_object = new PIXI.Sprite(PIXI.Texture.EMPTY)
        this.borders = []
        this.world = this.app.stage
        if (this.data_module.is_dev_mode) {
            this.display_object = new PIXI.Sprite(PIXI.Texture.from(DevAssets.camera))
            this.display_object.anchor.x = 0.5
            this.display_object.anchor.y = 0.5
            this.display_object.scale.x = 0.2
            this.display_object.scale.y = 0.2
            this.__createBorder__()
            this.update = () => {
                this.borders[0].position.y = this.display_object.position.y
                this.borders[0].position.x = this.display_object.position.x + this.width / 2 + this.border_width / 2


                this.borders[1].position.y = this.display_object.position.y
                this.borders[1].position.x = this.display_object.position.x - this.width / 2 - this.border_width / 2


                this.borders[2].position.y = this.display_object.position.y - this.height / 2 - this.border_width / 2
                this.borders[2].position.x = this.display_object.position.x

                this.borders[3].position.y = this.display_object.position.y + this.height / 2 + this.border_width / 2
                this.borders[3].position.x = this.display_object.position.x
            }

            this.display_object.on("mousedown", (e: PIXI.InteractionEvent) => {
                if (e.data.button === 0) {
                    this.is_drag = true

                }
            })

            this.display_object.on("mouseup", (e: PIXI.InteractionEvent) => {
                if (e.data.button === 0) {
                    this.is_drag = false
                }
            })

            this.display_object.on("mousemove", (e: PIXI.InteractionEvent) => {
                if (this.is_drag) {
                    this.display_object.position = e.data.getLocalPosition(this.world)
                }
            })

        }
        this.display_object.interactive = true
        this.display_object.buttonMode = true
        this.app.stage.addChild(this.display_object)


    }
    private __createBorder__() {
        let right_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        right_border.anchor.x = 0.5
        right_border.anchor.y = 0.5
        right_border.width = this.border_width
        right_border.height = this.height + this.border_width * 2
        right_border.position.y = this.display_object.position.y
        right_border.position.x = this.display_object.position.x + this.width / 2 + this.border_width / 2


        let left_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        left_border.anchor.x = 0.5
        left_border.anchor.y = 0.5
        left_border.width = this.border_width
        left_border.height = this.height + this.border_width * 2
        left_border.position.y = this.display_object.position.y
        left_border.position.x = this.display_object.position.x - this.width / 2 - this.border_width / 2


        let top_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        top_border.anchor.x = 0.5
        top_border.anchor.y = 0.5
        top_border.width = this.width + this.border_width * 2
        top_border.height = this.border_width
        top_border.position.y = this.display_object.position.y - this.height / 2 - this.border_width / 2
        top_border.position.x = this.display_object.position.x

        let bottom_border = new PIXI.Sprite(PIXI.Texture.WHITE)
        bottom_border.anchor.x = 0.5
        bottom_border.anchor.y = 0.5
        bottom_border.width = this.width + this.border_width * 2
        bottom_border.height = this.border_width
        bottom_border.position.y = this.display_object.position.y + this.height / 2 + this.border_width / 2
        bottom_border.position.x = this.display_object.position.x

        this.borders.push(right_border)
        this.borders.push(left_border)
        this.borders.push(top_border)
        this.borders.push(bottom_border)

        this.app.stage.addChild(right_border)
        this.app.stage.addChild(left_border)
        this.app.stage.addChild(top_border)
        this.app.stage.addChild(bottom_border)
    }

    update(): void {

    }

    setPosition(x: number, y: number) {
        this.world.x = -x + (this.width / 2)
        this.world.y = -y + (this.height / 2)
    }

    getPosition() {
        return { x: -this.world.x - this.app.view.width / 2, y: -this.world.y - this.app.view.height / 2 }
    }

    get position(): Vector2 {
        return { x: -this.world.x - this.app.view.width / 2, y: -this.world.y - this.app.view.height / 2 }
    }

    set position(pos: Vector2) {
        this.world.x = -pos.x + this.app.view.width / 2
        this.world.y = -pos.y + this.app.view.height / 2
    }

    __create_from_data(data: CameraData): void {
        this.setPosition(data.position.x, data.position.y)
    }

    __get_data__(): CameraData {
        return { position: { x: this.display_object.position.x, y: this.display_object.position.y } }
    }
}