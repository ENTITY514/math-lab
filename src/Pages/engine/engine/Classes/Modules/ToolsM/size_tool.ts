import * as PIXI from 'pixi.js'
import { Engine } from '../../../main'
import { TextureFile } from '../../Objects/DataObjects/texture_file'
import { Sprite } from '../../Objects/ViewObjects/sprite'
import { DevAssets } from '../assets/get'
import { tools_name } from './tools_module'

export class SizeTool {
    position: {
        x: number
        y: number
    }
    scale: {
        x: number
        y: number
    }
    isVisible: boolean
    base_arrow_texture: TextureFile
    base_point_texture: TextureFile
    objects: Sprite[]
    _drag_x!: boolean
    _drag_y!: boolean
    _drag_right!: boolean
    _drag_left!: boolean
    _drag_top!: boolean
    _drag_bottom!: boolean
    name: tools_name
    engine: Engine
    constructor(engine: Engine) {
        this.name = tools_name.SIZE_TOOL
        this.isVisible = false
        this.position = { x: 0, y: 0 }
        this.scale = { x: 0.3, y: 0.3 }
        this.engine = engine

        this.base_arrow_texture = new TextureFile("arrow size", DevAssets.arrow_right, this.engine.dev_file_system.root)
        this.base_point_texture = new TextureFile("point size", DevAssets.point, this.engine.dev_file_system.root)

        this.engine.dev_file_system.active_dir.addFile(this.base_arrow_texture)
        this.engine.dev_file_system.active_dir.addFile(this.base_point_texture)

        this.objects = []

        const arrow_right = new Sprite('move arrow right', 'Arrow', this.base_arrow_texture)
        const arrow_top = new Sprite('move arrow top', 'Arrow', this.base_arrow_texture)
        const arrow_left = new Sprite('move arrow left', 'Arrow', this.base_arrow_texture)
        const arrow_down = new Sprite('move arrow down', 'Arrow', this.base_arrow_texture)
        const point = new Sprite('point', 'Point', this.base_point_texture)

        this.objects.push(arrow_right)
        this.objects.push(arrow_top)
        this.objects.push(arrow_left)
        this.objects.push(arrow_down)
        this.objects.push(point)

        window.addEventListener('mouseup', () => {
            this._drag_right = false
            this._drag_bottom = false
            this._drag_left = false
            this._drag_top = false
            this._drag_x = false
            this._drag_y = false
        });

        this.objects.forEach(object => {
            object.sprite.anchor.set(0.5, 0.5)
            object.sprite.interactive = true
            object.transform.setSize(object.transform.size.width * this.scale.x, object.transform.size.height * this.scale.y)
            switch (object.name) {
                case 'move arrow right':
                    object.transform.setAngle(0)
                    object.sprite.on('mousedown', () => {
                        this._drag_right = true
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_right = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_right) {
                            this._setSquare('right', e.data.getLocalPosition(object.sprite.parent).x)
                        }
                    });
                    break;
                case 'move arrow top':
                    object.transform.setAngle(270)
                    object.sprite.on('mousedown', () => {
                        this._drag_top = true
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_top = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_top) {
                            this._setSquare('top', e.data.getLocalPosition(object.sprite.parent).y)
                        }
                    });
                    break;
                case 'move arrow left':
                    object.transform.setAngle(180)
                    object.sprite.on('mousedown', () => {
                        this._drag_left = true
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_left = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_left) {
                            this._setSquare('left', e.data.getLocalPosition(object.sprite.parent).x)
                        }
                    });
                    break;
                case 'move arrow down':
                    object.transform.setAngle(90)
                    object.sprite.on('mousedown', () => {
                        this._drag_bottom = true
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_bottom = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_bottom) {
                            this._setSquare('bottom', e.data.getLocalPosition(object.sprite.parent).y)
                        }
                    });
                    break;

                case 'point':
                    object.sprite.anchor.set(0.5, 0.5)
                    break;

                default:
                    break;
            }
            object.sprite.position.x = this.position.x
            object.sprite.position.y = this.position.y
        });
    }

    setScale(x: number, y: number) {
        this.scale = { x, y }
        this.objects.forEach(object => {
            object.transform.size.width *= this.scale.x
            object.transform.size.height *= this.scale.y
        });
    }

    setPosition(x: number, y: number) {
        this.position = { x, y }
    }

    setActive() {
        if (this.engine.object_module.active_object !== null) {
            this.setPosition(this.engine.object_module.active_object.transform.position.x, this.engine.object_module.active_object.transform.position.y)
            const width = this.engine.object_module.active_object.transform.size.width / 2
            const height = this.engine.object_module.active_object.transform.size.height / 2
            this.objects[0].transform.setPosition(this.position.x + width, this.position.y)
            this.objects[1].transform.setPosition(this.position.x, this.position.y - height)
            this.objects[2].transform.setPosition(this.position.x - width, this.position.y)
            this.objects[3].transform.setPosition(this.position.x, this.position.y + height)
            this.objects[4].transform.setPosition(this.position.x, this.position.y)
            this.objects.forEach(object => {
                this.engine.app.stage.addChild(object.sprite)
            });
        }
    }

    _setSquare(edge: string, pos_value: number) {
        if (this.engine.object_module.active_object !== null) {
            switch (edge) {
                case 'right':
                    this.engine.object_module.active_object.transform.setSize(
                        (pos_value - this.engine.object_module.active_object.transform.position.x) * 2,
                        this.engine.object_module.active_object.transform.size.height)
                    break;
                case 'left':
                    this.engine.object_module.active_object.transform.setSize(
                        (this.engine.object_module.active_object.transform.position.x - pos_value) * 2,
                        this.engine.object_module.active_object.transform.size.height)
                    break;
                case 'bottom':
                    this.engine.object_module.active_object.transform.setSize(
                        this.engine.object_module.active_object.transform.size.width,
                        (pos_value - this.engine.object_module.active_object.transform.position.y) * 2
                    )
                    break;
                case 'top':
                    this.engine.object_module.active_object.transform.setSize(
                        this.engine.object_module.active_object.transform.size.width,
                        (this.engine.object_module.active_object.transform.position.y - pos_value) * 2)
                    break;
                default:
                    break;
            }
            const width = this.engine.object_module.active_object.transform.size.width / 2
            const height = this.engine.object_module.active_object.transform.size.height / 2
            this.objects[0].transform.setPosition(this.position.x + width, this.position.y)
            this.objects[1].transform.setPosition(this.position.x, this.position.y - height)
            this.objects[2].transform.setPosition(this.position.x - width, this.position.y)
            this.objects[3].transform.setPosition(this.position.x, this.position.y + height)
            this.objects[4].transform.setPosition(this.position.x, this.position.y)
        }

    }

    setNonActive() {
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.sprite)
        });
    }

    update() {
    }
}
