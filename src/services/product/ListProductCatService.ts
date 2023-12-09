import prismaClient from "../../prisma";

interface ListProductCategoryID {
  category_id: string;
}

class ListProductCatService {
  async execute({ category_id }: ListProductCategoryID) {
    const findProductCategoryId = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return findProductCategoryId;
  }
}

export { ListProductCatService };
