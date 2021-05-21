import express from "express";
import cors from "cors";
import productsRouter from "./products/index.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.use("/products", productsRouter);

// error handlers +++++++++++

server.listen(port, () => console.log(`Server is listening on: ${port}`));
