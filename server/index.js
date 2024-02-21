const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());

app.use("/", require("./routes/transactionData"));

app.listen(2000, () => {
  console.log("Server running on port 2000");
});
