
import { useCart } from "./CartContext";
import { useOrders } from "./OrderContext";

export default function Cart() {
    const { placeOrder } = useOrders();
  const {
    cartItems,
    totalAmount,
    totalQuantity,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();


  function handlePlaceOrder() {
    if (cartItems.length === 0) return;


  placeOrder(cartItems, totalAmount);
  clearCart();

  alert("Order sent to the kitchen!");
}

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500">
              Add something delicious from our menu!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-28 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-1">
                      Price: Rs. {item.price}
                    </p>

                    <p className="font-medium mt-2">
                      Subtotal: Rs. {item.price * item.quantity}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                        className="border rounded px-3 py-1 disabled:opacity-40"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="border rounded px-3 py-1"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 text-sm mt-3 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Total items</span>
                <span>{totalQuantity}</span>
              </div>

              <div className="border-t pt-4 flex justify-between gap-4 font-bold text-lg">
                <span>Total</span>
                <span>Rs. {totalAmount}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Place Order
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
