import prismaClient from "../../prisma";
import { DeleteCategory } from "../../modules/interfaces/category/DeleteCategory";

class DeleteCategoryService {
  async execute({ category_id }: DeleteCategory) {
    if (category_id) {
      const category = await prismaClient.category.delete({
        where: {
          id: category_id,
        },
      });
      return category;
    }
  }
}
export { DeleteCategoryService };
