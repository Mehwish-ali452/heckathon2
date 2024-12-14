import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
const ShopGirdDefault=()=>{



    const products = [
        {
          id: 1,
          title: "Accumsan tincidunt",
          price: "$26.00",
          originalPrice: "$50.00",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
          image: "/shop1.png",
          rating: 4,
        },
        {
          id: 2,
          title: "In nulla",
          price: "$26.00",
          originalPrice: "$50.00",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
          image: "/shop2.png",
          rating: 3,
        },
        {
          id: 3,
          title: "Vel sem",
          price: "$26.00",
          originalPrice: "$50.00",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
          image: "/shop3.png",
          rating: 5,
        },
        {
            id: 4,
            title: "Porttitor cum",
            price: "$26.00",
            originalPrice: "$50.00",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
            image: "/shop4.png",
            rating: 5,
          },
          {
            id: 5,
            title: "Nunc in",
            price: "$26.00",
            originalPrice: "$50.00",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
            image: "/shop5.png",
            rating: 5,
          },
          {
            id: 6,
            title: "Vitae facilisis",
            price: "$26.00",
            originalPrice: "$50.00",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
            image: "/shop6.png",
            rating: 5,
          },
          {
            id: 7,
            title: "Curabitur lectus",
            price: "$26.00",
            originalPrice: "$50.00",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
            image: "/shop7.png",
            rating: 5,
          },
      ];
    return(
  <div>
  <Topbar/>
  <Navbar/>

  <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
      {/* Breadcrumb */}
     <div>
     <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        Shop Grid Default
      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>Pages</span> &gt;{" "}
        <Link className="text-[#FB2E86]" href={"/shoppingcurt"}>ShoppingCurt</Link>
      </div>
    </div>
  </div>
  </div>


  {/* ================================================== */}
  <div className="max-w-6xl mx-auto py-8 px-10">
      <h1 className="text-2xl font-semibold mb-6">Product List</h1>
      <div className="grid gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex border border-gray-200 p-4 rounded-lg hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={313}
              height={217}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold text-[#111C85]">{product.title}</h2>
              <div className="flex items-center space-x-2">
                <p className="text-[#111C85] font-semibold">{product.price}</p>
                <p className="line-through text-[#FF2AAA]">{product.originalPrice}</p>
                <div className="flex text-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
              </div>
              
              <p className="text-[#9295AA] text-sm mt-2">{product.description}</p>
             

              <div className="flex space-x-4 text-gray-500 text-sm mt-3">
                <button className="hover:text-gray-700">♡</button>
                <button className="hover:text-gray-700">🔄</button>
                <button className="hover:text-gray-700">🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    
  </div>
    )
}
export default ShopGirdDefault