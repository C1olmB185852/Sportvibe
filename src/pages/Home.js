import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();  // Aquí es donde obtienes los datos
  
  useEffect(() => {
    // Si 'data' ya es un array o los productos, simplemente asignarlos directamente
    setProducts(data);  // No necesitas acceder a 'data.data', solo asigna 'data' directamente
  }, [data]);
  
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
