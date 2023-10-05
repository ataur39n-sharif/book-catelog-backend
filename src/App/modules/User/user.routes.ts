/* 
- [ ]  Route: /api/v1/users (GET)(ONLY ADMIN)
- [ ]  Route: /api/v1/users/:id (GET)(ONLY ADMIN)
- [ ]  Route: /api/v1/users/:id (PATCH)(O A)
- [ ]  Route: /api/v1/users/:id ( DELETE)(O A)
*/

import {Router} from "express";
import {UserController} from "@/App/modules/User/user.controller";

const UserRoutes = Router()

UserRoutes
    .get('/', UserController.getAllUsers)
    .get('/:id', UserController.getSingleUser)
    .patch('/:id', UserController.updateUser)
    .delete('/:id')

export default UserRoutes