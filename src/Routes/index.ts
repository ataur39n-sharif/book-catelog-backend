import {Router} from "express";
import AuthRoutes from "@/App/modules/Auth/auth.routes";
import YAML from "yamljs"
import swaggerUI from "swagger-ui-express"
import path from "path";
import UserRoutes from "@/App/modules/User/user.routes";
import CategoryRoutes from "@/App/modules/Category/category.routes";
import BooksRoutes from "@/App/modules/Book/books.routes";
import OrderRoutes from "@/App/modules/Order/order.routes";

const rootRouter = Router()
const docs = YAML.load(path.join(process.cwd(), "docs.yml"))

rootRouter
    .use('/auth', AuthRoutes)
    .use('/users', UserRoutes)
    .use('/categories', CategoryRoutes)
    .use('/books', BooksRoutes)
    .use('/orders', OrderRoutes)
    .use('/docs', swaggerUI.serve, swaggerUI.setup(docs))


export default rootRouter