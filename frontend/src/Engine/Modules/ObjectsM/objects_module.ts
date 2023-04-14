
import { ParticleSystem } from "../../Classes/Objects/ViewObjects/particle_system";
import { Primitive } from "../../Classes/Objects/ViewObjects/primitive";
import { Sprite } from "../../Classes/Objects/ViewObjects/sprite";
import { Engine } from "../../core";
import { Module } from "../module";

export class ObjectsModule extends Module {
    objects: Array<Primitive>;
    active_object: Primitive | null
    constructor(engine: Engine) {
        super(engine)
        this.objects = []
        this.active_object = null
    }

    setActiveObject(object: Primitive) {
        this.active_object = object
    }

    createObject(type: string): Primitive {
        let object: Sprite | Primitive | null | ParticleSystem
        switch (type) {
            case "sprite":
                object = new Sprite()
                this.objects.push(object)
                if (this.engine.data_module.is_dev_mode) {
                    object.display_object.buttonMode = true
                    object.display_object.interactive = true
                    object.display_object.on("mousedown", (e) => {
                        this.active_object = object
                        this.engine.tool_module.update_tool_state(true)
                    })
                }
                this.engine.app.stage.addChild(object.display_object);
                break;

            case "ParticleSystem":
                object = new ParticleSystem("particle_system", "particle_system", 1000, 10, 1, 5, 10, 1)
                this.objects.push(object)
                if (this.engine.data_module.is_dev_mode) {
                    object.display_object.buttonMode = true
                    object.display_object.interactive = true
                    object.display_object.on("mousedown", (e) => {
                        this.active_object = object
                        this.engine.tool_module.update_tool_state(true)
                    })
                }
                this.engine.app.stage.addChild(object.display_object);
                break;

            default:
                object = new Primitive("primitive")
                break;
        }
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