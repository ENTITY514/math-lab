import * as PIXI from 'pixi.js'
import { Assets } from '../../../assets/get'
import { TextureFile } from '../../Classes/Objects/DataObjects/texture_file'
import { Sprite } from '../../Classes/Objects/ViewObjects/sprite'
import { Engine } from '../../core'
import { DevAssets } from '../../assets/get'
import { tools_name } from './tools_module'

export class RotateTool {
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
    objects: Sprite[]
    _drag: boolean
    angle_click: number
    name: tools_name
    engine: Engine
    constructor(engine: Engine) {
        this.engine = engine
        this._drag = false
        this.name = tools_name.ROTATE_TOOL
        this.isVisible = false
        this.position = { x: 0, y: 0 }
        this.scale = { x: 1, y: 1 }
        this.base_arrow_texture = new TextureFile("rotate", Assets.transofrm_rotation, this.engine.dev_file_system.root)
        this.engine.dev_file_system.root.addFile(this.base_arrow_texture)
        this.objects = []
        this.angle_click = 0

        const arrow = new Sprite(
            'rotate arrow',
            undefined,
            this.base_arrow_texture
        )

        this.objects.push(arrow)

        window.addEventListener('mouseup', () => {
            this._drag = false
        });

        this.objects.forEach(object => {
            object.display_object.anchor.set(0.5, 0.5)
            object.display_object.interactive = true
            switch (object.name) {
                case 'rotate arrow':
                    object.transform.setAngle(0)
                    object.transform.setSize(100, 100)
                    object.display_object.on('mousedown', (e) => {
                        this._drag = true
                        const mouse_pos = e.data.getLocalPosition(object.display_object.parent)
                        const vector = { x: mouse_pos.x - this.position.x, y: mouse_pos.y - this.position.y }
                        const dist = Math.sqrt((vector.x * vector.x + vector.y * vector.y))
                        const norm = { x: vector.x / dist, y: vector.y / dist }
                        const angle = Math.atan2(norm.y, norm.x)
                        this.angle_click = angle - this.objects[0].transform.rotation

                    });
                    object.display_object.on('mouseup', () => {
                        this._drag = false
                    });
                    object.display_object.on('mousemove', (e) => {
                        if (this._drag) {
                            const mouse_pos = e.data.getLocalPosition(object.display_object.parent)
                            const vector = { x: mouse_pos.x - this.position.x, y: mouse_pos.y - this.position.y }
                            const dist = Math.sqrt((vector.x * vector.x + vector.y * vector.y))
                            const norm = { x: vector.x / dist, y: vector.y / dist }
                            const angle = Math.atan2(norm.y, norm.x)
                            this.objects[0].transform.setRotation(angle - this.angle_click)
                        }
                    });
                    break;

                default:
                    break;
            }
            object.transform.setPosition(this.position.x, this.position.y)
        });
    }

    setScale(x: number, y: number) {
        this.scale = { x, y }
        this.objects.forEach(boject => {
            boject.transform.setSize(boject.transform.size.width * this.scale.x, boject.transform.size.height * this.scale.y)
            boject.display_object.scale.x = this.scale.x
            boject.display_object.scale.y = this.scale.y
        });
    }

    setPosition(x: number, y: number) {
        this.position = { x, y }
        this.objects[0].transform.setPosition(this.position.x, this.position.y)
    }

    setActive() {
        this.objects.forEach(object => {
            this.engine.app.stage.addChild(object.display_object)
        });
        if (this.engine.object_module.active_object !== null) {
            this.setPosition(this.engine.object_module.active_object.transform.position.x, this.engine.object_module.active_object.transform.position.y)
            this.objects[0].transform.setRotation(this.engine.object_module.active_object.transform.rotation)
        }
    }

    setNonActive() {
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.display_object)
        });

    }

    update() {
        if (this.engine.object_module.active_object !== null) {
            this.engine.object_module.active_object.transform.setRotation(this.objects[0].transform.rotation)
        }

    }
}
