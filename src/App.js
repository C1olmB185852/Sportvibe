import React, { Suspense, useMemo } from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from "./pages/CartContext";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const NotFound = () => <div className="text-center p-6">Página no encontrada</div>;

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-lg">Cargando...</div>
  </div>
);

const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

const App = () => {
  const router = useMemo(() => createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "/categoria/:categoryId",
          element: (
            <Suspense fallback={<Loading />}>
              <CategoryPage />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]), []);

  return (
    <CartProvider>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
};

export default App;
