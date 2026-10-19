
import { useState } from "react";
import { useCart } from "./CartContext";
import QuantitySelector from "./QuantitySelector";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>

        <p className="text-lg font-medium mt-2">
          ${product.price}
        </p>

        <p className="text-gray-600 mt-2">
          Delicious and fresh
        </p>

        <div className="flex items-center justify-between gap-2 mt-4">
          <span className="text-sm">Quantity:</span>
          <QuantitySelector qty={qty} setQty={setQty} />
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:bg-blue-500 transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
