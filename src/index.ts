import express from "express";
import "dotenv/config";
import connectDb from "./models/db.js";

const PORT = process.env.PORT || 8003;
const MONGODB_URI = process.env.MONGODB_URI;


connectDb(MONGODB_URI!)
const app = express();


app.get("/", (req, res) => {
	res.send("this is some data");
});

app.listen(8000, () => {
	console.log("server is listening at http://localhost:" + PORT);
});
