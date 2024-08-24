export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
