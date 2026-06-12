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
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
}

export interface ProductListProps {
  products: ProductCardType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
}
