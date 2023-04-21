import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product,e, addQuantity = 1) => {
    e.preventDefault();
    const existingCartItem = cartItems.find((item) => item.ID === product.ID);
    if (existingCartItem) {
      const updatedItems = cartItems.map((item) =>
      item.ID === product.ID
        ? { ...item, quantity: item.quantity + addQuantity }
        : item)
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    } else {
      const newItems = [...cartItems, { ...product, quantity: addQuantity }];
      setCartItems(newItems);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    }
  };

  const handleQuantityChange = (product, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      increaseQuantity(product, quantity);
    }
  };


  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.ID !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const increaseQuantity = (product, _quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.ID === product.ID) {
        return { ...item, quantity: _quantity ? _quantity : item.quantity + 1} ;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.ID === id) {
        const newQuantity = item.quantity - 1;
        if (newQuantity === 0) {
          // Sản phẩm có số lượng mới bằng 0, xoá sản phẩm đó khỏi giỏ hàng
          return null;
        } else {
          // Sản phẩm có số lượng mới khác 0, giảm số lượng sản phẩm
          return { ...item, quantity: newQuantity };
        }
      } else {
        return item;
      }
    }).filter(item => item !== null);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  // Tính tổng tiền của giỏ hàng
  const calculateTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.Price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        handleQuantityChange,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
