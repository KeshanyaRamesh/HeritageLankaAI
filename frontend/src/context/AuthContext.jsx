import { createContext, useContext, useMemo, useState } from "react";
import api from "../services/api.js";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => { const [user,setUser] = useState(() => JSON.parse(localStorage.getItem("heritage_user") || "null")); const login = async (email,password) => { const {data} = await api.post("/auth/login",{email,password}); localStorage.setItem("heritage_token",data.data.token); localStorage.setItem("heritage_user",JSON.stringify(data.data.user)); setUser(data.data.user); }; const logout = () => { localStorage.removeItem("heritage_token"); localStorage.removeItem("heritage_user"); setUser(null); }; const value=useMemo(()=>({user,login,logout}),[user]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; };
export const useAuth = () => useContext(AuthContext);
