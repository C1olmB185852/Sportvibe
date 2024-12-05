import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import CategoriesSection from "../components/CategoriesSection"; // Asumiendo que ya tienes la sección de categorías
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const [categories, setCategories] = useState([]);

  const mockCategories = [
    { id: "camisetas", name: "Camisetas", image: "https://via.placeholder.com/150x100.png?text=Camisetas" },
    { id: "zapatos", name: "Zapatos", image: "https://via.placeholder.com/150x100.png?text=Zapatos" },
    { id: "gorras", name: "Gorras", image: "https://via.placeholder.com/150x100.png?text=Gorras" },
    { id: "accesorios", name: "Accesorios", image: "https://via.placeholder.com/150x100.png?text=Accesorios" },
    { id: "balones", name: "Balones", image: "https://via.placeholder.com/150x100.png?text=Balones" },
  ];

  useEffect(() => {
    setProducts(data);
    setCategories(mockCategories);
  }, [data]);

  return (
    <div className="w-full bg-gray-50">
      <section className="w-full">
        <Banner />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Explora por Categorías</h2>
        <CategoriesSection categories={categories} />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Destacados</h2>
        <Products products={products} />
      </section>
    </div>
  );
};

export default Home;
