export interface Product {
  id?: string;
  title: string;
  description: string;
  descriptionFull: string[];
  category: string[];
  regularPrice: number;
  salePrice: number;
  visibility: boolean;
  onSale: boolean;
  stock: string;
  shipping?: string;
  mainImage: { url: string; name: string };
  images: string[];
  _user?: any;
  createdAt?: any;
  updatedAt?: any;
}

export interface GetProducts {
  products: Product[];
  maxPrice: { salePrice: string };
  //TODO: fix type of max min Price
  minPrice: { salePrice: string };
  pagination: {
    limit: number;
    page: number;
    pages: number;
    total: number;
  };
}

export interface Category {
  title: string;
  description?: string;
  visibility?: boolean;
  mainImage?: { url: string; name: string; type?: boolean };
  subCategory?: string;
  position: number;
}
