// Import necessary components and styles
import React, { useState } from "react";
import { PackageMinus, PackagePlus } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist in the cart, add it
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-object rounded-3xl w-48 h-[28rem] text-gray-50 p-4">
      <h1 className="p-2 text-lg text-gray-50 text-center font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.productName}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                <PackageMinus />
              </button>
              <input
                className="text-gray-900 rounded-full w-full pl-3"
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}
      <button
        className="text-green-600"
        onClick={() =>
          addToCart({
            id: 1,
            productName: "Product 1",
            price: 10.99,
          })
        }
      >
        <span className="">
          <PackagePlus />
        </span>
      </button>
    </div>
  );
};

export default Cart;
