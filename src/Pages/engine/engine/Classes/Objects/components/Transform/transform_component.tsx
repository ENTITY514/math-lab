import { Size2, Vector2 } from "../../../../Types/math_types";
import { Component } from "../component";
import { Sprite } from "../../ViewObjects/spite";
import { TransformView } from "./trasform_view";

export class Transform extends Component {
    object!: Sprite
    constructor(object: Sprite) {
        super(object, "transform")
        this.object = object
        this.object.components.push(this)
    }

    getPosition(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    get position(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    setPosition(x: number, y: number) {
        this.object.sprite.position = { x, y }
    }

    getRotation(): number {
        return this.object.sprite.rotation
    }

    get rotation(): number {
        return this.object.sprite.rotation
    }

    setRotation(rotation: number) {
        this.object.sprite.rotation = rotation
    }

    getAngle(): number {
        return this.object.sprite.angle
    }

    get angle(): number {
        return this.object.sprite.angle
    }

    setAngle(angle: number) {
        return this.object.sprite.angle = angle
    }

    getSize(): Size2 {
        return { width: this.object.sprite.width, height: this.object.sprite.height }
    }

    get size(): Size2 {
        return { width: this.object.sprite.width, height: this.object.sprite.height }
    }

    setSize(width: number, height: number) {
        this.object.sprite.width = width
        this.object.sprite.height = height
    }

    __react_view__() {
        return <TransformView object={this.object} key={this.id}/>
    }
}