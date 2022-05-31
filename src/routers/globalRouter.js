import express from "express";

const app = express();
const globalRouter = express.Router();
const handleGlobal = (req,res) => res.send("Home");


globalRouter.get ("/", handleGlobal);

export default globalRouter;