export interface ISigninResponse {
    success: boolean
    message: string
    accessToken: string;
    data: IUser
}

export interface IRefreshToken {
    success: boolean
    message: string
    accessToken: string;
    data: IUser
}

export interface IRegisterResponse {
    success: boolean
    message: string
}

export interface IUser {
    _id: string;
    name: string;
    age: number;
    address: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}
