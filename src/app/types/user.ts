export interface User {
    themes:string[],
    posts: string[],
    _id:string,
    tel: string,
    email:string,
    username:string,
    password:string,
    created_at: string,
    updatedAt: string,
    __v: number
}

export interface UserForAuthentication {
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
}