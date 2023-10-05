import {Router} from "express";
import AuthRoutes from "@/App/modules/Auth/auth.routes";
import YAML from "yamljs"
import swaggerUI from "swagger-ui-express"
import path from "path";
import UserRoutes from "@/App/modules/User/user.routes";

const rootRouter = Router()
const docs = YAML.load(path.join(process.cwd(), "docs.yml"))

rootRouter
    .use('/auth', AuthRoutes)
    .use('/users', UserRoutes)
    .use('/docs', swaggerUI.serve, swaggerUI.setup(docs))


export default rootRouter