import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Component } from "../components/component";
import { Primitive } from "./primitive";
import { TextData, TransformComponentData } from "../../../Types/objects_interfaces";
import { ObjectTypes } from "../../../Types/object_types";
import { TextComponent } from "../components/Text/text_component";

export class Text extends Primitive {
    display_object!: PIXI.Text;
    style: PIXI.TextStyle
    components: Array<Component> = [];
    transform: Transform
    scripts: {};
    constructor(
        name: string = "Text",
        type: ObjectTypes = ObjectTypes.TEXT) {
        super(name, type)
        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: '#ffffff',
            wordWrap: true,
            lineJoin: 'round',
        });
        this.display_object = new PIXI.Text("Text", this.style);
        this.display_object.anchor.x = 0.5
        this.display_object.anchor.y = 0.5
        this.transform = new Transform(this)
        this.scripts = {}
        new TextComponent(this)
        this.style.fill = "black"
    }

    updateText(value: string) {
        this.display_object.text = value
    }

    get text() {
        return this.display_object.text
    }

    __get_data__() {
        const components = this.components.map((component) => {
            return component.__get_data__()
        })
        return {
            name: this.name,
            type: this.type,
            id: this.id,
            components: components,
            text: this.text,
            text_style: {
                fontFamily: this.style.fontFamily,
                fontStyle: this.style.fontStyle,
                fontSize: this.style.fontSize,
                fontCaps: this.style.fontVariant,
                fontBold: this.style.fontWeight,
                wordWrapWidth: this.style.wordWrapWidth,
                fill: this.style.fill,
                wordWrap: this.style.wordWrap,
                lineJoin: this.style.lineJoin,
            }
        } as TextData
    }

    __create_from_data(data: TextData) {
        this.setName(data.name)
        this.id = data.id
        this._type = data.type
        this.updateText(data.text)
        this.components = []
        data.components.forEach(component => {
            switch (component.type) {
                case "transform":
                    let transform_component = new Transform(this)
                    transform_component.__create_from_data(component as TransformComponentData)
                    this.transform = transform_component
                    break;

                default:
                    break;
            }
        });
        this.style.fontFamily = data.text_style.fontFamily
        //@ts-ignore
        this.style.fontStyle = data.text_style.fontStyle
        this.style.fontSize = data.text_style.fontSize
        //@ts-ignore
        this.style.fontVariant = data.text_style.fontCaps
        //@ts-ignore
        this.style.fontBold = data.text_style.fontWeight
        this.style.wordWrapWidth = data.text_style.wordWrapWidth
        this.style.fill = data.text_style.fill
        this.style.wordWrap = data.text_style.wordWrap
        //@ts-ignore
        this.style.lineJoin = data.text_style.lineJoin
    }
}