import { Engine } from "../../../main";
import { Module } from "../module";

export class DataModule extends Module {
    is_dev_mode: boolean = true
    constructor(engine: Engine) {
        super(engine)
    }

    create_data_set(): string {
        return JSON.stringify(this.engine.object_module.objects.map(object => {
            return object.__get_data__()
        }))
    }

    create_game_from_data_set() {

    }

    compileAppToHTML() {
        return new Blob(["Hello, world!"], { type: 'text/html' });
    }
}