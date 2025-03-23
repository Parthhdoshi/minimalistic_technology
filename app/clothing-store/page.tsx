"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ClothingStore: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const menClothing = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
        const womenClothing = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
        setProducts([...menClothing.data, ...womenClothing.data]);
      } catch (error) {
        console.error("Error fetching clothing products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">👕 Clothing Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-56 w-full object-contain bg-gray-50 p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
              <p className="text-red-500 font-bold text-xl mt-2">${product.price}</p>
              <p className="text-sm text-gray-500 mt-1 capitalize">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingStore;
