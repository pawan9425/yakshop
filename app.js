// app.js

const express = require("express");
const bodyParser = require("body-parser");
const yakRoutes = require("./routes/yakRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/yak-shop", yakRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
