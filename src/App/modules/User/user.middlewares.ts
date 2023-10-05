import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {prisma} from "@/Config";
import CustomError from "@/Utils/errors/customErrror.class";
import {z} from "zod";

const userExists = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.id)

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    if (!user) throw new CustomError('Invalid user', 404)

    next()
})

export const UserMiddleware = {
    userExists
}