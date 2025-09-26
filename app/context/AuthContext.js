"use client";

const { createContext, useContext } = require("react");

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const user = { name: "Joko", isLoggedIn: true };

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
