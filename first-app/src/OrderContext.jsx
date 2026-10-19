
import { createContext, useContext, useState } from "react";
import { OrderStatus } from "./OrderStatus";

const OrderContext = createContext(null);

export default function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function placeOrder(items, total) {
    const order = {
      id: Date.now(),
      items: items.map((item) => ({ ...item })),
      total,
      status: OrderStatus.PREPARING,
      createdAt: new Date().toLocaleString(),
    };

    setOrders((currentOrders) => [...currentOrders, order]);

    return order;
  }

  function updateOrderStatus(orderId, status) {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  }

  return (
    <OrderContext.Provider
      value={{ orders, placeOrder, updateOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}
