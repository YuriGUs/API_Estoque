import prismaClient from "../../prisma";
import { ProductRequest } from "../../modules/interfaces/product/ProductRequest";

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
    amount,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        banner,
        category_id,
        amount: +amount, // converte como number
      },
    });
    return product;
  }
}

export { CreateProductService };
