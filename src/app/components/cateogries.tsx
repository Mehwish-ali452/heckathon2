import React from "react";
import Image from "next/image";

const Cateogry=()=>{
  return(
    <section className="text-gray-600 body-font bg-rounded-to-grey">
  <div className="container px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium title-font mb-4 text-[#151875]">
        Top Categories
      </h1>
    </div>

    {/* Grid for Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Item 1 */}
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg object-cover object-center mb-4 w-36 h-36"
            src="/f1.png"
            width={178}
            height={178}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-base sm:text-lg text-[#151875]">
              Mini LCW Chair
            </h2>
            <h3 className="text-[#151875] mb-3">$56.00</h3>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg object-cover object-center mb-4 w-36 h-36"
            src="/f2.png"
            width={178}
            height={178}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-base sm:text-lg text-[#151875]">
              Mini LCW Chair
            </h2>
            <h3 className="text-[#151875] mb-3">$56.00</h3>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg object-cover object-center mb-4 w-36 h-36"
            src="/f3.png"
            width={178}
            height={178}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-base sm:text-lg text-[#151875]">
              Mini LCW Chair
            </h2>
            <h3 className="text-[#151875] mb-3">$56.00</h3>
          </div>
        </div>
      </div>

      {/* Item 4 */}
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg object-cover object-center mb-4 w-36 h-36"
            src="/f1.png"
            width={178}
            height={178}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-base sm:text-lg text-[#151875]">
              Mini LCW Chair
            </h2>
            <h3 className="text-[#151875] mb-3">$56.00</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Image */}
  <div className="w-full mt-12">
    <Image
      src="/group 162.png"
      alt="pic"
      className="w-full h-auto object-cover"
      width={1920}
      height={462}
    />
  </div>
</section>

      )
}
export default Cateogry