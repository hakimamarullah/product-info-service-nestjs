export interface Product {
  name: string;
  description: string;
  price: number;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
