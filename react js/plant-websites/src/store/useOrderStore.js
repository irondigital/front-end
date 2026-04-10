import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create(
  persist(
    (set, get) => ({
      orders: [],

      addOrder: (order) =>
        set({
          orders: [
            {
              ...order,
              id: `ORD-${Date.now()}`,
              date: new Date().toISOString(),
              status: "Confirmed",
            },
            ...get().orders,
          ],
        }),

      updateOrderStatus: (id, status) =>
        set({
          orders: get().orders.map((o) =>
            o.id === id ? { ...o, status } : o
          ),
        }),
    }),
    { name: "plant_orders" }
  )
);
