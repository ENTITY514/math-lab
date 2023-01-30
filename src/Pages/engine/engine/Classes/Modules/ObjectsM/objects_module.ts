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

    setActiveObject() {

    }

    createObject() {
        const object = new Sprite()
        this.objects.push(object)
        this.engine.app.stage.addChild(object.sprite);
    }

    deleteObject() {
    }
}