import React from "react";

import Image from "next/image";
const Featured=()=>{
    
  const products = [
    { id: 1, name: "Cantilever Chair", code: "Y523308", price: "$42.00", image: "/f1.png", },
    { id: 2, name: "Cantilever Chair", code: "YB93009", price: "$48.00", image: "/f2.png", featured: true },
    { id: 3, name: "Cantilever Chair", code: "Y523308", price: "$42.00", image: "/f3.png" },
    { id: 4, name: "Cantilever Chair", code: "Y523308", price: "$42.00", image: "/f4.png" },
  ];

  return (
    <section className="px-8 py-16 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border rounded-lg p-4 bg-white shadow-md ${
              product.featured ? "bg-blue-100" : ""
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              height={150}
              width={130}
              className=" object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-red-500">{product.name}</h3>
            <p className="text-sm  text-blue-500">Code: {product.code}</p>
            <p className="text-lg font-bold text-blue-500">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
    )
}
export default Featured