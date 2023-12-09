import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../modules/interfaces/user/UserRequest";

prismaClient;

// service de criação de usuario e seus tratamentos
class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // se não passar email
    if (!email) {
      throw new Error("Email necessary");
    }

    // e senha
    if (!password) {
      throw new Error("Password necessary");
    }

    // verifica se user ja existe no bd
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    // se existir, lança erro
    if (userAlreadyExists) {
      throw new Error("Email já existe");
    }

    // Encriptando a senha do user
    const passwordHash = await hash(password, 8);

    //Criando usuario
    const user = prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
