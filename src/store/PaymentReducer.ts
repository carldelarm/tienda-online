
import { Product } from '../types/Productos';

type actionType = {
    type: string;
    payload: any;
}

interface PaymentReducerContextProps {
    products: Product[];
}

export const initialValue: PaymentReducerContextProps = {
    products: []
};


export const PaymentReducer = (state = initialValue, action:actionType) => {
    
    //console.log('[PaymentReducer] state -> ',state);

    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

 
