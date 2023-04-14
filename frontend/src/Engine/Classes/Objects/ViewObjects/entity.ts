import { nanoid } from "nanoid"
import { EntityData } from "../../../Types/objects_interfaces"
import { DisplayObject } from "pixi.js"

export class Entity implements EntityData {
    _name: string
    _type: string
    id: string
    display_object: DisplayObject | undefined
    constructor(name: string, type: string) {
        this._name = name
        this._type = type
        this.id = nanoid()
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

    get type(): string {
        return this._type
    }

    getType(): string {
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