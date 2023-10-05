import {prisma} from "@/Config";
import {IUser} from "@/App/modules/User/user.types";

const allUsers = async (): Promise<IUser[]> => {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true
        }
    })
}

const singleUser = async (id: string): Promise<IUser | null> => {
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}

const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser> => {
    return prisma.user.update({
        where: {
            id
        },
        data: payload,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true
        }
    })
}

export const UserService = {
    allUsers,
    singleUser,
    updateUser
}