import React, { useReducer } from 'react';
import { AuthContext, IUser } from './AuthContext';
import { AuthReducer, initialValue } from './AuthReducer';
import { types } from './types/types';

interface AuthProviderProps {
    children: React.ReactNode;
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    return {
        isAuth: !!user,
        user: user
    }
}

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [ AuthState,dispatch ] = useReducer(AuthReducer, initialValue, init);

    const login = (user: IUser) => {
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: types.logout,
            payload: {id: '', name: ''}
        }
        localStorage.removeItem('user');
        dispatch(action);
    }

    console.log(AuthState);

    return (
        <AuthContext.Provider 
            value={{
                ...AuthState,
                login,
                logout,
            }}
        >
            {children}            
        </AuthContext.Provider>
    )
}

export default AuthProvider
