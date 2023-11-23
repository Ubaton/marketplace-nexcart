const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const dataFilePath = path.join(__dirname, "data.json");

// Helper function to read and parse data from the data.json file
const readDataFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data from file:", error);
    throw error;
  }
};

// Helper function to write data to the data.json file
const writeDataToFile = async (data) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data to file:", error);
    throw error;
  }
};

app.post("/api/products", async (req, res) => {
  try {
    // Read existing data from the file
    const existingData = await readDataFromFile();

    // Check if the product already exists (based on some unique identifier, e.g., ID)
    const newProduct = req.body;
    const existingProductIndex = existingData.findIndex(
      (product) => product.id === newProduct.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update it
      existingData[existingProductIndex] = newProduct;
    } else {
      // If the product doesn't exist, add it as a new product
      existingData.push(newProduct);
    }

    // Write the updated data back to the file
    await writeDataToFile(existingData);

    res.json({ success: true, message: "Product added/updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
