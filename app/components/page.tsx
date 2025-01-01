import Link from "next/link"
import Header from "../header/page"
import Footer from "../footer/page"


export default function Hero(){
    return(
        <div>
     <Header/>



<div
  className="relative w-full h-screen bg-cover bg-center mt-[6%] flex flex-col items-center justify-center"
  style={{ backgroundImage: "url('/images/ecommerce.jpg')" }}>
 
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  
  <div className="relative text-center text-white">
   
    <h1 className="text-5xl font-bold text-white-900 mb-5">
      Welcome to E-commerce Website
    </h1>

    <Link href="/services">
  <button className="bg-blue-500  text-white px-6 py-3 my-12 rounded-lg font-semibold hover:bg-blue-800 transition">
    Our Services
  </button>
</Link>

  </div>
</div>


<Footer/>


        </div>
    )
}