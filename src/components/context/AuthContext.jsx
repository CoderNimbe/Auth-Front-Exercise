import {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthState = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Providers>{children}</AuthContext.Providers>
};

export default AuthState;