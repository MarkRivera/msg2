const express = require("express");
const server = express();
const connectDB = require("./config/db");

connectDB();

server.use(express.json({ extended: false }));

server.get("/", (req, res) => {
	res.send("API is listening");
});

// server.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is listening: ${PORT}`));
