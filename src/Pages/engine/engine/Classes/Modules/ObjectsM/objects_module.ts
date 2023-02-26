import { Engine } from "../../../main";
import { Module } from "../module";
import { Sprite } from "../../Objects/ViewObjects/sprite";
import { Primitive } from "../../Objects/ViewObjects/primitive";

export class ObjectsModule extends Module {
    objects: Array<Sprite>;
    active_object: Primitive | null
    constructor(engine: Engine) {
        super(engine)
        this.objects = []
        this.active_object = null
    }

    setActiveObject(object: Primitive) {
        this.active_object = object
    }

    createObject(): Sprite {
        const object = new Sprite()
        this.objects.push(object)
        if (this.engine.data_module.is_dev_mode) {
            object.sprite.buttonMode = true
            object.sprite.interactive = true
            object.sprite.on("mousedown", (e) => {
                this.active_object = object
                this.engine.tool_module.update_tool_state(true)
            })
        }
        this.engine.app.stage.addChild(object.sprite);
        this.engine.data_module.create_data_set()
        return object
    }

    clear() {
        this.objects.forEach(object => {
            this.engine.app.stage.removeChild(object.sprite)
        });
        this.objects = []
    }

    deleteObject() {
    }
}