import React from "react"; 
import Image from "next/image";

const Shopex=()=>{
    return( <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              What Shopex Offer
            </h1>
           
            <div className="flex mt-6 justify-center grid-rows-4">
               <div className="w-16 h-1 rounded-full bg-indigo-500 " /> 
            </div>
          </div>
          
          <div className=" grid-cols-4 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">

            <div className="text-center">
            <Image src="/shopex1.png" alt="pic" width={65} height={42}/>
          </div>
              <div className="flex-grow">
                
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  24/7 Support
                </h2>
                <p className="leading-relaxed text-base">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam ut aliquam natus a numquam veritatis nostrum? Nulla iste ratione temporibus, nobis assumenda modi. Inventore, facilis pariatur! Excepturi, assumenda laudantium?
                </p>
               
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-center">
            <Image src="/shopex2.png" alt="pic" width={65} height={42}/>
          </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  24/7 Supporter
                </h2>
                <p className="leading-relaxed text-base">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam placeat voluptates dolore iste, accusantium est, quis dolor, voluptatibus repellat harum non saepe! Nisi eum ducimus at vitae ex vel. Et!
                </p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-center">
            <Image src="/shopex3.png" alt="pic" width={65} height={42}/>
          </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  24/7 Supporter
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem atque accusamus qui laudantium voluptas temporibus eligendi exercitationem rerum in, veritatis vero veniam quibusdam, sunt dicta culpa dolore, at placeat?
                </p>
               

              </div>
            </div>
            {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-center">
            <Image src="/f1.png" alt="pic" width={65} height={42}/>
          </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                  pug VHS try-hard.
                </p>
          </div>
          </div> */}
          </div>
         
        </div>
      </section>
      
      )
}
export default Shopex