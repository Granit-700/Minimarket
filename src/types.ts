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

export interface requiredValue {
  title: string;
  price: string;
}

// Props
export interface ProductCardProps {
  product: ProductCardType;
}

export interface ProductListProps {
  products: ProductCardType[];
}
