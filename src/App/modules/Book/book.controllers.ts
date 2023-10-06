import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {BookService} from "@/App/modules/Book/book.services";
import {sendResponse} from "@/Utils/helper/sendResponse";
import {z} from "zod";
import {pickFunction} from "@/Utils/helper/pickFunction";
import {BookValidation} from "@/App/modules/Book/book.validations";

const allBooks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await BookService.allBooks()
    sendResponse.success(res, {
        statusCode: 200,
        message: "Books fetched successfully.",
        data
    })
})

const singleBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.id)

    const data = await BookService.singleBookInfo(id)
    sendResponse.success(res, {
        statusCode: 200,
        message: "Book fetched successfully.",
        data
    })
})

const booksByCategoryId = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.categoryId)

    const data = await BookService.booksByCategoryId(id)
    sendResponse.success(res, {
        statusCode: 200,
        message: "Book fetched successfully ",
        data
    })
})

const createNewBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload =
        pickFunction(req.body, ['title', 'author', 'genre', 'price', 'publicationDate', 'categoryId'])

    const validateData = BookValidation.bookZodSchema.parse(payload)
    const data = await BookService.newBook(validateData)
    sendResponse.success(res, {
        statusCode: 201,
        message: "Book created successfully ",
        data
    })
})

const updateBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.id)

    const payload =
        pickFunction(req.body, ['title', 'author', 'genre', 'price', 'publicationDate', 'categoryId'])

    const validateData = BookValidation.bookZodSchema.partial().parse(payload)

    const data = await BookService.updateBook(id, validateData)
    sendResponse.success(res, {
        statusCode: 200,
        message: "Book updated successfully",
        data
    })
})

const deleteBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.string({
        required_error: 'ID is required'
    }).parse(req.params.id)

    const data = await BookService.deleteBook(id)
    sendResponse.success(res, {
        statusCode: 200,
        message: "Book deleted successfully",
        data
    })
})


export const BookController = {
    allBooks,
    singleBook,
    booksByCategoryId,
    createNewBook,
    updateBook,
    deleteBook
}

