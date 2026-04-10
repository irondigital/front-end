import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      toggleWishlist: (product) => {
        const exists = get().wishlist.find((i) => i.id === product.id);
        if (exists) {
          set({ wishlist: get().wishlist.filter((i) => i.id !== product.id) });
        } else {
          set({ wishlist: [...get().wishlist, product] });
        }
      },

      isWishlisted: (id) => get().wishlist.some((i) => i.id === id),

      removeFromWishlist: (id) =>
        set({ wishlist: get().wishlist.filter((i) => i.id !== id) }),
    }),
    { name: "plant_wishlist" }
  )
);
