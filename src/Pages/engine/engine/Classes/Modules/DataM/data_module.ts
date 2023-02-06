import { Engine } from "../../../main";
import { Module } from "../module";

export class DataModule extends Module {
    is_dev_mode: boolean = true
    constructor(engine: Engine) {
        super(engine)
    }
}