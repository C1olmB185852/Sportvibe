import React, { createContext, useContext, useState, useEffect } from 'react'
const CartContext = createContext();

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Carga inicial desde localStorage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Actualiza localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Añadir un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remover un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar el carrito
  const resetCart = () => {
    setCart([]);
  };

  // Actualizar la cantidad de un producto
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(newQuantity, 1) } // Asegura que la cantidad sea al menos 1
          : item
      )
    );
  };

  // Obtener el total de productos en el carrito
  const getCartTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener el total del costo
  const getCartTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        resetCart,
        updateCartItemQuantity,
        getCartTotalItems,
        getCartTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
