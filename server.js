const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  user: "",
  host: "",
  password: "",
  database: "",
});

app.post("/create", (req, res) => {
  const { productName, price, quantity, quality, shipping } = req.body;

  db.query(
    "INSERT INTO products (productName, price, quantity, quality, shipping) VALUES (?, ?, ?, ?, ?)",
    [productName, price, quantity, quality, shipping],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting values");
      } else {
        res.status(200).send("Values Inserted");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
