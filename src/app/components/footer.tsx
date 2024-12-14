import React from "react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer=()=>{
    return(
      
        
        <div>
  <footer className="bg-[#E7E4F8] text-[#8A8FB9] py-10">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-8 lg:px-24">
      {/* Brand Section */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-black">
          <Link href="/">Hekto</Link>
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
          <input
            className="h-10 w-full sm:w-[220px] p-2 rounded border border-gray-300"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="bg-[#FB2E86] text-white px-4 py-2 mt-2 sm:mt-0 rounded">
            Sign Up
          </button>
        </div>
        <div className="text-sm">
          <p>Contact info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-black">Categories</h2>
        <ul className="space-y-2">
          {["Laptops & Computers", "Cameras & Photography", "Smart Phones & Tablets", "Video Games & Consoles", "Waterproof Headphones"].map((item, index) => (
            <li key={index}>
              <Link href="/" className="hover:text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Care Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-black">Customer Care</h2>
        <ul className="space-y-2">
          {["My Account", "Discount", "Returns", "Orders History", "Order Tracking"].map((item, index) => (
            <li key={index}>
              <Link href="/" className="hover:text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Pages Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-black">Pages</h2>
        <ul className="space-y-2">
          {["Blog", "Browse The Shop", "Category", "Pre-Built Pages", "Visual Composer Elements", "WooCommerce Pages"].map((item, index) => (
            <li key={index}>
              <Link href="/" className="hover:text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="bg-slate-100 mt-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-24 py-4">
      <p className="text-sm text-center sm:text-left">
        ©Webecy - All Rights Reserved
      </p>
      <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-900 text-xl" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-xl" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-600 text-xl" />
        </a>
      </div>
    </div>
  </footer>
</div>

    )
}
export default Footer