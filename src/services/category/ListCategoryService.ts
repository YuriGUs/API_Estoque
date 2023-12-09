import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    // buscar todas as categorias do BD

    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  }
}

export { ListCategoryService };
