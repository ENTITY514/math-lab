import { Entity } from "./entity";

export class Sprite extends Entity {
    constructor(name: string = "object") {
        super(name, "sprite")
    }
}
