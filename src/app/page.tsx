
import Topbar from "./components/tobbar";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Featured from "./components/featured";
import Latest from "./components/latest";
import Shopex from "./components/shopex";
import Treading from "./components/trending";
import Cateogry from "./components/cateogries";
import Free from "./components/free";
import Blog from "./components/blog";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div> 
      <Topbar/>
      <Navbar/>
      <Header/> 
      <Featured/>
      <Latest/>
      <Shopex/>
      <Treading/>
      <Cateogry/>
      <Free/>
      <Blog/>
      <Footer/>
      
    </div>
  );
}
