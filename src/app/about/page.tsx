import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Shopex from "../components/shopex";
import Footer from "../components/footer";

const About=()=>{
    return(
    <div>
        <Topbar/>
        <Navbar/>
        
        {/*  -==================About us=============================== */}
        
        <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
      {/* Breadcrumb */}
     <div>
     <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        About Us
      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>Pages</span> &gt;{" "}
        <Link href="/productsdetails">AboutUs</Link>
      </div>
    </div>
  </div>
  </div>

   {/*  -==================Know about our Ecommerce=============================== */}
  
  <div className="flex items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-6 max-w-4xl flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Picture */}
        <div className="w-full md:w-1/2">
          <Image
            src="/about1.png" 
            alt="Descriptive Alt Text" 
            height={570}
            width={409}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h1 className="text-2xl font-bold text-[#151875] mb-4">
          Know About Our Ecomerce
          Business, History
          </h1>
          <p className="text-[#8A8FB9] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="px-6 py-2 bg-[#FB2E86] text-white rounded-lg shadow hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
     {/*  =======================our Features============================ */}
             
             <Shopex/>


    {/* ==================================our Client say====================== */}

    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto text-center  shadow-lg rounded-lg p-8 max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-black mb-6">
          Our Client Say!
        </h1>

        {/* Images */}
        <div className="flex justify-center space-x-4 mb-6">
          <Image
            src="/client1.png"
            alt="Client 1"
            width={55}
            height={55}
            className="w-16 h-16  object-cover border-2 border-gray-300"
          />
          <Image
            src="/client2.png"
            alt="Client 2"
            width={55}
            height={55}
            className="w-16 h-16  object-cover border-2 border-gray-300"
          />
          <Image
            src="/cliennt3.png"
            alt="Client 3"
            width={55}
            height={55}
            className="w-16 h-16  object-cover border-2 border-gray-300"
          />
        </div>

        {/* Name and Position */}
        <h2 className="text-lg font-semibold text-[#151875]">Selina Gomez</h2>
        <p className="text-sm text-[#8A8FB9] mb-4">CEO at Webecy Digital</p>

        {/* Testimonial Text */}
        <p className="text-[#8A8FB9] leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>

        {/* Divider */}
        <div className="mx-auto w-16 h-1 bg-pink-500 rounded"></div>
      </div>
    </div>
    
    {/* ===========================Footer============================== */}

    <Footer/>
</div>

    )
}
export default About