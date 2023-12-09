import prismaClient from "../../prisma";
import { EditUserRequest } from "../../controllers/userController/EditUserController";

class EditUserService {
  async execute({ name, email }: EditUserRequest) {
    if (name && email) {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          email,
        },
      });

      if (userAlreadyExists) {
        const userUpdated = await prismaClient.user.update({
          where: {
            id: userAlreadyExists.id,
          },
          data: {
            name,
          },
        });

        return userUpdated;
      } else {
        throw new Error("Usuario não existente!");
      }
    } else {
      throw new Error("Parâmetros inválidos!");
    }
  }
}

export { EditUserService };
