import type { ProductListType } from "./src/types";

export const cardList: ProductListType = [
  {
    id: crypto.randomUUID(),
    imageURL: "1",
    title: "1",
    description: "1 1",
    price: "1 1",
    category: "cat-1",
  },
  {
    id: crypto.randomUUID(),
    imageURL: "2 2",
    title: "2",
    description: "2 2",
    price: "2 2",
    category: "cat-2",
  },
  {
    id: crypto.randomUUID(),
    imageURL: "3",
    title: "3",
    description: "3 3",
    price: "3 KGS",
    category: "cat-3",
  },
  {
    id: crypto.randomUUID(),
    imageURL: "4",
    title: "4",
    description: "4 4",
    price: "4 KGS",
    category: "cat-4",
  },
  {
    id: crypto.randomUUID(),
    imageURL: "5",
    title: "5",
    description: "5 5",
    price: "5 KGS",
    category: "cat-5",
  },
];

export const categories = [
  { id: "cat-1" },
  { id: "cat-2" },
  { id: "cat-3" },
  { id: "cat-4" },
  { id: "cat-5" },
];
