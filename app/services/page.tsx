"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../header/page";
import Footer from "../footer/page";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function EcommerceSite() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from an API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
        const data = await response.json();
        const formattedData: Product[] = data.map((item: any) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.description,
          image: item.image,
        }));
        setProducts(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <p className="text-center text-lg mt-6">Loading products...</p>;
  }

  return (
    <div>
    <Header/>
    
    <div className="max-w-7xl mx-auto p-6 mt-[70px] ">
      {/* Header */}
    


      

      {/* Shopping Cart */}
      <div className="bg-white h-[300px] p-6 mt-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <ul className="list-none mt-4 space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl font-bold text-gray-700">
          Total: ${cart.reduce((total, item) => total + item.price, 0)}
        </p>
      </div>

      {/* Product Details */}
      {selectedProduct ? (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-200">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
         / >
          <h2 className="text-3xl font-semibold">{selectedProduct.name}</h2>
          <p className="mt-2 text-lg">{selectedProduct.description}</p>
          <p className="mt-4 text-xl font-bold text-gray-800">${selectedProduct.price}</p>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleGoBack}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
            >
              Back to Products
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-lg font-bold text-gray-800">${product.price}</p>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    
    </div>
    <Footer/>
    </div>
  );
}
