import React from "react";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Items=()=>{
  
  
    
  
    return (
      
      
      <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
  {/* Breadcrumb */}
  <div>
    <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        Product Details
      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>Pages</span> &gt;{" "}
        <Link className="text-[#FB2E86]"href="/products">Productsdetail</Link>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
    {/* Image Section */}
    <div className="flex flex-col lg:flex-row">
      {/* Thumbnails */}
      <div className="flex flex-row lg:flex-col gap-2 lg:gap-4 mb-4 lg:mb-0 lg:mr-4">
        <Image
          src="/p1.png"
          alt="Thumbnail 1"
          width={151}
          height={155}
          className="w-16 h-16 sm:w-20 sm:h-20 border rounded-lg object-cover cursor-pointer"
        />
        <Image
          src="/p2.png"
          alt="Thumbnail 2"
          width={151}
          height={155}
          className="w-16 h-16 sm:w-20 sm:h-20 border rounded-lg object-cover cursor-pointer"
        />
        <Image
          src="/p3.png"
          alt="Thumbnail 3"
          width={151}
          height={155}
          className="w-16 h-16 sm:w-20 sm:h-20 border rounded-lg object-cover cursor-pointer"
        />
      </div>
      {/* Main Image */}
      <div className="w-full h-72 sm:h-96 border rounded-lg overflow-hidden">
        <Image
          src="/p4.png"
          alt="Main Product"
          width={375}
          height={487}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Product Details */}
    <div className="space-y-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D134E] mt-4 lg:mt-10">
        Playwood Arm Chair
      </h1>
      {/* Rating */}
      <div className="flex items-center">
        <div className="flex text-yellow-500">
          <span>★</span> <span>★</span> <span>★</span> <span>★</span>{" "}
          <span className="text-gray-300">★</span>
        </div>
        <span className="ml-2 text-gray-500 text-sm">(22)</span>
      </div>
      {/* Price */}
      <div className="text-lg sm:text-xl font-bold text-[#151875]">
        $32.00{" "}
        <span className="line-through px-2 sm:px-4 text-[#FB2E86]">$52.00</span>
      </div>
      {/* Description */}
      <p className="text-sm sm:text-base text-[#A9ACC6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tellus porttitor purus et vulputate.
      </p>
      {/* Add to Cart Button */}
      <button className="py-2 px-4 bg-[#FB2E86] text-white rounded-lg hover:bg-[#D12572] transition duration-300">
        Add to Cart
      </button>
      {/* Additional Information */}
      <div className="text-[#151875] text-sm">
        <p>Categories</p>
        <p className="mt-2">Tags</p>
        <div className="flex items-center gap-2 mt-2">
          <span>Share:</span>
          <div className="flex gap-2">
            <CiFacebook className="text-lg cursor-pointer" />
            <FaInstagram className="text-lg cursor-pointer" />
            <FaTwitter className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
  );
};

  

export default Items