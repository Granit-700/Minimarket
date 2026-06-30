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

export interface CategoryType {
  id: string;
}

export type CategoriesType = CategoryType[];

export interface requiredValue {
  title: string;
  price: string;
  category: string;
}

// Props
export interface ProductCardProps {
  product: ProductCardType;
}

export interface ProductListProps {
  products: ProductCardType[];
}

export interface ProductsPageProps {
  products: ProductCardType[];
}

export interface ProductFormProps {
  products: ProductCardType[];
}
