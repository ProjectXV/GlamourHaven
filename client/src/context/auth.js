import { createContext, useContext } from "react";

const AuthContext = createContext({
  authUser: null,
  loading: true,
  signin: async () => {},
  register: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

// custom hook to use authUserContext
export const useAuthUser = () => useContext(AuthContext);
