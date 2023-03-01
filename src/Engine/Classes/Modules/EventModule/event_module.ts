import { Engine } from "../../../main";
import { Module } from "../module";
import { Event } from "./event";

export class EventModule extends Module {
    events: Array<Event>;
    constructor(engine: Engine) {
        super(engine)
        this.events = []
    }

    addEvent(event_name: string) {
        let event = new Event(event_name)
        this.events.push(event)
    }

    addSubcriberOn(event_name: string, callback: () => void) {
        this.events.forEach(event => {
            if (event.name === event_name) {
                event.subcribe(callback)
            }
        });
    }

    getEvent(event_name: string): Event | null {
        let event_: Event | null = null
        this.events.forEach(event => {
            if (event.name === event_name) {
                event_ = event
            }
        });
        return event_
    }

    clearAllEvent() {
        this.events = []
    }
}