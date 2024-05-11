export interface Product {
    id: number;
    title: string;
    price: number;
    isAddProduct: boolean;
    formattedPrice: string;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  }
  