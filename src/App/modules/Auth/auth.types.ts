import {IUser} from "@/App/modules/User/user.types";

export interface IAuthProperty extends IUser {
    password: string
}


export type TLoginPayload = {
    email: string,
    password: string
}