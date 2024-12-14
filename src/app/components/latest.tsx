import React from "react";
import Image from "next/image";
const Latest=()=>{
    
            const products = [
              { id: 1, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp1.png" },
              { id: 2, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp2.png" },
              { id: 3, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp3.png" },
              { id: 4, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp4.png" },
              { id: 5, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp5.png" },
              { id: 6, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "/lp6.png" },
            ];
          
            return (
                <div>
                    <h1 className="text-4xl text-center font-bold mt-6 text-[#151875]">Latest Products</h1>
                    <div className=" text-black flex flex-col sm:flex-row justify-between items-center py-4 px-6">
                        <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 text-lg px-96 font-semibold">
                            <li className="text-[#FB2E86] underline">New Arrival</li>
                                <li className="text-[#151875]">Best Seller</li>
                               <li className="text-[#151875]"> Featured</li>
                               <li className="text-[#151875]"> Special Offer</li>
                        </ul>
                    </div>
              <div className="max-w-7xl mx-auto p-6">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
                      {/* Product Image */}
                      <Image
                        src={product.img}
                        alt={product.name}
                        height={264}
                        width={303}
                        className=" object-cover"
                      />
                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <div className="flex items-center mt-2">
                          <span className=" text-gray-500 font-bold">{product.price}</span>
                          <span className= "text-red-500 line-through ml-2">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
    )
}
export default Latest