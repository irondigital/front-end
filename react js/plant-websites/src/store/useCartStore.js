import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((i) => i.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (id) =>
        set({ cart: get().cart.filter((i) => i.id !== id) }),

      updateQuantity: (id, delta) =>
        set({
          cart: get().cart.map((i) =>
            i.id === id
              ? { ...i, quantity: Math.max(1, i.quantity + delta) }
              : i
          ),
        }),

      clearCart: () => set({ cart: [] }),

      get cartTotal() {
        return get().cart.reduce((t, i) => t + i.price * i.quantity, 0);
      },

      get cartCount() {
        return get().cart.reduce((t, i) => t + i.quantity, 0);
      },
    }),
    { name: "plant_cart" }
  )
);
