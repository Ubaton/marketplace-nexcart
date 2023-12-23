import Favorites from "@/pages/Store/Favorites/page";
import React from "react";

const favorites = ({
  likedProducts,
  handleIncrease,
  handleDecrease,
  handleRemove,
}) => {
  return (
    <div>
      <Favorites
        likedProducts={likedProducts}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default favorites;
