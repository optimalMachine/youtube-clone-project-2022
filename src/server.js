import express from "express";

const PORT = 4000;
const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");
const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} --Wetube server--`);

app.get("/",handleHome);
app.listen(PORT, handleListening);
