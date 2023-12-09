import prismaClient from "../../prisma/index";
import { SaleProductRequest } from "../../modules/interfaces/sale/SaleProductRequest";

class SaleProductService {
  async execute({ product_id, amount }: SaleProductRequest) {
    //se n receber product_id, amount
    if (!product_id || !amount) {
      throw new Error("Dados de entrada não foram passados corretamente!");
    }

    // busca product_id
    const queryProduct = await prismaClient.product.findFirst({
      where: {
        id: product_id,
      },
    });

    // se quant é maior que a quant que estamos vendendo & se a quant que estamos vendendo é maior que 0
    if (queryProduct?.amount > amount && amount > 0) {
      //decrementa a quantidade que temos com a vendita
      const newAmount = queryProduct?.amount - amount;

      // atualiza o banco com a nova informação da venda
      const saveSale = await prismaClient.product.update({
        where: {
          id: product_id,
        },
        data: {
          amount: newAmount,
        },
        select: {
          id: true,
          name: true,
          amount: true,
        },
      });
      return saveSale;
    } else {
      throw new Error("Não foi possível efetuar a venda!");
    }
  }
}

export { SaleProductService };
