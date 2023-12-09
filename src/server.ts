import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "express-async-errors"; // trata errors

const app = express();
const port = 3333;
app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    // se err for do tipo (instaceof) Error
    if (err instanceof Error) {
      return response.status(400).json({
        data: {
          err: err.message,
        },
      });
    }

    // seria tipo um ELSE para o if
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(port, () => {
  console.log("Servidor ligado na rota http://localhost:3333");
});
