import {Book} from "@prisma/client";
import {prisma} from "@/Config";
import {IBook} from "@/App/modules/Book/book.types";

const allBooks = async (): Promise<Book[]> => {
    return prisma.book.findMany()
}

const singleBookInfo = async (id: string) => {
    return prisma.book.findUnique({
        where: {
            id
        }
    })
}

const booksByCategoryId = async (id: string) => {
    return prisma.book.findMany({
        where: {
            categoryId: id
        }
    })
}

const newBook = async (payload: IBook): Promise<Book> => {
    return prisma.book.create({
        data: payload,
        include: {
            category: true
        }
    })
}

const updateBook = async (id: string, payload: Partial<IBook>): Promise<Book> => {
    return prisma.book.update({
        where: {
            id
        },
        data: payload
    })
}

const deleteBook = async (id: string) => {
    return prisma.book.delete({
        where: {
            id
        }
    })
}

export const BookService = {
    allBooks,
    singleBookInfo,
    booksByCategoryId,
    newBook,
    updateBook,
    deleteBook
}
