
import { useOrders } from "./OrderContext";
import { OrderStatus } from "./OrderStatus";

const statusStyles = {
  [OrderStatus.PREPARING]: "bg-yellow-100 text-yellow-800",
  [OrderStatus.READY]: "bg-green-100 text-green-800",
  [OrderStatus.DELIVERED]: "bg-blue-100 text-blue-800",
};

export default function KitchenDashboard() {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">
        Kitchen Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        View incoming orders and update their progress.
      </p>

      {orders.length === 0 ? (
        <p className="text-gray-500">
          No orders yet. New orders will appear here.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <article
              key={order.id}
              className="border rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-start gap-3 mb-4">
                <div>
                  <h2 className="font-bold text-lg">
                    Order #{order.id}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {order.createdAt}
                  </p>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-2 rounded-full ${
                    statusStyles[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <h3 className="font-semibold mb-2">Items</h3>

              <ul className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <li
                    key={`${order.id}-${item.id ?? index}`}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span>{item.name} × {item.quantity ?? 1}</span>
                    <span>
                      Rs. {(item.price ?? 0) * (item.quantity ?? 1)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-3 mb-4 font-bold flex justify-between">
                <span>Total</span>
                <span>Rs. {order.total}</span>
              </div>

              <label className="block text-sm font-medium mb-2">
                Update order status
              </label>

              <select
                value={order.status}
                onChange={(event) =>
                  updateOrderStatus(order.id, event.target.value)
                }
                className="w-full border rounded-lg p-3 bg-white"
              >
                {Object.values(OrderStatus).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
