import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { SpriteData } from "../../../Types/objects_interfaces";
import { ObjectTypes } from "../../../Types/object_types";
import { TextComponent } from "../components/Text/text_component";

export class Text extends Primitive {
    display_object!: PIXI.Text;
    style: PIXI.TextStyle
    text: string
    components: Array<Component> = [];
    transform: Transform
    scripts: {};
    constructor(
        name: string = "Text",
        type: ObjectTypes = ObjectTypes.TEXT) {
        super(name, type)
        this.text = "Text"
        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        });
        this.display_object = new PIXI.Text(this.text, this.style);
        this.display_object.x = 50;
        this.display_object.y = 100;
        this.display_object.anchor.x = 0.5
        this.display_object.anchor.y = 0.5
        this.transform = new Transform(this)
        this.scripts = {}
        new TextComponent(this)
    }

    updateText(value: string) {
        this.display_object.text = value
    }

    __get_data__() {
        const components = this.components.map((component) => {
            return component.__get_data__()
        })
        return {
            name: this.name,
            type: this.type,
            id: this.id,
            components: components
        } as SpriteData
    }

    __create_from_data(data: SpriteData) {
    }
}