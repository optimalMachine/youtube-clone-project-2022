import express from "express";
import logger from "morgan";
import { header } from "express/lib/request";

const PORT = 4000;
const app = express();
const logger = logger("dev");

const handleHome = (req,res) => {
    return res.send("<h1>I love middlewares.</h1>");
};

const handleLogin = (req,res) => {
    return res.send ({ 
        message: 
        "Login here."});
};

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} --Wetube server--`);

app.use(logger);
app.get("/",handleHome);
app.get("/login", handleLogin);

app.listen(PORT, handleListening);
