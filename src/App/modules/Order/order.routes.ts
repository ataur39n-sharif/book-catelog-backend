/*
* - [ ]  Route: /api/v1/orders/create-order (POST)(Only Customer)
- [ ]  Route: /api/v1/orders (GET)(O A)
- [ ]  Route: /api/v1/orders (GET)(Own order)
- [ ]  Route: /api/v1/orders/:orderId (Get)(Only order owner and admin)
* */

import {Router} from "express";
import {OrderController} from "@/App/modules/Order/order.controller";
import {OrderMiddleware} from "@/App/modules/Order/order.middlewares";

const OrderRoutes = Router()

OrderRoutes
    .get(
        '/',
        OrderMiddleware.validateAccess,
        OrderController.getAllOrders
    )
    .get(
        '/:id',
        OrderMiddleware.validateAccess,
        OrderController.getSingleOrder)
    .post(
        '/create-order',
        OrderMiddleware.validateAccess,
        OrderController.newOrder
    )
export default OrderRoutes