export interface IRegisterFormProps {
    name: string;
    email: string;
    age: number;
    address: string;
    password: string;
    role: string
}

export interface ISigninFormProps {
    email: string;
    password: string;
}