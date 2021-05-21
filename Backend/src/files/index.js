import express from "express";
import multer from "multer";
import createError from "http-errors";
import { readProductPictures, writeProductPictures } from "../lib/fs-tools.js";

// IMAGE UPLOAD (POST /product/:id/upload)
const filesRouter = express.Router();

filesRouter.post(
  "/:id/upload",
  multer().single("productImg"),
  async (req, res, next) => {
    try {
      console.log(req.file);
      if (req.file.buffer) {
        writeProductPictures(req.file.originalname, req.file.buffer);
      } else {
        next(createError(400, "No file attached"));
      }
      res.send("test");
    } catch (error) {
      console.log(error);
    }
  }
);
export default filesRouter;
