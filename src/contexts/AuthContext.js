import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
  const { authenticated, loading, handleLogin, handleLogout, registerPatient } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading, registerPatient }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };