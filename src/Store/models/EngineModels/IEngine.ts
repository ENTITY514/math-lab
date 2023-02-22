export interface IEngine {
    active_section: Sections
    project_data: {
        name: string,
        id: string
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
}