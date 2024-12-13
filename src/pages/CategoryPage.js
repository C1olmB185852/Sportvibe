import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CamisetaAmerica, CamisetaCali, CamisetaNacional, CamisetaPortugal,
  CamisetaPereira, CamisetaTolima, CamisetaRealMadrid, CamisetaBarcelona, ChaquetaColombia,
  ChaquetaMillonarios, ChaquetaSantae } from "../assets";
import ProductsCard from "../components/ProductsCard"; 

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Camiseta De Fútbol Del America De Cali ",
      price: 80000,
      category: "Liga Betplay",
      image: CamisetaAmerica
    },
    {
      id: 2,
      name: "Camiseta De Fútbol Del Cali",
      price: 80000,
      category: "Liga Betplay",
      image: CamisetaCali
    },
    {
      id: 3,
      name: "Camiseta De Fútbol Del Atletico Nacional",
      price: 80000,
      category: "Liga Betplay",
      image: CamisetaNacional
    },
    {
      id: 4,
      name: "Camiseta De Fútbol Del Pereira",
      price: 65000,
      category: "Liga Betplay",
      image: CamisetaPereira
    },
    {
      id: 5,
      name: "Camiseta De Fútbol Del Tolima",
      price: 80000,
      category: "Liga Betplay",
      image: CamisetaTolima
    },
  {
      id: 6,
      name: "Camiseta De Fútbol Del Portugal",
      price: 80000,
      category: "Equipos Nacionales",
      image: CamisetaPortugal
  },
    {
      id: 7,
      name: "Camiseta De Fútbol Del Real Madrid",
      price: 80000,
      category: "Liga Española",
      image: CamisetaRealMadrid
    },
    {
      id: 8,
      name: "Camiseta De Fútbol Del Barcelona",
      price: 80000,
      category: "Liga Española",
      image: CamisetaBarcelona
    },
    {
      id: 9,
      name: "Chaqueta De La Seleccion Colombia",
      price: 120000,
      category: "Equipos Nacionales",
      image: ChaquetaColombia
    },
    {
      id: 10,
      name: "Chaqueta Del Millonarios",
      price: 120000,
      category: "Liga Betplay",
      image: ChaquetaMillonarios
    },
    {
      id: 11,
      name: "Chaqueta Del Santa Fe",
      price: 120000,
      category: "Liga Betplay",
      image: ChaquetaSantae
    }
  ];

  useEffect(() => {
    const filtered = products.filter(product => product.category === categoryId);
    setFilteredProducts(filtered);
  }, [categoryId]);

  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl  text-center text-blue-600 mb-8">
        Categoría: <span className="capitalize">{categoryId}</span>
      </h1>

      <ProductsCard products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
