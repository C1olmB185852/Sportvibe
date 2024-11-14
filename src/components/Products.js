// src/components/Products.js
import React, { useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {

    const [products] = useState([
    {
      id: 1,
      name: "Camiseta De Fútbol Del America De Cali ",
      price: 80000,
      image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466786082_474318559098721_2139661008219257597_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xRdA39o6lqQQ7kNvgHEymXv&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AlNbdMDST5xAKQNqzPswKlU&oh=00_AYDQSzBeK8uEWmF2PLAqCJwY-iHzU8mzP5y0VijvP_64ig&oe=673ADD29", 
    },
    {
      id: 2,
      name: "Camiseta De Fútbol Del Cali",
      price: 80000,
      image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/466594788_474318572432053_1161897252977262629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ql4mHNUfVNIQ7kNvgG6uWx4&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A75flh7QdQiIn5wxoHPt7_L&oh=00_AYDiZ1ssaXBm3S4thWQlJDRqa9ctfkEWg7qLYnoEGLCHnQ&oe=673AE684", 
    },
    {
      id: 3,
      name: "Camiseta De Fútbol Del Atletico Nacional",
      price: 80000,
      image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/467113853_474318702432040_4443163251354758925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g6NbKrOFFhMQ7kNvgHLFe0s&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AKyJKcH1e4MZHou2Yunm9__&oh=00_AYDrxWy7UXWvqP3ccPSWWmWtNQCeWGq2-ePF1hQyYrswmw&oe=673AE327", 
    },
    {
      id: 4,
      name: "Camiseta De Fútbol Del Pereira",
      price: 65000,
      image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466622669_474318709098706_2974306175760168072_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-R-3sxTBu5UQ7kNvgFz7cFK&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=A6CKDDWHja6D2hmBLaWOtHf&oh=00_AYCe_aOuaZDaNfhjjs86h0oINfHOL7TfoLou4ShobiWVNA&oe=673AF95C", 
    },
    {
        id: 5,
        name: "Camiseta De Fútbol Del Tolima",
        price: 80000,
        image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466665587_474318839098693_7309476236803030733_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tCxE7E4GT1kQ7kNvgHAJy6S&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=ABndujtKDgeVEPb54EHLsj0&oh=00_AYDB3rwNapcUsemyTbKVpiFPQMCLekfegasEgPAW2fiu0w&oe=673ACD0B", 
      },
    {
        id: 6,
        name: "Camiseta De Fútbol Del Portugal",
        price: 80000,
        image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/467022941_474318809098696_4361975384019639072_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UZA7k4kQzKMQ7kNvgHBGDL7&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AjId0ZDpPebyXEKkSwqKGnr&oh=00_AYBxJnuC9wvCpM4IXSvVIAkkK-y_t7RISg48WmZjNpI7UA&oe=673AE906", 
    },
    {
        id: 7,
        name: "Camiseta De Fútbol Del Real Madrid",
        price: 80000,
        image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/466783768_474318842432026_3031464179095372952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8YGOPMfrmV4Q7kNvgHD6nS1&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AhZU9XOBMRphr-EDMdbIv-k&oh=00_AYCW34KepjkmIrBXPc_ytoBT31WEBHYYB_o-XZMk7SoWPg&oe=673AFBC1", 
    },
    {
        id: 8,
        name: "Camiseta De Fútbol Del Barcelona",
        price: 80000,
        image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466868333_474318569098720_5305520534588146198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x6-F8_wEg4IQ7kNvgGU-h75&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AjRQnq4wz7opths_II68Ppy&oh=00_AYC361iwxkAQH23Rj-i8xwpvSKYkOc3jWU534t427vG_FQ&oe=673AC77D", 
    },
    {
        id: 9,
        name: "Chaqueta De La Seleccion Colombia",
        price: 120000,
        image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466682716_474318925765351_8821086284704697741_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XYtruyBRRFQQ7kNvgGML4Cg&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=A7QMajUjDDYtwoKvPRj3UZu&oh=00_AYBEZMaSchxcxnJa3Uxih6KzONwW-FJG7leXYnMlVBYz1w&oe=673AF43F", 
    },
    {
        id: 10,
        name: "Chaqueta Del Millonarios",
        price: 120000,
        image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/467124663_474318935765350_4681682092102574405_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NoqRNabBkHMQ7kNvgGErd73&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A2dYnm-9nM99V6GU-hUyswO&oh=00_AYAfa3iBjDF6rN3sA-PvWKuXQqetDugDmCEez7wf7HPlcA&oe=673AFBAB", 
    },
    {
        id: 11,
        name: "Chaqueta Del Santa Fe",
        price: 120000,
        image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466874157_474318705765373_5745061728789218928_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1M9VflbUkZgQ7kNvgHmoJhW&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AEXwUiGSF06OCITBCHgI5N2&oh=00_AYA1Ag8ZNeGkdTczMdUIoGwcd2CRodYNyBHWrVJdPl4lFA&oe=673AE406", 
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
