import { Size2, Vector2 } from "../../../Types/math_types";
import { Component } from "./component";
import { Sprite } from "./spite";

export class Transform extends Component {
    object!: Sprite
    constructor(object: Sprite) {
        super(object, "transform")
        this.object = object
    }

    getPosition(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    setPosition(x: number, y: number) {
        this.object.sprite.position = { x, y }
    }

    getRotation(): number {
        return this.object.sprite.rotation
    }

    setRotation(rotation: number) {
        this.object.sprite.rotation = rotation
    }

    getAngle(): number {
        return this.object.sprite.angle
    }

    setAngle(angle: number) {
        return this.object.sprite.angle = angle
    }

    getSize(): Size2 {
        return { width: this.object.sprite.width, height: this.object.sprite.height }
    }

    setSize(size: Size2) {
        this.object.sprite.width = size.width
        this.object.sprite.height = size.height
    }
}