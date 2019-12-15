const express = require("express")
const pc=require("./controllers/positions")
const app = express()
app.use(express.json())

// app.get("/hello", (req, res) => res.status(200).json("Hello World, i am a banana"))
app.get("/api/positions", pc.read)
app.post("/api/positions", pc.create)
app.put("/api/positions/:id", pc.update)
app.delete("/api/positions/:id", pc.delete)

app.listen(5150, () => console.log("listening on port 5150"))