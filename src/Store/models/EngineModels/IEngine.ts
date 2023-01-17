export interface IEngine {
    active_section: Sections
    project_name: string,
    project_id: string
}

export enum Sections {
    MAIN,
    CODE_EDITOR
}