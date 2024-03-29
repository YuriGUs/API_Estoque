import { Request, Response } from "express";
import { CategoryRequest } from "../../modules/interfaces/category/CategoryRequest";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name }: CategoryRequest = req.body;
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute({ name });
    return res.json(category);
  }
}

export { CreateCategoryController };
