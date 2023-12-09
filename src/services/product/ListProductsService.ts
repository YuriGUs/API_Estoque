import prismaClient from "../../prisma/index";

//lista todos os produtos existentes independente de onde ele estiver
class ListProductService {
  async execute() {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        amount: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return products;
  }
}

export { ListProductService };
