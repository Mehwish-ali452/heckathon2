import Topbar from "../components/tobbar"
import Navbar from "../components/navbar"
import Items from "../components/items"
import Description from "../components/description"
import Realtedproducts from "../components/relatedproducts"
import Free from "../components/free"
import Footer from "../components/footer"


const Products=()=>{
    return(
        <div>
            <Topbar/>
            <Navbar/>
            <Items/>
            <Description/>
            <Realtedproducts/>
            <Free/>
            <Footer/>
          
        </div>
    )
}

export default Products
