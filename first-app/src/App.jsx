 
import "./index.css";
import { Routes, Route } from "react-router-dom";
import DeliveryDetails from "./DeliveryDetails";
import Navbar from "./Navbar";
import products from "./Product";
import ProductCard from "./productcard";
import Cart from "./Cart";
import Footer from "./Footer";
import KitchenDashboard from "./KitchenDashboard";

function Menu() {
  return (
    <section id="menu" className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Menu Section
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
        <Footer />
      </div>
    </section>
    
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route
        path="/delivery-details"
        element={<DeliveryDetails />}/>
        <Route path="/kitchen" element={<KitchenDashboard />} />

      </Routes>
    </>
  );
}
