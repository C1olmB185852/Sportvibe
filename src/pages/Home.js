import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import CategoriesSection from "../components/CategoriesSection";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ligaEspañolaa, ligaBetPlay, LigaPremierLeague, LigaAlemana, LigaItaliana,
  LigaFrancesa, EquiposPaises
} from '../assets';


const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData(); // Datos simulados para productos
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Navegación a otra página

  const mockCategories = [
    { id: "Equipos Nacionales", name: "Equipos Nacionales", image: EquiposPaises },
    { id: "Liga Betplay", name: "Liga BetPlay", image: ligaBetPlay },
    { id: "Liga Española", name: "Liga Española", image: ligaEspañolaa },
    { id: "Liga Premier League", name: "Liga Premier League", image: LigaPremierLeague },
    { id: "Liga Alemana", name: "Liga Alemana", image: LigaAlemana },
    { id: "Liga Italiana", name: "Liga Italiana", image: LigaItaliana },
    { id: "Liga Francesa", name: "Liga Francesa", image: LigaFrancesa },

  ];

  useEffect(() => {
    setProducts(data || []); // Asegúrate de que `data` no sea undefined
    setCategories(mockCategories);
  }, [data]);

  const handleCategoryClick = (categoryId) => {
    console.log(`Categoría seleccionada: ${categoryId}`);
    navigate(`/categoria/${categoryId}`); // Navegar a la página de categorías
  };

  return (
    <div className="w-full bg-gray-50">
      <section className="w-full">
        <Banner />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Categorías</h2>
        <CategoriesSection categories={categories} onCategoryClick={handleCategoryClick} />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-12">
        <Products products={products} />
      </section>
    </div>
  );
};

export default Home;
