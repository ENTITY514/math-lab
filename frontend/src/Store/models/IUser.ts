export interface IUser {
    isAuthorized: boolean
    user_name: string | null
    projects: Array<{
        name: string,
        id: string
    }>
}