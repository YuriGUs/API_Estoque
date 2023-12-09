import prismaClient from "../../prisma";
import { CategoryRequest } from "../../modules/interfaces/category/CategoryRequest";

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === " " || name === null || !name) {
      throw new Error("Invalid Name");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
