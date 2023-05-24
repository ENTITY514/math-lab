export const DefaultSS = {
  script: `
    return class ScriptObject {
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
    `,
  user_script: `
    return class ToolScriptObject {
      constructor(input_system) {
          this.name = "tool"
          this.core = globalThis.dev_core
          this.object_module = globalThis.dev_core.object_module
          this.dev_camera = globalThis.dev_core.dev_camera
          this.input_system = input_system
      }
  
      onUpdate() {
  
      }
  
      onTurnOn() {
          console.log("TurnOn")
      }
  
      onTurnOff() {
          console.log("TurnOff")
      }
  }
    `
}