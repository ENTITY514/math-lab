import { Size2, Vector2 } from "../../../Types/math_types";
import { Component } from "./component";
import { Sprite } from "./spite";

export class Transform extends Component {
    object!: Sprite
    constructor(object: Sprite) {
        super(object, "transform")
    }

    get position(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    set position(position: Vector2) {
        this.object.sprite.position = position
    }

    getPosition(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    setPosition(position: Vector2) {
        this.object.sprite.position = position
    }

    get rotation(): number {
        return this.object.sprite.rotation
    }

    set rotation(rotation: number) {
        this.object.sprite.rotation = rotation
    }

    getRotation(): number {
        return this.object.sprite.rotation
    }

    setRotation(rotation: number) {
        this.object.sprite.rotation = rotation
    }

    get angle(): number {
        return this.object.sprite.angle
    }

    set angle(angle: number) {
        this.object.sprite.angle = angle
    }

    getAngle(): number {
        return this.object.sprite.angle
    }

    setAngle(angle: number) {
        return this.object.sprite.angle = angle
    }

    get size(): Size2 {
        return { width: this.object.sprite.width, height: this.object.sprite.height }
    }

    set size(size: Size2) {
        this.object.sprite.width = size.width
        this.object.sprite.height = size.height
    }

    getSize(): Size2 {
        return { width: this.object.sprite.width, height: this.object.sprite.height }
    }

    setSize(size: Size2) {
        this.object.sprite.width = size.width
        this.object.sprite.height = size.height
    }
}