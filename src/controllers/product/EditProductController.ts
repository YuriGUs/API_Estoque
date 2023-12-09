import { Request, Response, response } from "express";
import { EditProductService } from "../../services/product/EditProductService";
import { EditProductRequest } from "../../modules/interfaces/product/EditProductRequest";

class EditProductController {
  async handle(req: Request, res: Response) {
    const {
      name,
      amount,
      description,
      banner,
      price,
      product_id,
    }: EditProductRequest = req.body;
    const editProductService = new EditProductService();

    const productEdited = editProductService.execute({
      name,
      amount,
      description,
      banner,
      price,
      product_id,
    });

    return res.json(productEdited);
  }
}

export { EditProductController };
