import express from "express";
import logger from "morgan";
import { header } from "express/lib/request";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";
import globalRouter from "./routers/globalRouter.js";

const PORT = 4000;
const app = express();
const morgan = logger("dev");

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} --Wetube server--`);

app.use(morgan);
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

app.listen(PORT, handleListening);
