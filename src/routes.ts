import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controllers/userController/CreateUserController";
import { AuthUserController } from "./controllers/userController/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/userController/DetailUserController";
import { RemoveUserController } from "./controllers/userController/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategorieController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { ListProductCatController } from "./controllers/product/ListProductBycategoryController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { SaleProductController } from "./controllers/sale/SaleProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.put(
  "/category/edit",
  isAuthenticated,
  new EditCategoryController().handle
);
router.get(
  "/category/all",
  isAuthenticated,
  new ListCategoryController().handle
);

router.delete(
  "/category/delete",
  isAuthenticated,
  new DeleteCategoryController().handle
);

// Product
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.put(
  "/product/edit",
  isAuthenticated,
  upload.single("file"),
  new EditProductController().handle
);
router.get("/product", isAuthenticated, new ListProductCatController().handle);
router.get("/products", isAuthenticated, new ListProductsController().handle);
router.delete(
  "/product/remove",
  isAuthenticated,
  new RemoveProductController().handle
);

// Sale routes
router.put(
  "/sale/product",
  isAuthenticated,
  new SaleProductController().handle
);

export { router };
