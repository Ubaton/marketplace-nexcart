import React, { useState, useEffect } from "react";
import { FileEdit, PackageX } from "lucide-react";
import { toast } from "react-toastify";

const ProductList = ({
  onEditProduct,
  onDeleteProduct,
  setSelectedProduct,
}) => {
  const [products, setProducts] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleEditProduct = (index) => {
    const globalIndex = indexOfFirstItem + index;
    onEditProduct(globalIndex);
    setSelectedProduct(products[globalIndex]);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();

    const interval = setInterval(() => {
      fetchProducts();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteProduct = async (index) => {
    const globalIndex = indexOfFirstItem + index;
    const productId = products[globalIndex].id;

    try {
      const response = await fetch(
        `http://localhost:5000/delete/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Product deleted successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  const totalPages = Math.ceil(products.length / itemsPerPage);
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(startPage + 2, totalPages);

  if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2);
    endPage = totalPages;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="pl-20">
        <div className="flex justify-center p-4 rounded-3xl bg-object w-[940px] h-auto">
          <table className="min-w-full table-auto">
            <thead className="divide-y divide-blue-500">
              <tr className="bg-darkgray">
                <th colSpan="6" className="text-center py-1">
                  <span className="text-gray-200">Page {currentPage}</span>
                </th>
              </tr>
              <tr>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Product</span>
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Price</span>
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Quantity</span>
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Quality</span>
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Shipping</span>
                </th>
                <th className="px-10 py-2">
                  <span className="text-gray-200">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index} className="">
                  <td className="px-10 py-2 text-gray-50">
                    {product.productName}
                  </td>
                  <td className="px-10 py-2 text-gray-50">{product.price}</td>
                  <td className="px-10 py-2 text-gray-50">
                    {product.quantity}
                  </td>
                  <td className="px-10 py-2 text-gray-50">{product.quality}</td>
                  <td className="px-10 py-2 text-gray-50">
                    {product.shipping}
                  </td>
                  <td className="flex flex-row items-center justify-center px-10 py-2">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditProduct(index)}
                    >
                      <FileEdit />
                    </button>
                    <button
                      className="text-red-500 ml-2"
                      onClick={() => handleDeleteProduct(index)}
                    >
                      <PackageX />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`mr-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white cursor-pointer ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mr-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white cursor-pointer ${
                number === currentPage ? "bg-blue-700" : ""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
          <button
            className={`ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white cursor-pointer ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
