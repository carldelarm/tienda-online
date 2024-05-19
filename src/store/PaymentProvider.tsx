import React, { useReducer } from 'react';
import { PaymentContext } from './PaymentContext';
import { Product } from '../types/Productos';
import { PaymentReducer, initialValue } from './PaymentReducer';

interface PaymentProviderProps {
    children: React.ReactNode;
}

const init = () => {
    const products = JSON.parse(localStorage.getItem('products') ?? '[]');
    //console.log('Productos recuperados de localStorage: ',products);
    return {products};
}

const PaymentProvider = ({ children }: PaymentProviderProps) => {

    const [ PaymentState,dispatch ] = useReducer(PaymentReducer, initialValue, init);

    const setProducts = (products: Product[]) => {
        const action = {
            type: 'SET_PRODUCTS',
            payload: products
        }
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(action);
    }

    //console.log('[PaymentProvider] PaymentState -> ',PaymentState);

    return (
        <PaymentContext.Provider 
            value={{
                ...PaymentState,
                setProducts,
            }}
        >
            {children}            
        </PaymentContext.Provider>
    )
}

export default PaymentProvider
