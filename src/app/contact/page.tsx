import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";
const Contact=()=>{
    return( 
        <div>
            <Topbar/>
            <Navbar/>
            <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
      {/* Breadcrumb */}
     <div>
     <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        Contact us

      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>pages</span> &gt;{" "}
        <Link href="/notfound">NotFound</Link>
      </div>
    </div>
  </div>
  </div>

        
            <div className="bg-gray-50 py-10 px-36">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Information About Us */}
                <div>
                  <h2 className="text-2xl font-bold text-[#151875] mb-4">
                    Information About Us
                  </h2>
                  <p className="text-[#8A8FB9] leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                    neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                    tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                    vitae lobortis quis bibendum quam.
                  </p>
                  <div className="flex space-x-3">
                    <span className="w-6 h-6 bg-[#5625DF] rounded-full"></span>
                    <span className="w-6 h-6 bg-[#FF27B7] rounded-full"></span>
                    <span className="w-6 h-6 bg-[#37DAF3] rounded-full"></span>
                  </div>
                </div>
        
                {/* Contact Way */}
                
                <div className="px-4 sm:px-8 md:px-16 lg:px-32">
  <h2 className="text-xl sm:text-2xl font-bold text-[#151875] mb-4">
    Contact Way
  </h2>
  <ul className="space-y-4">
    {[ 
      {
        iconBg: "bg-blue-800",
        lines: ["Tel: 877-67-88-99", "Email: shop@store.com"],
      },
      {
        iconBg: "bg-yellow-500",
        lines: ["20 Margaret St, London", "Great Britain, 3NM98-LK"],
      },
      {
        iconBg: "bg-green-500",
        lines: ["Support Forum", "For over 24hr"],
      },
      {
        iconBg: "bg-red-400",
        lines: ["Free standard shipping", "On all orders"],
      },
    ].map((item, index) => (
      <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <span className={`w-6 h-6 ${item.iconBg} rounded-full`}></span>
        <div>
          {item.lines.map((line, lineIndex) => (
            <p key={lineIndex} className="text-sm sm:text-base text-[#8A8FB9]">
              {line}
            </p>
          ))}
        </div>
      </li>
    ))}
  </ul>
</div>

              </div>
            </div>

            {/* ==========================signup form============================ */}


            <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-10">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Left Side - Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-[#151875] mb-4">Get In Touch</h2>
            <p className="text-[#8A8FB9] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#8A8FB9] text-sm font-medium mb-2"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="blod text-[#8A8FB9] text-sm font-medium mb-2"
                  >
                  
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Your E-mail"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-[#8A8FB9] text-sm font-medium mb-2"
                >
                
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[#8A8FB9] text-sm font-medium mb-2"
                >
                  
                </label>
                <textarea
                  id="message"
                  
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[157px] h-[44px] bg-[#FB2E86] text-white py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Right Side - Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/contact1.png" // Replace this with the image in your public folder
              alt="Contact Illustration"
              width={723}
              height={629}
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer/>
            </div>
    )
}
export default Contact