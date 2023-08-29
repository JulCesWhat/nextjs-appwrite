import { createContext } from "react";

interface AuthContextProps {
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
