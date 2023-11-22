import { FileEdit, PackageX } from "lucide-react";
import React from "react";

const ProductList = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="pl-20">
        <div className="p-4 rounded-3xl bg-object w-[940px] h-[400px]">
          <table className="min-w-full table-auto">
            <thead className=" divide-y divide-blue-500">
              <tr className="bg-darkgray">
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
              <tr className="">
                <td className="px-10 py-2 text-gray-50">Spray</td>
                <td className="px-10 py-2 text-gray-50">$10.00</td>
                <td className="px-10 py-2 text-gray-50">10</td>
                <td className="px-10 py-2 text-gray-50">High</td>
                <td className="px-10 py-2 text-gray-50">Free</td>
                <td className="flex flex-row items-center justify-center px-10 py-2">
                  <button className="text-blue-500">
                    <FileEdit />
                  </button>
                  <button className="text-red-500 ml-2">
                    <PackageX />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
