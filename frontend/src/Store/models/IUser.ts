export interface IUser {
    is_log_page: boolean
    isAuthorized: boolean
    isGuest: boolean
    user_name: string | null
    user_icon: string
    auth_token: string | null
}