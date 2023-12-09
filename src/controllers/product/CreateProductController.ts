import { Request, Response } from "express";
import { ProductRequest } from "../../modules/interfaces/product/ProductRequest";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id, amount }: ProductRequest =
      req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Error Sending image");
    } else {
      const { filename: banner } = req.file;
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
        amount,
      });
      return res.json(product);
    }
  }
}

export { CreateProductController };
