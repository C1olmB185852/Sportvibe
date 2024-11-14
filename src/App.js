import React, { Suspense } from "react";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { CartProvider } from "./pages/CartContext"; 

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const NotFound = () => <div>Página no encontrada</div>; 


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

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
        path: "/product/:id", 
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider> 
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;
