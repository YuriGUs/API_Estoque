import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../modules/interfaces/auth/Payload";
import { response } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Acessar o token JWT
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validar token
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    req.user_id = sub;
    return next(); // faz a requisição prosseguir
  } catch (error) {
    return response.send(401).end(); // encerra a criação
  }
}
