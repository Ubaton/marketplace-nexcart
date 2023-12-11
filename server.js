const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pool = mysql2.createPool({
  user: "root",
  host: "localhost",
  password: "RCMG@F44#2a",
  database: "marketplaces",
  connectionLimit: 10,
});

app.post("/create", (req, res) => {
  const { productName, price, quantity, quality, shipping } = req.body;

  pool.query(
    "INSERT INTO products (productName, price, quantity, quality, shipping, imageUrl) VALUES (?, ?, ?, ?, ?)",
    [productName, price, quantity, quality, shipping, imageUrl],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error inserting values" });
      } else {
        return res.status(200).json({ message: "Values Inserted" });
      }
    }
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Ray SQLDatabase Server is running on port ${PORT}`);
});
