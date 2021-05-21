import { body } from "express-validator";

export const reviewsValidation = [
  body("comment").exists().withMessage("Comment is mandatory!"),
  body("rate")
    .exists()
    .withMessage("Rate is mandatory!")
    .isFloat()
    .withMessage("Rate needs to be a float!"),
  body("productId").exists().withMessage("productId is mandatory!"),
];
