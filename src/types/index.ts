export interface Product {
  id: number;
  img: string;
  name: string;
  description: string;
  stock?: number;
  type?: string;
  price: number
}

export interface UserType {
  id: number;
  email: string;
  username: string;
}

export interface CartItem {
  id: string;
  details: string;
  counter: number;
  totalPrice: number;
  productFind: Product;
}