import express from "express";
import cors from "cors";

const server = express();
const port = 3001;

server.use(cors());

server.listen(port, () => `Server is listening on: ${port}`);
