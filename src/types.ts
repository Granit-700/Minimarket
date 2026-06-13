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
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
}

export interface ProductListProps {
  products: ProductCardType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
}

export interface ProductsPageProps {
  products: ProductCardType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
}

export interface ProductFormProps {
  products: ProductCardType[];
  categories: CategoryType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductListType>>;
  setCategories: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
}

export interface NavBarProps {
  categories: CategoryType[];
}

export interface LayoutProps {
  categories: CategoryType[];
}
