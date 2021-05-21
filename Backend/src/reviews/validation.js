import { body, checkSchema } from "express-validator";

export const reviewsValidation = [
  body("comment").exists().withMessage("Comment is mandatory!"),
  body("rate").exists().withMessage("Please rate the product!"),
  body("productId").exists().withMessage("Mathing product not found!"),
];

//      {
//     "_id": "123455", //SERVER GENERATED
//     "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
//     "rate": 3, //REQUIRED, max 5
//     "productId": "5d318e1a8541744830bef139", //REQUIRED
//     "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
// }
