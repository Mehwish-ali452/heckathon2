import React from "react";
import Image from "next/image";

const Treading=()=>{
    return(
        
           
    <section className="p-8">
  <div className="container mx-auto">
    {/* Top Discount Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      {/* Discount Card 1 */}
      <div className="text-center bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-[#151875]">
          23% off in all products
        </h3>
        <button className="mt-4 py-2 px-4 text-[#FB2E86] border border-[#FB2E86] rounded hover:bg-[#FB2E86] hover:text-white transition">
          Shop Now
        </button>
        <div className="flex justify-center mt-4">
          <Image
            src="/trending1.png"
            alt="pic"
            height={207}
            width={213}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Discount Card 2 */}
      <div className="text-center bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-[#151875]">
          23% off in all products
        </h3>
        <button className="mt-4 py-2 px-4 text-[#FB2E86] border border-[#FB2E86] rounded hover:bg-[#FB2E86] hover:text-white transition">
          Shop Now
        </button>
        <div className="flex justify-center mt-4">
          <Image
            src="/trending2.png"
            alt="pic"
            height={173}
            width={312}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {["Executive Seat Chair - $300", "Executive Seat Chair - $400", "Executive Seat Chair - $500"].map(
          (product, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
            >
              <span className="text-[#151875] text-sm sm:text-base">{product}</span>
            </div>
          )
        )}
      </div>
    </div>

    {/* Discount Item Section */}
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#151875] uppercase text-center md:text-left">
              Discount Item
            </h2>
            <nav className="mt-4 text-center md:text-left">
              <ul className="flex justify-center md:justify-start space-x-4 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-700 text-[#FB2E86]">
                    Wood Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-[#151875]">
                    Plastic Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-[#151875]">
                    Sofa Collection
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#151875] mt-6">
              20% Discount On All Products
            </h3>
            <p className="text-[#FB2E86] mt-4">Eames Sofa Compact</p>
            <p className="text-[#B7BACB] mt-2 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              dolorum, cumque corporis nam aut modi ducimus, voluptas, amet cum
              facilis ipsum! Quia similique necessitatibus voluptates
              reiciendis. Assumenda dolorum eos quisquam?
            </p>
            <ul className="text-[#B7BACB] text-sm mt-4 space-y-2">
              <li>✔ High-quality material</li>
              <li>✔ Modern design</li>
              <li>✔ Multiple color options</li>
              <li>✔ Affordable price</li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-[#FB2E86] text-white text-sm font-medium rounded-md hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/item1.png"
              alt="Eames Sofa"
              height={597}
              width={699}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

    )
}
export default Treading