import Navbar from "../components/Navbar";
import {Footer} from "../components/Footer";
import ProductCardWithData from "../components/ProductCardWithData.tsx";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Smartfon Samsung Galaxy",
    category: "Elektronika",
    transactionType: "Oddam za darmo",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 2,
    name: "Książka 'JavaScript od podstaw'",
    category: "Książki",
    transactionType: "Wymiana",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 3,
    name: "Zestaw garnków kuchennych",
    category: "Dom i Ogród",
    transactionType: "Oddam za darmo",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 4,
    name: "Bluza z kapturem",
    category: "Moda",
    transactionType: "Wymiana",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 5,
    name: "Laptop Lenovo",
    category: "Elektronika",
    transactionType: "Oddam za darmo",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 6,
    name: "Rowerek dziecięcy",
    category: "Inne",
    transactionType: "Wymiana",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 7,
    name: "Książka 'Historia Sztuki'",
    category: "Książki",
    transactionType: "Oddam za darmo",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 8,
    name: "Sukienka wieczorowa",
    category: "Moda",
    transactionType: "Wymiana",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
  {
    id: 9,
    name: "Deska do prasowania",
    category: "Dom i Ogród",
    transactionType: "Oddam za darmo",
    image: "https://placehold.co/600x400/EEE/31343C",
    rating: 5
  },
];

const categories = ["Elektronika", "Dom i Ogród", "Moda", "Książki", "Inne"];
const transactionTypes = ["Oddam za darmo", "Wymiana"];

export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTransactionType, setSelectedTransactionType] = useState("");

  const filteredProducts = products
    .filter((product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedTransactionType || product.transactionType === selectedTransactionType) &&
      (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl w-full mx-auto mt-10 px-4">
        <h1 className="text-3xl mb-6">Marketplace</h1>

        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <input
            type="text"
            placeholder="Wyszukaj..."
            className="p-2 border rounded-md w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="p-2 border rounded-md w-full md:w-1/3 mt-4 md:mt-0"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Wszystkie kategorie</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            className="p-2 border rounded-md w-full md:w-1/3 mt-4 md:mt-0"
            value={selectedTransactionType}
            onChange={(e) => setSelectedTransactionType(e.target.value)}
          >
            <option value="">Wszystkie typy</option>
            {transactionTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCardWithData key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">Brak wyników dla wybranych filtrów</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
