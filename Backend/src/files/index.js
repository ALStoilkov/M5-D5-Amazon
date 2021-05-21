import express from "express";
import multer from "multer";
import { readProductPictures, writeProductPictures } from "../lib/fs-tools.js";

// IMAGE UPLOAD (POST /product/:id/upload)
const filesRouter = express.Router();

filesRouter.post(
  "/product/:id/upload",
  multer().single("productImg"),
  async (req, res, next) => {
    try {
      console.log(req.file);
      writeProductPictures(req.file.originalname, req.file.buffer);
      res.send("test");
    } catch (error) {
      console.log(error);
    }
  }
);
export default filesRouter;
