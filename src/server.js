const express = require("express");
const app = express();
const router = require('./routes/router');
require('./database');
const PORT = 3330;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log("Server running in port " + PORT + " 🚀 !");
});