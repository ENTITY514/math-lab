import { Camera } from "../../Classes/Objects/ViewObjects/camera";
import { EmptyObject } from "../../Classes/Objects/ViewObjects/empty";
import { ParticleSystem } from "../../Classes/Objects/ViewObjects/particle_system";
import { Primitive } from "../../Classes/Objects/ViewObjects/primitive";
import { Sprite } from "../../Classes/Objects/ViewObjects/sprite";
import { Text } from "../../Classes/Objects/ViewObjects/text";
import { ObjectTypes } from "../../Types/object_types";
import { Engine } from "../../core";
import { Module } from "../module";

export class ObjectsModule extends Module {
    objects: Array<Primitive>;
    active_object: Primitive | null
    camera: Camera
    constructor(engine: Engine) {
        super(engine)
        this.objects = []
        this.active_object = null
        this.camera = new Camera(this.engine.app, this.engine.data_module)

    }

    setActiveObject(object: Primitive) {
        this.active_object = object
    }

    findByTag(tag: string): Array<Primitive> {
        let obj: Primitive[] = []
        this.objects.forEach(element => {
            if (element.tag === tag) {
                obj.push(element)
            }
        });
        return obj
    }

    createObject(type: ObjectTypes, name?: string): Primitive {
        let object: Sprite | Primitive | null | ParticleSystem
        switch (type) {
            case ObjectTypes.SPRITE:
                object = new Sprite()
                break;

            case ObjectTypes.PARTICLESYSTEM:
                object = new ParticleSystem(name ? name : "particle_system", 1000, 10, 1, 5, 10, 1)
                break;

            case ObjectTypes.TEXT:
                object = new Text()
                break;

            case ObjectTypes.EMPTYOBJECT:
                object = new EmptyObject()
                if (!this.engine.data_module.is_dev_mode) {
                    object.display_object.alpha = 0
                }
                break;

            default:
                object = new Primitive("primitive")
                break;
        }
        this.objects.push(object);


        if (this.engine.data_module.is_dev_mode) {
            object.display_object.buttonMode = true
            object.display_object.interactive = true
            object.display_object.on("mousedown", (e) => {
                this.active_object = object
                this.engine.tool_module.update_tool_state(true)
            })
        }

        if (this.engine.dev_camera) {
            object.transform.setPosition((-this.engine.dev_camera.position.x + this.engine.app.view.width / 2) / this.engine.dev_camera.world.scale.x,
                (-this.engine.dev_camera.position.y + this.engine.app.view.height / 2) / this.engine.dev_camera.world.scale.y)
        }
        this.engine.app.stage.addChild(object.display_object);
        return object
    }

    clear() {
        this.active_object = null
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.display_object)
        });
        this.objects = []
    }

    deleteObject(obj: Primitive | null) {
        if (obj) {
            this.engine.app.stage.removeChild(obj.display_object)
            for (let i = 0; i < this.objects.length; i++) {
                if (obj === this.objects[i]) {
                    this.objects.splice(i, 1)
                }
            }
        }
        this.active_object = null
    }
}