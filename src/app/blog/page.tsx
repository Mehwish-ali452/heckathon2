import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Free from "../components/free";
import Footer from "../components/footer";
import Link from "next/link";
const Blog=()=>{
    return(
      <div>
        <Topbar/>
        <Navbar/>


          
        <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
      {/* Breadcrumb */}
     <div>
     <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        About Us
      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>Blog page</span> &gt;{" "}
        <Link href="/blogpage">Blogpage</Link>
      </div>
    </div>
  </div>
  </div>

        <div className="bg-gray-50 py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="col-span-8 space-y-12">
              {/* Blog Post 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src="/blog1.png"
                  alt="Post 1"
                  width={870}
                  height={453}
                  
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Surf Auxion</span>
                    <span>•</span>
                    <span>Aug 09 2020</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#151875] mt-2">
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h2>
                  <p className="text-[#8A8FB9] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              {/* Blog Post 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src="/blog3.png"
                  alt="Post 2"
                  width={870}
                  height={453}
                  className="w-full"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[#151875]">
                    <span>Surf Auxion</span>
                    <span>•</span>
                    <span>Aug 09 2020</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">
                    Aenean vitae in aliquam ultrices lectus. Etiam.
                  </h2>
                  <p className="text-[#8A8FB9] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              {/* Blog Post 3 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src="/blog4.png"
                  alt="Post 3"
                  width={870}
                  height={453}
                  className="w-full"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[#151875]">
                    <span>Surf Auxion</span>
                    <span>•</span>
                    <span>Aug 09 2020</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">
                    Sit nam congue feugiat nisl, mauris amet nisi.
                  </h2>
                  <p className="text-[#8A8FB9] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
  
            {/* Right Section (Sidebar) */}
           
    <div className="col-span-4 space-y-8 p-4 sm:p-6 lg:p-8 bg-gray-100">
  {/* Search Widget */}
  <div className="shadow-md rounded-lg p-6">
    <h3 className="text-lg font-bold text-[#151875]">Search</h3>
    <input
      type="text"
      placeholder="Search For Posts"
      className="w-full mt-4 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>

  {/* Categories Widget */}
  <div className="shadow-md rounded-lg p-6">
    <h3 className="text-lg font-bold text-[#151875]">Categories</h3>
    <ul className="mt-4 space-y-2">
      <li>
        <a href="#" className="text-white bg-[#F939BF] px-4 py-1 rounded inline-block">
          Hobbies (14)
        </a>
      </li>
      <li>
        <a href="#" className="text-[#3F509E]">Women (21)</a>
      </li>
      <li>
        <a href="#" className="text-[#3F509E]">Hobbies (14)</a>
      </li>
    </ul>
  </div>
  {/* ========================recrnet post=================== */}
 
          <div className="shadow-md rounded-lg p-6">
  <h3 className="text-lg font-bold text-[#151875]">Recent Posts</h3>
  <ul className="mt-4 space-y-4">
    {[1, 2, 3, 4].map((item) => (
      <li 
        key={item} 
        className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4"
      >
        <Image
          src={`/recent${item}.png`}
          alt="Recent Post"
          width={70}
          height={57}
          className="rounded-lg w-full sm:w-20 h-auto"
        />
        <span className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
          Elit ornare in enim mauris.<br />
          <span className="text-xs sm:text-sm text-gray-400">Aug 09 2020</span>
        </span>
      </li>
    ))}
  </ul>
        
  </div>
  {/* ==============================sale product================= */}

  {/* Sale Product */}
  
  <div className="shadow-md rounded-lg p-6">
  <h3 className="text-lg font-bold text-[#151875]">Sale Product</h3>
  <ul className="mt-4 space-y-4">
    {[1, 2, 3].map((item) => (
      <li 
        key={item} 
        className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4"
      >
        <Image
          src={`/recent${item}.png`}
          alt="Sale Product"
          width={70}
          height={57}
          className="rounded-lg w-full sm:w-20 h-auto"
        />
        <span 
          className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-normal text-center sm:text-left"
        >
          Elit ornare in enim mauris.<br /> 
          <span className="text-xs sm:text-sm text-gray-400">Aug 09 2020</span>
        </span>
      </li>
    ))}
  </ul>
</div>


  {/* Offer Products Section */}
  <div>
    <h2 className="text-lg font-semibold mb-4 text-[#151875]">Offer Product</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { id: 1, name: 'Duis lectus est.', price: '$20.00 - $35.00', image: '/rp5.png' },
        { id: 2, name: 'Sed placerat.', price: '$40.00 - $55.00', image: '/rp6.png' },
        { id: 3, name: 'Natus prim.', price: '$30.00 - $50.00', image: '/rp7.png' },
        { id: 4, name: 'Platea in.', price: '$25.00 - $40.00', image: '/rp8.png' },
      ].map((product) => (
        <div key={product.id} className="flex flex-col items-center bg-white p-4 rounded shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={126}
            height={80}
            className="rounded mb-2"
          />
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Follow Section */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4 text-[#151875]">Follow</h2>
    <div className="flex space-x-4">
      <a href="#" className="text-blue-600 text-2xl">
        <FaFacebook />
      </a>
      <a href="#" className="text-pink-500 text-2xl">
        <FaInstagramSquare />
      </a>
      <a href="#" className="text-cyan-500 text-2xl">
        <FaTwitterSquare />
      </a>
    </div>
  </div>

  {/* Tags Section */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4 text-[#151875]">Tags</h2>
    <div className="flex flex-wrap gap-2">
      {['General', 'Aenean', 'Ipsum', 'Bibendum', 'Nulla'].map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 px-3 py-1 rounded text-sm text-[#151875] hover:bg-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>

          </div>
          
        </div>
      </div>
      <Free/>

      <Footer/>
      </div>
      
    )
}
export default Blog