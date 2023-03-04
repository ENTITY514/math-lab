import { Engine } from "../../../Engine/core"


export interface IEngine {
    active_section: Sections
    engine: Engine
    project_data: {
        name: string | null,
        id: string | null
    }
    view_ready:
    {
        main: boolean,
        test: boolean
    }
}

export enum Sections {
    MAIN,
    CODE_EDITOR,
    TEST,
    EXPORT
}