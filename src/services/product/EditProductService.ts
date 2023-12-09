import prismaClient from "../../prisma";
import { EditProductRequest } from "../../modules/interfaces/product/EditProductRequest";

class EditProductService {
  async execute({
    name,
    amount,
    description,
    banner,
    price,
    product_id,
  }: EditProductRequest) {
    const productEdited = await prismaClient.product.update({
      where: {
        id: product_id,
      },
      data: {
        name,
        amount: +amount,
        description,
        banner,
        price,
      },
    });
    return productEdited;
  }
}

export { EditProductService };
