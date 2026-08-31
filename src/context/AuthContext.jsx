import { useMemo, useState } from 'react';
import { loginUser, registerUser } from '../api/authApi';
import { clearStoredAuth, getStoredToken, getStoredUser, setStoredAuth } from './authStorage';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getStoredToken());
  const [user, setUser] = useState(getStoredUser());

  const login = async ({ userName, password }) => {
    const res = await loginUser({ userName, password });
    const { token: newToken, user: newUser } = res.data;
    setStoredAuth(newToken, newUser);
    setToken(newToken);
    setUser(newUser);
    return newUser;
  };

  const register = async (payload) => {
    const res = await registerUser(payload);
    return res.data;
  };

  const logout = () => {
    clearStoredAuth();
    setToken(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
