const express = require("express");
const multer = require("multer");
const path = require("path");
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

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Handle image upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }
  return res.status(200).json({ imageUrl: `/uploads/${file.filename}` });
});

app.post("/create", (req, res) => {
  const { productName, price, quantity, quality, shipping, imageUrl } =
    req.body;

  if (!productName) {
    return res.status(400).json({ error: "Product name cannot be null" });
  }

  pool.query(
    "INSERT INTO products (productName, price, quantity, quality, shipping, imageUrl) VALUES (?, ?, ?, ?, ?, ?)",
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

app.get("/products", (req, res) => {
  pool.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Error fetching products" });
    }

    return res.status(200).json(results);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Ray SQLDatabase Server is running on port ${PORT}`);
});
