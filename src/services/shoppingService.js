import Shopping from "../models/shopping.js";

export const createShoppingService = (body) => Shopping.create(body);
export const findAllShoppingService = () => Shopping.find();
export const findShoppingByIdService = (id) => Shopping.findById(id);