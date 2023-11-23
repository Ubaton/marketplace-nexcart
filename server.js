const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 5000;

const dataFilePath = path.resolve(__dirname, "data.json");

app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const existingData = await fs.readFile(dataFilePath, "utf-8");
    const updatedData = [...JSON.parse(existingData), req.body];
    await fs.writeFile(
      dataFilePath,
      JSON.stringify(updatedData, null, 2),
      "utf-8"
    );
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
