import { create } from "zustand";
import type {
  CategoriesType,
  ProductCardType,
  ProductListType,
} from "../types";
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
  categories: CategoriesType;
  fetchProducts: (category?: string) => Promise<void>;
  createProduct: (data: Omit<ProductCardType, "id">) => Promise<void>;
  updateProduct: (
    id: string,
    data: Partial<Omit<ProductCardType, "id">>
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useAppStore = create<AppStore>((set, get) => ({
  products: [],
  categories: [],
  fetchProducts: async (cat = "all") => {
    try {
      let data: Record<string, ProductCardType> | null = null;

      if (cat === "all") {
        const res = await productsApi.getAll();
        data = res.data;

        const categories = [
          ...new Set(Object.values(data ?? {}).map((p) => p.category)),
        ].map((id) => ({ id }));

        set({ categories });
      } else {
        const res = await productsApi.getCategory(cat);
        data = res.data;
      }

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
      await productsApi.create(data);

      await get().fetchProducts();
    } catch (e) {
      errorLog(e);
    }
  },
  updateProduct: async (id, data) => {
    try {
      await productsApi.update(id, data);

      await get().fetchProducts();
    } catch (e) {
      errorLog(e);
    }
  },
  deleteProduct: async (id) => {
    try {
      await productsApi.delete(id);

      await get().fetchProducts();
    } catch (e) {
      errorLog(e);
    }
  },
}));
