


// src/components/Products.js
import React from 'react';

const Products = () => {
  // Product data with images and prices
  const products = [
    {
      id: 1,
      name: 'ROSE',
      price: 50,
      image: process.env.PUBLIC_URL + '/images/rose.jpg'

    },
    // Add more products
    {
      id: 1,
      name: 'TULIP',
      price: 30,
      image: process.env.PUBLIC_URL + '/images/Tulip.jpg'
    },

    {
      id: 1,
      name: 'ORCHIDS',
      price: 50,
      image: process.env.PUBLIC_URL + '/images/Orchids.jpeg'
    },
  

    {
      id: 1,
      name: 'LILY',
      price: 30,
      image: process.env.PUBLIC_URL + '/images/Lily.jpg'
    },

    {
      id: 1,
      name: 'SUNFLOWER',
      price: 70,
      image: process.env.PUBLIC_URL + '/images/sunflower.jpeg'
    },

    {
      id: 1,
      name: 'DAHLIA',
      price: 60,
      image: process.env.PUBLIC_URL + '/images/dahlia.jpg'
    },

    {
      id: 1,
      name: 'PEONY',
      price: 100,
      image: process.env.PUBLIC_URL + '/images/peony.jpg'
    },

    {
      id: 1,
      name: 'HYDRANGEA',
      price: 200,
      image: process.env.PUBLIC_URL + '/images/Hydrangea.jpg'
    },

    {
      id: 1,
      name: 'BIRD OF PARADISE',
      price: 500,
      image: process.env.PUBLIC_URL + '/images/Bird of Paradise.jpg'
    },

    {
      id: 1,
      name: 'GERBERA DAISY',
      price: 100,
      image: process.env.PUBLIC_URL + '/images/Gerbera Daisy.jpg'
    },
  ];


return (
  <div>
    <h1 className='Menu'>FLOWER LIST</h1>
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price">Rs.{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Products;