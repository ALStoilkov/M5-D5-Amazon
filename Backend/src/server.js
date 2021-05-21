import express from "express";
import cors from "cors";
import productsRouter from "./products/index.js";
import { errorHandler } from "./errorHandlers.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.use("/products", productsRouter);

// error handlers +++++++++++
server.use(errorHandler);

server.listen(port, () => console.log(`Server is listening on: ${port}`));
