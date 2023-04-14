import { Component } from "../component";
import { ParticleSystem } from "../../ViewObjects/particle_system";
import { ParticleSystemSettingsView } from "./particle_system_settings_view";

export class ParticleSystemSettingsComponent extends Component {
    object!: ParticleSystem
    constructor(object: ParticleSystem) {
        super(object, "particle_system_settings")
        this.object = object
        this.object.components.push(this)
    }

    __react_view__() {
        return <ParticleSystemSettingsView component={this} key={this.id} />
    }



    __create_from_data(data: any): void {
    }
}