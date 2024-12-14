import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Free from "../components/free";
import Footer from "../components/footer";
const FAQ=()=>{
    return(
        <div>
            <Topbar/>
            <Navbar/>


            <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
  {/* Breadcrumb */}
 <div>
 <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
  <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
    Faq

  </h1>
  <div className="px-4 sm:px-6 lg:px-14">
    <span>Home</span> &gt; <span>pages</span> &gt;{" "}
    <Link href="/faq">FAQ</Link>
  </div>
</div>
</div>
</div>



<div className="min-h-screen  p-8">
      
        <title>Contact Page</title>
      
      <div className="max-w-7xl mx-auto rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-[#1D3178] mb-4">General Information</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1D3178] mb-2">
                Ex dicunt cum ut sed euismod condimentum?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1D3178] mb-2">
                Magna bibendum et fermentum eros.
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1D3178] mb-2">
                Odio muskana hek tris consequat scelerisque?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1D3178] mb-2">
                Eti id blandit sabara boi velit quo maro?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
     
      <div className="p-6 rounded-lg shadow-md bg-[#F8F8FD]">
  <h2 className="text-2xl font-bold text-[#1D3178] mb-4">Ask a Question</h2>
  <form className="space-y-4">
    <div className="text-[#8990B1]">
      <input
        type="text"
        id="name"
        className="w-full sm:w-[455px] h-[50px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your name"
      />
    </div>
    <div>
      <input
        type="text"
        id="subject"
        className="w-full sm:w-[455px] h-[50px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Subject"
      />
    </div>
    <div>
      <textarea
        id="message"
        className="w-full sm:w-[450px] h-[197px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full sm:w-[156px] h-[48px] bg-[#FB2E86] text-white font-medium py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Send Mail
    </button>
  </form>
</div>

      </div>
    </div>
    <Free/>

    <br/>
    <Footer/>
        </div>
    )
}
export default FAQ