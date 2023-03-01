import { Size2, Vector2 } from "../../../Types/math_types";

export interface ABD_entity {
    name: string,
    type: string,
    id: string,
}

export interface ABD_primitive extends ABD_entity {
    components: Array<ABD_component>
}

export interface ABD_sprite extends ABD_primitive {
}

export interface ABD_component {
    type: string,
    id: string,
}

export interface ABD_transform_component extends ABD_component {
    position: Vector2,
    rotation: number,
    size: Size2
}

export interface ABD_graphic_component extends ABD_component {
    texture_file_name: string | undefined,
    tint: number,
    alpha: number,
    blend_mode: number
}

export interface ABD_script_component extends ABD_component {
    scripts: Array<string>
}