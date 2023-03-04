import * as PIXI from 'pixi.js'
import { Assets } from '../../../../assets/get'
import { Vector2 } from '../../../Types/math_types'

export class DevCamera {
    world: PIXI.Container<PIXI.DisplayObject>
    position_!: Vector2
    mouse_coords_global!: {
        x: number
        y: number
    }
    move_camera: boolean
    camera_speed: number
    canvas: HTMLCanvasElement
    is_drag: boolean
    click_coor: { x: number, y: number }
    tiling_sprite!: PIXI.TilingSprite
    scale: number
    _bg_px = 5000
    constructor(app: PIXI.Application) {
        this.world = app.stage
        this.world.interactive = true
        this.world.buttonMode = true
        this.move_camera = true
        this.position = { x: 0, y: 0 }
        this.camera_speed = 20
        this.canvas = app.view
        this.is_drag = false
        this.click_coor = { x: 0, y: 0 }
        this.scale = 1
        this._createBG(app)



        this.canvas.onmousedown = (e: MouseEvent) => {
            if (e.button === 2) {
                this.is_drag = true
                this.click_coor = { x: e.offsetX, y: e.offsetY }
            }
        }

        this.canvas.onmouseup = (e: MouseEvent) => {
            if (e.button === 2) {
                this.is_drag = false
            }
        }

        this.canvas.onmousemove = (e: MouseEvent) => {
            if (this.is_drag) {
                this.world.x += e.movementX
                this.world.y += e.movementY
                const dx = this.mouse_coords_global.x - this.tiling_sprite.position.x
                const dy = this.mouse_coords_global.y - this.tiling_sprite.position.y

                if (dx < 1000 / this.scale) {
                    this.tiling_sprite.position.x -= 1000 / this.scale
                }
                if (dx > 3000 / this.scale) {
                    this.tiling_sprite.position.x += 1000 / this.scale
                }
                if (dy < 1000 / this.scale) {
                    this.tiling_sprite.position.y -= 1000 / this.scale
                }
                if (dy > 3000 / this.scale) {
                    this.tiling_sprite.position.y += 1000 / this.scale
                }

            }
        }

        this.canvas.onwheel = (e: WheelEvent) => {
            this.scale -= e.deltaY / 5000
            if (this.scale < 0.1) {
                this.scale = 0.1
            }
            app.stage.scale.x = this.scale
            app.stage.scale.y = this.scale
        }


        this.world.on('pointermove', (e: PIXI.InteractionEvent) => {
            this.mouse_coords_global = e.data.getLocalPosition(this.world)
        })
    }

    _createBG(app: PIXI.Application) {
        const texture = PIXI.Texture.from(Assets.bg_square)
        this.tiling_sprite = new PIXI.TilingSprite(
            texture,
            this._bg_px * 2,
            this._bg_px * 2,
        );
        this.tiling_sprite.position.x = -this._bg_px
        this.tiling_sprite.position.y = -this._bg_px
        this.tiling_sprite.scale.x = 1
        this.tiling_sprite.scale.y = 1
        this.tiling_sprite.alpha = 1
        this.tiling_sprite.tint = 0x555555
        app.stage.addChild(this.tiling_sprite);
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
}