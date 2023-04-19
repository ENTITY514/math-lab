
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
    constructor(engine: Engine) {
        super(engine)
        this.objects = []
        this.active_object = null
        for (let i = 0; i < 1000; i++) {
            let obj = this.createObject(ObjectTypes.SPRITE)
            obj.transform.setPosition(Math.random() * 10000, Math.random() * 10000)
        }
    }

    setActiveObject(object: Primitive) {
        this.active_object = object
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

            default:
                object = new Primitive("primitive")
                break;
        }
        this.objects.push(object)
        object.display_object.buttonMode = true
        object.display_object.interactive = true
        object.display_object.on("mousedown", (e) => {
            this.active_object = object
            this.engine.tool_module.update_tool_state(true)
        })
        this.engine.app.stage.addChild(object.display_object);
        return object
    }

    clear() {
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.display_object)
        });
        this.objects = []
    }

    deleteObject() {
    }
}