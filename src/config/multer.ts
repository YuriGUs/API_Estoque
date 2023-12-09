import crypto from "crypto"; //Este módulo é usado para gerar um hash aleatório que será usado como parte do nome do arquivo.
import multer from "multer"; // É uma biblioteca para lidar com formulários do tipo multipart/form-data, comumente usado para upload de arquivos.

import { extname, resolve } from "path";

/*
O módulo exporta um objeto com um método chamado upload, 
que aceita um parâmetro folder representando o diretório 
de destino onde os arquivos enviados serão armazenados.
*/
export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
