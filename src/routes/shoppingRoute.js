import { Router } from "express";
import { upload } from '../middlewares/upload.js';
import { createShopping, findAllShopping, findShoppingById } from "../controllers/shoppingController.js";
import { shoppingSchema } from "../validations/shoppingSchema.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

const parseFormData = (req, res, next) => {
    if (req.body) {
        for (let key in req.body) {
            if (!isNaN(req.body[key])) req.body[key] = Number(req.body[key]);
        }
    }
    next();
};

router.post("/", upload.single("file"), parseFormData, validate(shoppingSchema), createShopping);
router.get("/", findAllShopping);
router.get("/:id", findShoppingById);

export default router;