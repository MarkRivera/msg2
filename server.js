const express = require("express");
const server = express();
const connectDB = require("./config/db");
const path = require("path")

connectDB();

server.use(express.json({ extended: false }));
if (process.env.NODE_ENV === "production") {
	server.use(express.static("client/build"));

	server.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// server.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is listening: ${PORT}`));
