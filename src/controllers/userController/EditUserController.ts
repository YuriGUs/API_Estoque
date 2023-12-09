import { Request, Response } from "express";
import { EditUserService } from "../../services/user/EditUserService";

export interface EditUserRequest {
  name: string;
  email: string;
}

class EditUserController {
  async handle(req: Request, res: Response) {
    const { name, email }: EditUserRequest = req.body;
    const editUserService = new EditUserService();

    const userUpdated = editUserService.execute({ name, email });
    return res.json(userUpdated);
  }
}

export { EditUserController };
