// App.js
import React, { Suspense } from "react";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { CartProvider } from "./pages/CartContext"; // Importa CartProvider para envolver la aplicación con el contexto de carrito

// Importamos los componentes de manera diferida para mejorar el rendimiento
const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const NotFound = () => <div>Página no encontrada</div>; // Componente simple para rutas inválidas

// Definimos el layout principal con el Header y Outlet para renderizar las rutas hijas
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Definimos las rutas de la aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product/:id", // Ruta dinámica para los detalles de producto
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "*", // Ruta de "404" para rutas que no existen
        element: <NotFound />,
      },
    ],
  },
]);

// Componente principal App que usa RouterProvider para administrar la navegación
function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación con CartProvider */}
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;
