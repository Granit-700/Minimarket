import { create } from "zustand";
import type { ProductCardType, ProductListType } from "../types";
import { productsApi } from "./productsApi";
import { toast } from "react-toastify";

const errorLog = (e: unknown) => {
  if (e instanceof Error) {
    console.error(e.message || e);
    toast.error(e.message);
  } else {
    console.error(e);
    toast.error("Unknown error");
  }
};

interface AppStore {
  products: ProductListType;
  fetchAll: () => Promise<void>;
  createProduct: (data: Omit<ProductCardType, "id">) => Promise<void>;
  updateProduct: (
    id: string,
    data: Partial<Omit<ProductCardType, "id">>
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useAppStore = create<AppStore>((set, get) => ({
  products: [],

  fetchAll: async () => {
    try {
      const { data } = await productsApi.getAll();
      console.log(data);

      const products = Object.entries(data ?? {}).map(([id, val]) => ({
        ...val,
        id,
      }));

      set({ products });
    } catch (e) {
      errorLog(e);
    }
  },
  createProduct: async (data) => {
    try {
      const created = await productsApi.create(data);
      console.log(created);

      await get().fetchAll();
    } catch (e) {
      errorLog(e);
    }
  },
  updateProduct: async (id, data) => {
    try {
      const updated = await productsApi.update(id, data);
      console.log(updated);

      await get().fetchAll();
    } catch (e) {
      errorLog(e);
    }
  },
  deleteProduct: async (id) => {
    try {
      const deleted = await productsApi.delete(id);
      console.log(deleted);

      await get().fetchAll();
    } catch (e) {
      errorLog(e);
    }
  },
}));
