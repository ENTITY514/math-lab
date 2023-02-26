export class ScriptObject {
    object;
    constructor(object) {
        this.object = object
        console.log("Script Was Created")
    }

    onStart() {
        console.log("OnStart")
    }

    onUpdate() {
        console.log("OnUpdate")
    }
}