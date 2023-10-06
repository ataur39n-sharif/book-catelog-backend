import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {z} from "zod";
import jwt from "jsonwebtoken";
import config from "@/Config";
import {TokenPayload} from "@/App/modules/Auth/auth.types";

const validateAccess = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = z.string({
        required_error: 'Authorization token required'
    }).parse(req.headers.authorization)
    const {role, userId} = jwt.verify(token, config.jwt.accessToken.secret as string) as TokenPayload

    console.log({userId})

    req.body.userId = userId
    req.body.role = role

    next()
})

export const OrderMiddleware = {
    validateAccess
}