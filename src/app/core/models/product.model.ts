import { Category } from './category.model';

export interface Product {
  pId: number;
  productName: string;
  productQty: number;
  price: number;
  expiredDate: Date;
  category: Category;
}
