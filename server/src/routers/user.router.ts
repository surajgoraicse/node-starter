import { Router } from "express";
import { login, registerUser } from "../controllers/user.controller.js";

const app = Router();

app.post("/register", registerUser);
app.post("/login" , login)

export default app;
