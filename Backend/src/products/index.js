import express from "express";
import uniqid from "uniqid";
// import createError from "http-errors";
// import { validationResult } from "express-validator";
// import { productsValidation } from "./validation.js";
import { getProducts, writeProducts } from "../lib/fs-tools.js";

const productsRouter = express.Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await getProducts();
    if (req.query.category) {
      const filteredProducts = products.filter(
        (elem) => elem.category === req.query.category
      );

      if (filteredProducts.length > 0) {
        res.send(filteredProducts);
      } else {
        next(createError(404, `no product found in ${req.query.category}!`));
      }
    } else {
      res.send(products);
    }
  } catch (error) {
    next(error);
  }
});

export default productsRouter;
