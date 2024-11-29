// src/components/Products.js
import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { CamisetaAmerica, CamisetaCali, CamisetaNacional, CamisetaPortugal,
  CamisetaPereira, CamisetaTolima, CamisetaRealMadrid, CamisetaBarcelona, ChaquetaColombia,
  ChaquetaMillonarios, ChaquetaSantae} from '../assets';

const Products = () => {

    const [products] = useState([
    {
      id: 1,
      name: "Camiseta De Fútbol Del America De Cali ",
      price: 80000,
      image: CamisetaAmerica
    },
    {
      id: 2,
      name: "Camiseta De Fútbol Del Cali",
      price: 80000,
      image: CamisetaCali
    },
    {
      id: 3,
      name: "Camiseta De Fútbol Del Atletico Nacional",
      price: 80000,
      image: CamisetaNacional
    },
    {
      id: 4,
      name: "Camiseta De Fútbol Del Pereira",
      price: 65000,
      image: CamisetaPereira
    },
    {
        id: 5,
        name: "Camiseta De Fútbol Del Tolima",
        price: 80000,
        image: CamisetaTolima
      },
    {
        id: 6,
        name: "Camiseta De Fútbol Del Portugal",
        price: 80000,
        image: CamisetaPortugal
    },
    {
        id: 7,
        name: "Camiseta De Fútbol Del Real Madrid",
        price: 80000,
        image: CamisetaRealMadrid
    },
    {
        id: 8,
        name: "Camiseta De Fútbol Del Barcelona",
        price: 80000,
        image: CamisetaBarcelona
    },
    {
        id: 9,
        name: "Chaqueta De La Seleccion Colombia",
        price: 120000,
        image: ChaquetaColombia
    },
    {
        id: 10,
        name: "Chaqueta Del Millonarios",
        price: 120000,
        image: ChaquetaMillonarios
    },
    {
        id: 11,
        name: "Chaqueta Del Santa Fe",
        price: 120000,
        image: ChaquetaSantae
    }   
  ]);

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold bg-blue-700 text-white py-3 w-60 text-center">
          Camisetas Sportvibe
        </h1>
        <span className="w-20 h-[3px] bg-blue-700"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Síguenos en Instagram para estar al tanto de nuevas camisetas que tengamos en venta. 
          Salimos como{" "}
          <a 
            href="https://www.instagram.com/camisetas_sportvibe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline font-bold"
          >
            Camisetas_Sportvibe
          </a>
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard products={products} />
      </div>
    </div>
  );
};

export default Products;
