import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="min-h-screen flex items-center  justify-center">
      <div className="fixed top-10">
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
            className="bg-object text-gray-50 rounded-full w-[720px] h-10 pl-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
