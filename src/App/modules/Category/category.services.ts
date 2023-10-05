import {Category} from "@prisma/client";
import {prisma} from "@/Config";
import {ICategory} from "@/App/modules/Category/category.types";

const allCategories = async (): Promise<Category[]> => {
    return prisma.category.findMany()
}

const singleCategory = async (id: string): Promise<Category | null> => {
    return prisma.category.findUnique({
        where: {
            id
        },
        include: {
            books: true
        }
    })
}

const newCategory = async (payload: ICategory): Promise<Category> => {
    return prisma.category.create({
        data: payload
    })
}

const updateCategory = async (id: string, payload: Partial<ICategory>): Promise<Category> => {
    return prisma.category.update({
        where: {
            id
        },
        data: payload
    })
}

const deleteCategory = async (id: string): Promise<Category> => {
    return prisma.category.delete({
        where: {
            id
        }
    })
}

export const CategoryServices = {
    allCategories,
    singleCategory,
    newCategory,
    updateCategory,
    deleteCategory
}