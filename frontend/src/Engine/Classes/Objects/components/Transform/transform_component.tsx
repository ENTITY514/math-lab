import { Size2, Vector2 } from "../../../../Types/math_types";
import { Component } from "../component";
import { TransformView } from "./trasform_view";
import { Primitive } from "../../ViewObjects/primitive";
import { TransformComponentData } from "../../../../Types/objects_interfaces";

export class Transform extends Component {
    object!: Primitive
    constructor(object: Primitive) {
        super(object, "transform")
        this.object = object
        this.object.components.push(this)
    }

    getPosition(): Vector2 {
        return { x: this.object.display_object.position.x, y: this.object.display_object.position.x }
    }

    get position(): Vector2 {
        return { x: this.object.display_object.position.x, y: this.object.display_object.position.y }
    }

    setPosition(x: number, y: number) {
        this.object.display_object.position = { x, y }
    }

    getRotation(): number {
        return this.object.display_object.rotation
    }

    get rotation(): number {
        return this.object.display_object.rotation
    }

    setRotation(rotation: number) {
        this.object.display_object.rotation = rotation
    }

    getAngle(): number {
        return this.object.display_object.angle
    }

    get angle(): number {
        return this.object.display_object.angle
    }

    setAngle(angle: number) {
        return this.object.display_object.angle = angle
    }

    getSize(): Size2 {
        return { width: this.object.display_object.width, height: this.object.display_object.height }
    }

    get size(): Size2 {
        return { width: this.object.display_object.width, height: this.object.display_object.height }
    }

    setSize(width: number, height: number) {
        this.object.display_object.width = width
        this.object.display_object.height = height
    }

    __react_view__() {
        return <TransformView object={this.object} key={this.id} />
    }

    __get_data__() {
        return {
            type: this.type,
            id: this.id,
            position: this.getPosition(),
            rotation: this.getRotation(),
            size: this.getSize(),
        } as TransformComponentData
    }

    __create_from_data(data: TransformComponentData): void {
        this.type = data.type
        this.id = data.id
        this.setPosition(data.position.x, data.position.y)
        this.setRotation(data.rotation)
        this.setSize(data.size.width, data.size.height)
    }
}