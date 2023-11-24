import CardContext from "@/contexts/CardContext/page";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({ products }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="fixed top-20">
        <div className="relative">
          <div className="flex items-center gap-2 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2">
            <span>
              <SearchIcon />
            </span>
          </div>
          <input
            type="text"
            id="search-input"
            placeholder="Search"
            className="bg-object text-gray-50 h-10 rounded-full w-[720px] pl-10"
          />
        </div>
      </div>
      <CardContext products={products} />
    </div>
  );
};

export default Search;
