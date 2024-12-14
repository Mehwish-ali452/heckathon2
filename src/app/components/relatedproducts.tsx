import React from "react";
import Image from "next/image";


const Realtedproducts=()=>{
    
        const products = [
          {
            id: 1,
            name: "Men's Fashion Wear",
            price: "$43.00",
            rating: 4.5,
            image: "/rp1.png"
          },
          {
            id: 2,
            name: "Women's Fashion",
            price: "$67.00",
            rating: 4.7,
            image: "/rp2.png",
          },
          {
            id: 3,
            name: "Wolk Dummy Fashion",
            price: "$67.00",
            rating: 4.2,
            image: "/rpe.png",
          },
          {
            id: 4,
            name: "Top Wall Digital Clock",
            price: "$51.00",
            rating: 4.8,
            image: "/rp4.png",
          },
        ];
      
        return (
          <div className="py-8 px-4 bg-gray-100">
            <h2 className="text-xl font-bold text-center mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={270}
                    height={340}
                    className="w-full h-auto rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[#151875]">
                    {product.name}
                  </h3>
                  <p className="text-[#151875] mt-2">{product.price}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )
}
export default Realtedproducts