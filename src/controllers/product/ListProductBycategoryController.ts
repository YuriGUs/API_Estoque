import { Request, Response } from "express";
import { ListProductCatService } from "../../services/product/ListProductCatService";

class ListProductCatController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listProductCatService = new ListProductCatService();

    const products = await listProductCatService.execute({ category_id });
    return res.json(products);
  }
}

export { ListProductCatController };
