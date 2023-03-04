import { Size2, Vector2 } from "./math_types";

export interface EntityData {
    name: string,
    type: string,
    id: string,
}

export interface PrimitiveData extends EntityData {
    components: Array<ComponentData>
}

export interface SpriteData extends PrimitiveData {
}

export interface ComponentData {
    type: string,
    id: string,
}

export interface TransformComponentData extends ComponentData {
    position: Vector2,
    rotation: number,
    size: Size2
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