/*
*- [ ]  Route: /api/v1/categories/create-category (POST) → Only Allowed For Admin
- [ ]  Route: /api/v1/categories (GET)
- [ ]  Route: /api/v1/categories/:id (GET)
- [ ]  Route: /api/v1/categories/:id (PATCH)
- [ ]  Route: /api/v1/categories/:id ( DELETE)(O A)
* */

import {Router} from "express";
import {CategoryController} from "@/App/modules/Category/category.controllers";

const CategoryRoutes = Router()

CategoryRoutes
    .get('/', CategoryController.categoryList)
    .get('/:id', CategoryController.singleCategory)
    .post('/create-category', CategoryController.createCategory)
    .patch('/:id', CategoryController.updateCategory)
    .delete('/:id', CategoryController.deleteCategory)
export default CategoryRoutes