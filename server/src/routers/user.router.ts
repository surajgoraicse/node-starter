import { Router } from "express";
import { login, logout, registerUser } from "../controllers/user.controller.js";
import authUser from "../middlewares/userAuth.middleware.js";

const app = Router();

app.post("/register", registerUser);
app.post("/login", login)
app.post("/logout" , authUser , logout)

export default app;
