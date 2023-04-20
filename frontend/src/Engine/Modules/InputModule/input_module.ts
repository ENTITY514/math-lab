import { Engine } from "../../core";
import { Module } from "../module";
import { Input } from "./Input";

export class InputModule extends Module {
    name: string = "InputModule"
    inputs: Array<Input> = []
    constructor(engine: Engine) {
        super(engine)
    }
}