import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { AuthRequest } from "../../modules/interfaces/auth/AuthRequest";

class AuthUserController {
  async handle(request: Request, response: Response) {
    // parte do usuario no HTTP (request.body)
    const { email, password }: AuthRequest = request.body;
    const authUserService = new AuthUserService();
    const auth = await authUserService.execute({
      email,
      password,
    });

    return response.json(auth);
  }
}

export { AuthUserController };
