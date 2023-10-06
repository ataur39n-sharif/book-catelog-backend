/*
* - [ ]  Route: /create-book (POST) → Only Allowed For Admin
- [ ]  Route: / (GET)(Pagination)
- [ ]  Route: /:categoryId/category (GET)
- [ ]  Route: /:id (GET)
- [ ]  Route: /:id (PATCH)(OA)
- [ ]  Route: /:id ( DELETE)
* */

import {Router} from "express";
import {BookController} from "@/App/modules/Book/book.controllers";

const BooksRoutes = Router()

BooksRoutes
    .get('/', BookController.allBooks)
    .get('/:id', BookController.singleBook)
    .get('/:categoryId/category', BookController.booksByCategoryId)
    .post('/', BookController.createNewBook)
    .patch('/:id', BookController.updateBook)
    .delete('/:id', BookController.deleteBook)

export default BooksRoutes