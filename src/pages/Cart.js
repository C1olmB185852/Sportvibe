import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, resetCart, removeFromCart, updateCartItemQuantity } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const increaseQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateCartItemQuantity(itemId, item.quantity + 1);
    }
  };

  const decreaseQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(itemId, item.quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:gap-10">
      {/* Lista de productos */}
      <div className="lg:w-2/3 w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Carro de Compras
        </h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-red-600 text-xl md:text-2xl mb-4 md:mb-0 md:mr-4"
              >
                &times;
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg shadow-sm border border-gray-200"
              />
              <div className="flex-1 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0,
                  }).format(item.price)}
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-medium text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <div className="ml-0 md:ml-6 mt-4 md:mt-0 font-semibold text-gray-800">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                }).format(item.price * item.quantity)}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center">
            Su carrito está vacío actualmente.
          </p>
        )}
        {cart.length > 0 && (
          <div className="flex justify-center md:justify-between items-center mt-8">
            <button
              onClick={resetCart}
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition-all"
            >
              Limpiar Carro
            </button>
          </div>
        )}
      </div>

      {/* Totales */}
      <div className="lg:w-1/3 w-full bg-gray-100 p-6 rounded-lg shadow-md mt-10 lg:mt-0 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Totales del Carrito
        </h2>
        <div className="flex justify-between py-3 text-lg border-b border-gray-300">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-semibold text-gray-800">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(subtotal)}
          </span>
        </div>
        <div className="flex justify-between py-3 text-lg border-b border-gray-300">
          <span className="text-gray-700">Envío</span>
          <span className="text-gray-500">Calculado al finalizar la compra</span>
        </div>
        <div className="flex justify-between mt-6 text-2xl font-semibold text-gray-800">
          <span>Total</span>
          <span>
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(subtotal)}
          </span>
        </div>
        <button className="mt-6 bg-blue-600 text-white w-full py-3 rounded-lg shadow hover:bg-blue-700 transition-all">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
