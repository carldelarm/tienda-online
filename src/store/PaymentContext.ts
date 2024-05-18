import { createContext } from "react";
import { Product } from "../types/Productos";


export interface PaymentContextProps {
    setProducts: (products: Product[]) => void
    products: Product[]
}

export const PaymentContext = createContext({} as PaymentContextProps);