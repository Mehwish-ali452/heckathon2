import React from "react";

import Image from "next/image";


const Blog=()=>{
    return( <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/b1.png"
                  alt="blog"
                  height={225}
                  width={370}
                />
                <div className="p-6">
                    <div className="flex gap-14">
                        
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                  Saber Ali
                  </h2>
                   
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                    21st August2021
                  </h2></div>
                  
                  
                  <h1 className="title-font text-lg font-medium text-[#151875] mb-3 mt-2">

                  Top esssential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#151875]">
                  More off this less hello samlande lied much
                  over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-[#151875] inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                     
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/b2.png"
                  alt="blog"
                  width={370}
                  height={225}
                />
                <div className="p-6">
                    <div className="flex gap-14">
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                    Saber ali
                  </h2>
                  <h1 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                    21st August 2021
                  </h1>
                  </div>
                  <h1 className="title-font text-lg font-medium text-[#FB2E86] mb-3 mt-2">

                  Top essential trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#FB2E86]">
                  More off this less hello samlande lied much
                  over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-[#FB2E86] inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/b3.png"
                  alt="blog"
                  height={225}
                  width={370}
                />
                <div className="p-6">
                    <div className="flex gap-14">
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                    Saber ali
                  </h2>
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#151875] mb-1">
                    21st august 2021
                  </h2>
                  </div>
                  <h1 className="title-font text-lg font-medium text-[#151875] mb-3 mt-2">
                  Top essential trends in 2021
                  </h1>
                  
                  <p className="leading-relaxed mb-3 text-[#151875]">
                  More off this less hello samlande lied much
                  over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className=" text-[#151875] inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                     
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}
export default Blog