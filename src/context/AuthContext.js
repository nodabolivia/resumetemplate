import React, { createContext, useContext } from 'react';
export const authContext = createContext();

//Como un useState que se utilizara en toda la aplicacion
export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error('There is no auth provider');
    return context;
}

export function AuthProvider({ children }) {
    const user = {
        login: true,
    };
    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}