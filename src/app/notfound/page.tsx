import React from "react";
import Topbar from "../components/tobbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import Free from "../components/free";
import Footer from "../components/footer";
const NotFound=()=>{
    return(
        <div>
        <Topbar/>
        <Navbar/>
        <div className="max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-8">
  {/* Breadcrumb */}
 <div>
 <div className="text-sm text-gray-500 mb-4 py-16 sm:py-20 lg:py-28 w-full bg-[#F6F5FF]">
  <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-14">
    Not Found

  </h1>
  <div className="px-4 sm:px-6 lg:px-14">
    <span>Home</span> &gt; <span>pages</span> &gt;{" "}
    <Link href="/faq">FAQ</Link>
  </div>
</div>
</div>
</div>


<div>
  <Image
    className="mx-auto w-full max-w-[913px] h-auto"
    src="/notfound.png"
    alt="pic"
    width={913}
    height={677}
  />
</div>


<Free/>
<br/>
<br/>

<Footer/>
</div>

    )
}
export default NotFound
