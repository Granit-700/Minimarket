import type { ProductCardType } from "../types";
import api from "./api";

export const productsApi = {
  getAll: () => api.get<Record<string, ProductCardType>>("/products.json"),
  create: (data: Omit<ProductCardType, "id">) =>
    api.post("/products.json", data),
  update: (id: string, data: Partial<Omit<ProductCardType, "id">>) =>
    api.patch(`products/${id}.json`, data),
  delete: (id: string) => api.delete(`/products/${id}.json`),
};
