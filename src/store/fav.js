import { create } from "zustand";

const useFavStore = create((set) => ({
    favs: [],
    addFav: (fav) => set((state) => ({ favs: [...state.favs, fav] })),
    removeFav: (fav) => set((state) => ({ favs: state.favs.filter((f) => f !== fav) })),
}));

export default useFavStore;
