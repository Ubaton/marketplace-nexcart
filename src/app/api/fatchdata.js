import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle product creation
    const { productName, price, quantity, quality, shipping } = req.body;

    connection.query(
      "INSERT INTO products (productName, price, quantity, quality, shipping) VALUES (?, ?, ?, ?, ?)",
      [productName, price, quantity, quality, shipping],
      (error, results) => {
        if (error) throw error;
        res
          .status(200)
          .json({ success: true, message: "Product created successfully" });
      }
    );
  } else {
    // Handle other HTTP methods
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
