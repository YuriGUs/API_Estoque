import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserRequest } from "../../modules/interfaces/user/UserRequest";

class CreateUserController {
  async handle(request: Request, response: Response) {
    // desconstruir o objeto
    const { name, email, password }: UserRequest = request.body;

    // chama uma instancia da service create user
    const createUserService = new CreateUserService();
    //usa a service executando-a
    const user = await createUserService.execute({ name, email, password });

    // retorna esses parametros como json
    return response.json(user);
  }
}

export { CreateUserController };
