import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
const Pages=()=>{
    const products = [
        {
          id: 1,
          name: "Vel elit euismod",
          price: "$30",
          cutPrice: "$50",
          img: "/pages1.png",
        },
        {
          id: 2,
          name: "Ultricies condimentum imperdiet",
          price: "$25",
          cutPrice: "$40",
          img: "/pages2.png",
        },
        {
            id: 3,
            name: "Vitae suspendisse sed",
            price: "$30",
            cutPrice: "$50",
            img: "/pages3.png",
          },
          {
            id: 4,
            name: "Sed at fermentum",
            price: "$30",
            cutPrice: "$50",
            img: "/pages4.png",
          },
          {
            id: 5,
            name: "Fusce pellentesque at",
            price: "$30",
            cutPrice: "$50",
            img: "/pages5.png",
          },
          {
            id: 6,
            name: "Vestibulum magna laoreet",
            price: "$30",
            cutPrice: "$50",
            img: "/pages6.png",
          },
          {
            id: 7,
            name: "Sollicitudin amet orci",
            price: "$30",
            cutPrice: "$50",
            img: "/pages7.png",
          },
          {
            id: 8,
            name: "Ultrices mauris sit",
            price: "$30",
            cutPrice: "$50",
            img: "/pages8.png",
          },
          {
            id: 9,
            name: "Pellentesque condimentum ac",
            price: "$30",
            cutPrice: "$50",
            img: "/pages9.png",
          },
          {
            id: 10,
            name: "Cras scelerisque velit",
            price: "$30",
            cutPrice: "$50",
            img: "/pages10.png",
          },
          {
            id: 11,
            name: "Lectus vulputate faucibus",
            price: "$30",
            cutPrice: "$50",
            img: "/pages11.png",
          },
          {
            id: 12,
            name: "Purus risus, ut",
            price: "$30",
            cutPrice: "$50",
            img: "/pages12.png",
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
        <Link className="text-[#FB2E86]" href={"/shopgriddefault"}>ShopGirdDefault</Link>
      </div>
    </div>
  </div>
  </div>


    {/* ================================================== */}



  <div className=" p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F6F7FB] rounded-lg shadow-lg p-4 relative group hover:scale-105 transition-transform"
          >
            <div className="relative">
              <Image
                src={product.img}
                alt={product.name}
                width={176}
                height={176}
                className="rounded-md"
              />
             
            </div> 
            <h2 className="mt-4 text-lg font-semibold text-[#151875]">{product.name}</h2>
            
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-[#151875] font-bold">{product.price}</span>
              <span className="line-through text-[#FB2E86]">{product.cutPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
        </div>
    )
}

export default Pages