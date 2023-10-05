import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {UserService} from "@/App/modules/User/user.services";
import {sendResponse} from "@/Utils/helper/sendResponse";
import {z} from "zod";

const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await UserService.allUsers()
    sendResponse.success(res, {
        data,
        message: 'All users fetched successfully',
        statusCode: 200,
    })
})

const getSingleUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.id)

    const data = await UserService.singleUser(id)

    sendResponse.success(res, {
        statusCode: 200,
        message: 'User fetched successfully',
        data
    })
})

export const UserController = {
    getAllUsers,
    getSingleUser
}