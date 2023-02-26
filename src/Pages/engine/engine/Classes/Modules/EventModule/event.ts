export class Event {
    name: string;
    subcriber: Array<() => void> = []
    constructor(name: string) {
        this.name = name
    }

    subcribe(callback: () => void) {
        this.subcriber.push(callback)
    }

    execute() {
        this.subcriber.forEach(subcriber => {
            subcriber()
        });
    }
}