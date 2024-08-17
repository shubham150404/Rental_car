import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storeTokenInLS = (serverToken) => {
        console.log(serverToken);
        return localStorage.setItem('token_of_user', serverToken)


    };
    return( <AuthContext.Provider value={{ storeTokenInLS }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const AuthContextvalue = useContext(AuthContext);
    if(!AuthContextvalue)
    {
        throw new Error("useauth used outside of the provider");
    }

    return AuthContextvalue;
    
};