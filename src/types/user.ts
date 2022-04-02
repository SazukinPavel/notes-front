export interface User{
    username:string
    email:string
    bio?:string
    img?:string
    role:'USER' | 'ADMIN'
}

