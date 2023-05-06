export interface Product {
  _id?: string;
  title: string;
  titleUrl: string;
  description: string;
  descriptionFull: string[];
  tags: string[];
  regularPrice: number;
  salePrice: number;
  visibility: boolean;
  onSale: boolean;
  stock: string;
  shipping?: string;
  mainImage: { url: string; name: string };
  images: string[];
  _user?: any;
  dateAdded?: any;
}
