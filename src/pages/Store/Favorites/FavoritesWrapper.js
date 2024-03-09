"use client";

import Favorites from "@/pages/Store/Favorites/page";
import React from "react";

const FavoritesWrapper = ({
  likedProducts,
  handleIncrease,
  handleDecrease,
  handleRemove,
  updatedProduct,
}) => {
  return (
    <div>
      <Favorites
        likedProducts={likedProducts}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
        updatedProduct={updatedProduct}
      />
    </div>
  );
};

export default FavoritesWrapper;
