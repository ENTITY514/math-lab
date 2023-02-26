export class ScriptObject {
    object;
    constructor(object) {
        this.object = object
        console.log("Hello,World")
    }

    onStart() {
        console.log(this.object)
    }

    onUpdate() {

    }
}