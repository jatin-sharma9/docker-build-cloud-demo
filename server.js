const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Docker Build Cloud!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
