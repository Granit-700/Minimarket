// Types
export interface ProductCardType {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  price: string;
  category: string;
}

export type ProductListType = ProductCardType[];

// Props
export interface ProductCardProps {
  product: ProductCardType;
}

export interface ProductListProps {
  products: ProductCardType[];
}
