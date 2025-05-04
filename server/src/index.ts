import express from "express";
import "dotenv/config";
import connectDb from "./models/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import handleError from "./middlewares/errorHandler.middleware.js";
import helmet from "helmet";

const PORT = process.env.PORT || 8003;
const MONGODB_URI = process.env.MONGODB_URI;
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";


connectDb(MONGODB_URI!);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(
	helmet({
		contentSecurityPolicy: envMode !== "DEVELOPMENT",
		crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
	})
);


// import routers
import userRouter from "./routers/user.router.js";
import adminRouter from "./routers/admin.router.js";



// using routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

app.get("/", (req, res) => {
	res.send("this is some data");
});

app.use(handleError);

app.listen(PORT, () => {
	console.log("server is listening at http://localhost:" + PORT);
});
