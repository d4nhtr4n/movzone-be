const path = require("path");
require("dotenv").config({ path: path.resolve(".env") });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/myList", require("./routes/myList"));
app.use("/api/myProfile", require("./routes/myProfile"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
    console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
});
