import { nanoid } from "nanoid"
import { EntityData } from "../../../Types/objects_interfaces"
import { DisplayObject } from "pixi.js"
import { ObjectTypes } from "../../../Types/object_types"

export class Entity implements EntityData {
    _name: string
    _type: ObjectTypes
    id: string
    display_object: DisplayObject | undefined
    _tag: string = ""
    constructor(name: string, type: ObjectTypes = ObjectTypes.ENTITY) {
        this._name = name
        this._type = type
        this.id = nanoid()
    }

    setTag(tag: string): void {
        if (tag !== "") {
            this._tag = tag
        }
    }

    set tag(tag: string) {
        if (tag !== "") {
            this._tag = tag
        }
    }

    getTag(): string {
        return this._tag
    }

    get tag(): string {
        return this._tag
    }

    setName(name: string): void {
        if (name !== "") {
            this._name = name
        }
    }

    set name(name: string) {
        if (name !== "") {
            this._name = name
        }
    }

    getName(): string {
        return this._name
    }

    get name(): string {
        return this._name
    }

    get type(): ObjectTypes {
        return this._type
    }

    getType(): ObjectTypes {
        return this._type
    }

    __get_data__() {
        return {
            name: this.name,
            type: this.type,
            id: this.id,
        } as EntityData
    }

    __create_from_data(data: EntityData) {
        this.setName(data.name)
        this.id = data.id
        this._type = data.type
    }
}