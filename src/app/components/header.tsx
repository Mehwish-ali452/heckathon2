
import React from "react";

        
        import Image from "next/image";

        

const Header=()=>{
       
        return(
        //         <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-10">
        //         <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start  shadow-lg rounded-lg p-8">
        //           {/* Left Side: Text Content */}
        //          <div className=" ">
        //           <Image
                  
        //           src="/header2.png" 
        //           alt="Furniture Chair"
        //           width={387} 
        //           height={387}
        //           className="mb-96"/>
        //           </div>
        //           <div className="w-full md:w-1/2 pr-6 px-10 mt-10">
        //             <p className="text-sm text-pink-600 font-semibold mt-16">
        //               Best Furniture For Your Castle...
        //             </p>
        //             <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4 ">
        //               New Furniture Collection <br /> Trends in 2020
        //             </h1>
        //             <p className="text-gray-600 mb-6">
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        //             </p>
        //             <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
        //               Shop Now
        //             </button>
        //           </div>
          
        //           {/* Right Side: Image */}
        //           <div className="w-full md:w-1/2">
        //             <Image
        //               src="/header1.png" 
        //               alt="Furniture Chair"
        //               width={629} 
        //               height={629}
        //               className="rounded-lg shadow-md"
        //             />
        //           </div>
        //         </div>
        //       </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-10">
  <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg p-8">
    
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/header2.png"
        alt="Furniture Chair"
        width={387}
        height={387}
        className="mb-10 md:mb-0" // Adjust bottom margin for mobile view
      />
    </div>

    <div className="w-full md:w-1/2 pr-6 px-10 mt-10 md:mt-0">
      <p className="text-sm text-pink-600 font-semibold mt-16">
        Best Furniture For Your Castle...
      </p>
      <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
        New Furniture Collection <br /> Trends in 2020
      </h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
      </p>
      <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
        Shop Now
      </button>
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0">
      <Image
        src="/header1.png"
        alt="Furniture Chair"
        width={629}
        height={629}
        className="rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

        )
     
}
    
export default Header