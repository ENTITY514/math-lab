import { Engine } from "../../../main";
import { Module } from "../module";
import { Sprite } from "../../Objects/ViewObjects/spite";
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

    createObject() {
        const object = new Sprite()
        this.objects.push(object)
        if (this.engine.data_module.is_dev_mode) {
            console.log("true");
            object.sprite.buttonMode = true
            object.sprite.interactive = true
            object.sprite.on("mousedown", (e) => {
                console.log("active");
                
                this.active_object = object
            })
        }
        this.engine.app.stage.addChild(object.sprite);
    }

    deleteObject() {
    }
}