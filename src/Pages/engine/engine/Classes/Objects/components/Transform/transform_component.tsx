import { Size2, Vector2 } from "../../../../Types/math_types";
import { Component } from "../component";
import { TransformView } from "./trasform_view";
import { Primitive } from "../../ViewObjects/primitive";
import { ABD_transform_component } from "../../../Modules/TestM/data_of_objects";

export class Transform extends Component {
    object!: Primitive
    constructor(object: Primitive) {
        super(object, "transform")
        this.object = object
        this.object.components.push(this)
    }

    getPosition(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.x }
    }

    get position(): Vector2 {
        return { x: this.object.sprite.position.x, y: this.object.sprite.position.y }
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
        return <TransformView object={this.object} key={this.id} />
    }

    __get_data__() {
        return {
            type: this.type,
            id: this.id,
            position: this.getPosition(),
            rotation: this.getRotation(),
            size: this.getSize(),
        } as ABD_transform_component
    }

    __create_from_data(data: ABD_transform_component): void {
        this.type = data.type
        this.id = data.id
        this.setPosition(data.position.x, data.position.y)
        this.setRotation(data.rotation)
        this.setSize(data.size.width, data.size.height)
    }
}