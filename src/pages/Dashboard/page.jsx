import React, { useState } from "react";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    // Find the index of the existing product in the products array
    const index = products.findIndex(
      (product) => product.id === updatedProduct.id
    );

    if (index !== -1) {
      // Update the product at the found index with the updatedProduct
      const updatedProducts = [...products];
      updatedProducts[index] = updatedProduct;

      // Set the updated array back to the state
      setProducts(updatedProducts);

      console.log("Product edited successfully:", updatedProduct);
    } else {
      console.error("Product not found for editing");
    }
  };

  const deleteProduct = (index) => {
    // Implement your logic for deleting a product
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="flex bg-primary min-h-screen flex-col items-center">
      <Sidebar />
      <div className="pt-10">
        <CreateProduct addProduct={addProduct} />
        <ProductList
          products={products}
          onEditProduct={editProduct}
          onDeleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default Dashboard;
