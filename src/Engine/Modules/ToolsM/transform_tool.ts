import { DevAssets } from "../assets/get";
import * as PIXI from "pixi.js"
import { tools_name } from "./tools_module";
import { Sprite } from "../../Classes/Objects/ViewObjects/sprite";
import { TextureFile } from "../../Classes/Objects/DataObjects/texture_file";
import { Engine } from "../../core";
import { Vector2 } from "../../Types/math_types";

export class TransformTool {
    position: Vector2
    scale: {
        x: number
        y: number
    }
    isVisible: boolean
    objects: Sprite[]
    _drag_right: boolean = false;
    _drag_left: boolean = false;
    _drag_top: boolean = false;
    _drag_bottom: boolean = false;
    dist: number
    name: tools_name
    engine: Engine
    base_arrow_texture: TextureFile
    base_point_texture: TextureFile
    constructor(engine: Engine) {
        this.name = tools_name.TRANSFORM_TOOL
        this.isVisible = false
        this.position = { x: 0, y: 0 }
        this.scale = { x: 0.3, y: 0.3 }
        this.engine = engine
        this.dist = 0

        this.objects = []

        //Создание файлов текстуры

        this.base_arrow_texture = new TextureFile("__dev__arrow_texture__", DevAssets.arrow_right, this.engine.dev_file_system.root)
        this.base_point_texture = new TextureFile("__dev__point_texture__", DevAssets.point, this.engine.dev_file_system.root)

        this.engine.dev_file_system.active_dir.addFile(this.base_arrow_texture)
        this.engine.dev_file_system.active_dir.addFile(this.base_point_texture)

        //Создание спрайтов для инструмента

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

        //Добавление слушителя события при отпускание мыши

        window.addEventListener('mouseup', () => {
            this._drag_right = false
            this._drag_bottom = false
            this._drag_left = false
            this._drag_top = false
        });

        this.objects.forEach(object => {
            object.sprite.anchor.set(-0.1, 0.5)
            object.sprite.interactive = true
            object.transform.setSize(object.transform.size.width * this.scale.x, object.transform.size.height * this.scale.y)
            switch (object.name) {
                case 'move arrow right':
                    object.sprite.angle = 0
                    object.sprite.on('mousedown', (e) => {
                        this._drag_right = true
                        this.dist = e.data.getLocalPosition(object.sprite.parent).x - this.position.x
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_right = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_right) {
                            this._setPosition(e.data.getLocalPosition(object.sprite.parent).x - this.dist, this.position.y)
                        }
                    });
                    break;
                case 'move arrow top':
                    object.sprite.angle = 270
                    object.sprite.on('mousedown', (e) => {
                        this._drag_top = true
                        this.dist = e.data.getLocalPosition(object.sprite.parent).y - this.position.y
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_top = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_top) {
                            this._setPosition(this.position.x, e.data.getLocalPosition(object.sprite.parent).y - this.dist)
                        }
                    });
                    break;
                case 'move arrow left':
                    object.sprite.angle = 180
                    object.sprite.on('mousedown', (e) => {
                        this._drag_left = true
                        this.dist = e.data.getLocalPosition(object.sprite.parent).x - this.position.x
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_left = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_left) {
                            this._setPosition(e.data.getLocalPosition(object.sprite.parent).x - this.dist, this.position.y)
                        }
                    });
                    break;
                case 'move arrow down':
                    object.sprite.angle = 90
                    object.sprite.on('mousedown', (e) => {
                        this._drag_bottom = true
                        this.dist = e.data.getLocalPosition(object.sprite.parent).y - this.position.y
                    });
                    object.sprite.on('mouseup', () => {
                        this._drag_bottom = false
                    });
                    object.sprite.on('mousemove', (e) => {
                        if (this._drag_bottom) {
                            this._setPosition(this.position.x, e.data.getLocalPosition(object.sprite.parent).y - this.dist)
                        }
                    });
                    break;

                case 'point':
                    object.sprite.anchor.set(0.5, 0.5)

                    object.sprite.on('mouseup', () => {
                        this._drag_left = false
                        this._drag_bottom = false
                        this._drag_right = false
                        this._drag_top = false
                    });

                    object.sprite.on('mousedown', () => {
                        this.dist = 0
                        this._drag_left = true
                        this._drag_bottom = true
                        this._drag_right = true
                        this._drag_top = true
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
        this.objects.forEach(object => {
            object.transform.setSize(object.transform.size.width * this.scale.x, object.transform.size.height * this.scale.y)
        });
    }

    _setPosition(x: number, y: number) {
        this.position = { x, y }
        this.objects.forEach(object => {
            object.transform.setPosition(this.position.x, this.position.y)
        });
    }

    setVisible(isVisible: boolean, app: PIXI.Application) {
        this.isVisible = isVisible
        this.objects.forEach(object => {
            if (this.isVisible) {
                app.stage.addChild(object.sprite)
            }
            else {
                app.stage.removeChild(object.sprite)
            }
        });
    }

    setActive() {
        this.objects.forEach(object => {
            this.engine.app.stage.addChild(object.sprite)
        });
        if (this.engine.object_module.active_object !== null) {
            this._setPosition(this.engine.object_module.active_object.transform.position.x, this.engine.object_module.active_object.transform.position.y)
        }
    }

    setNonActive() {
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.sprite)
        });
    }

    update() {
        this.objects.forEach(object => {
            object.transform.setPosition(this.position.x, this.position.y)
        });
        if (this.engine.object_module.active_object !== null) {
            this.engine.object_module.active_object.transform.setPosition(this.position.x, this.position.y)
        }
    }
}