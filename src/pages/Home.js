import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import CategoriesSection from "../components/CategoriesSection"; // Asumiendo que ya tienes la sección de categorías
import { useLoaderData } from "react-router-dom";
import categoriesData from "../pages/categoriesData"; // Importa el archivo de datos de categorías

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(data);
    setCategories(categoriesData); // Usa las categorías del archivo `categoriesData.js`
  }, [data]);

  return (
    <div className="w-full bg-gray-50">
      {/* Sección de banner */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Sección de categorías */}
      <section className="w-full px-4 md:px-8 lg:px-16 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Explora por Categorías</h2>
        <CategoriesSection categories={categories} />
      </section>

      {/* Sección de productos */}
      <section className="w-full px-4 md:px-8 lg:px-16 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Destacados</h2>
        <Products products={products} />
      </section>
    </div>
  );
};

export default Home;
