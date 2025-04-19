import express from "express";
import 'dotenv/config'

const PORT = process.env.PORT || 8003

const app = express()

app.get('/', (req, res) => {
    res.send("this is some data")
})




app.listen(8000, () => {
    console.log("server is listening at http://localhost:"+PORT);
})


