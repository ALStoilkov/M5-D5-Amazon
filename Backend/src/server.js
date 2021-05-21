import express from "express";
import cors from "cors";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.listen(port, () => console.log(`Server is listening on: ${port}`));
