import { Router } from "express";
import { createShopping } from "../controllers/shoppingController.js";

const route = Router();

route.post('/', createShopping);

export default route;