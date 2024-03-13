import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  PanelRight,
  ShoppingCart,
  User2,
} from "lucide-react";
import ViewPanelPage from "@/content/ViewPanelPage/page";
import Profile from "@/content/Profile/page";
import Chat from "@/content/Chat/page";
import Cart from "@/content/Cart/page";

const MenuBar = () => {
  const [activeIcon, setActiveIcon] = useState("viewpanel");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart data from session storage when component mounts
    const storedCart = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  const handleIncrease = (item) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update session storage
    }
  };

  const handleDecrease = (item) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity = Math.max(
        1,
        updatedCart[existingProductIndex].quantity - 1
      );
      setCart(updatedCart);
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update session storage
    }
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update session storage
  };

  const icons = {
    viewpanel: <PanelRight />,
    message: <MessageCircle />,
    cart: <ShoppingCart />,
    user: <User2 />,
  };

  const views = {
    viewpanel: <ViewPanelPage />,
    message: <Chat />,
    cart: (
      <Cart
        cart={cart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    ),
    user: <Profile />,
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <aside className="hidden lg:block bg-secondary rounded-l-3xl text-white h-screen w-1/6 fixed top-0 right-0">
      <div className="p-4 space-y-2">
        <div className="flex flex-row items-center justify-between">
          {Object.keys(icons).map((icon) => (
            <div
              key={icon}
              className={`flex items-center justify-center${
                icon === "viewpanel" ? "start" : "center"
              } bg-object rounded-full w-10 h-10 cursor-pointer ${
                activeIcon === icon ? "active" : ""
              }`}
              onClick={() => handleIconClick(icon)}
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800"
              >
                {icon === "cart" ? (
                  <>
                    {icons[icon]}
                    {cartItemCount > 0 && (
                      <span className="badge">{cartItemCount}</span>
                    )}
                  </>
                ) : (
                  icons[icon]
                )}
              </motion.button>
            </div>
          ))}
        </div>
        <h2 className="text-2xl text-center font-bold mb-4">Your Cart</h2>
        <div
          className="space-y-12  overflow-y-auto rounded-3xl scrollbar-hide"
          id="viewpanel"
        >
          {views[activeIcon]}
        </div>
      </div>
    </aside>
  );
};

export default MenuBar;
