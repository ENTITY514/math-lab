import { Size2, Vector2 } from "./math_types";
import { ObjectTypes } from "./object_types";

export interface EntityData {
    name: string,
    type: ObjectTypes,
    id: string,
    tag: string
}

export interface PrimitiveData extends EntityData {
    components: Array<ComponentData>
}

export interface SpriteData extends PrimitiveData {
}

export interface TextData extends PrimitiveData {
    text: string
    text_style: {
        fontFamily: string
        fontStyle: string
        fontSize: number
        fontCaps: string
        fontBold: string
        wordWrapWidth: number
        fill: string
        wordWrap: boolean
        lineJoin: string
    }
}

export interface CameraData {
    position: Vector2
}

export interface ComponentData {
    type: string,
    id: string,
}

export interface TransformComponentData extends ComponentData {
    position: Vector2,
    rotation: number,
    size: Size2
    z_index: number
}

export interface GraphicComponentData extends ComponentData {
    texture_file_name: string | undefined,
    tint: number,
    alpha: number,
    blend_mode: number
}

export interface ScriptComponentData extends ComponentData {
    scripts: Array<string>
}