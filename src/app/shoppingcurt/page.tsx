import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
const ShoppingCurts=()=>{
    return(
        <div>

            <Topbar/>
            <Navbar/>
            <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
      {/* Breadcrumb */}
     <div>
     <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
      <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
        Shopping Curt
      </h1>
      <div className="px-4 sm:px-6 lg:px-14">
        <span>Home</span> &gt; <span>Pages</span> &gt;{" "}
        <Link className="text-[#FB2E86]" href={"/products"}>Products</Link>
      </div>
    </div>
  </div>
  </div>
        
      
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Section */}
            <div className="col-span-2">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-4 text-[#1D3178]">Product</th>
                    <th className="pb-4 text-[#1D3178]">Price</th>
                    <th className="pb-4 text-[#1D3178]">Quantity</th>
                    <th className="pb-4 text-[#1D3178]">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4 flex items-center space-x-4">
                        <Image
                          src="/curt1.png"
                          alt="pic"
                          className="w-12 h-12 rounded-lg"
                          width={83}
                          height={87}
                        />
                        
                        <div>
                          <p className="font-semibold">Ut diam consequat</p>
                          <p className="text-sm text-gray-500">Color: Brown | Size: XL</p>
                        </div>
                      </td>
                      <td className="py-4 text-[#15245E]">$32.00</td>
                      <td className="py-4">
                        <input
                          type="number"
                          defaultValue={1}
                          className="w-12 border rounded-lg px-2 text-center"
                        />
                      </td>
                      <td className="py-4 text-[#15245E]">$219.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-6">
                <button className="bg-[#FB2E86] text-white px-4 py-2 rounded-md">
                  Update Cart
                </button>
                <button className="bg-[#FB2E86] text-white px-4 py-2 rounded-md">
                  Clear Cart
                </button>
              </div>
            </div>
            {/* Totals Section */}
            <div>
              <div className="p-6 bg-gray-100 rounded-lg mb-6">
                <h2 className="font-bold text-[#15245E] text-3xl">Cart Totals</h2>
                <div className="flex justify-between mt-4 text-[#15245E]">
                  <p className="text-2xl font-semibold">Total:</p>
                  <p>$219.00</p>
                </div>
                <div className="flex justify-between mt-2 text-[#15245E]">
                  <p  className="text-2xl font-semibold mt-4">SubTotal:</p>
                  <p>$325.00</p>
                </div>
                <p className="mt-4 text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                <button className="bg-[#19D16F] text-white w-full mt-6 py-2 rounded-md">
                  Proceed to Checkout
                </button>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg">
                <h2 className="font-bold text-[#15245E]">Calculate Shipping</h2>
                <form className="space-y-4 mt-4">
                  <select className="w-full border rounded-lg px-4 py-2 text-[#C5CBE3]">
                    <option>Bangladesh</option>
                  </select>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <button className="bg-[#FB2E86] text-white w-[179px] h-[41px] py-2 rounded-md">
                    Calculate Shipping
                  </button>
                </form>
              </div>
            </div>
          </div>

          <Footer/>
        </div>
    
    )
}
export default ShoppingCurts