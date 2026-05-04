import React, {  useState, useCallback} from 'react';

import { getAccessToken } from '../Api/spotify';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem('spotify_token');
  });

  const [refreshToken, setRefreshTokenState] = useState<string | null>(() => {
    return localStorage.getItem('spotify_refresh_token');
  });

  const setToken = useCallback((newToken: string, newRefreshToken: string) => {
    setTokenState(newToken);
    setRefreshTokenState(newRefreshToken);
    localStorage.setItem('spotify_token', newToken);
    localStorage.setItem('spotify_refresh_token', newRefreshToken);
  }, []);

  const login = useCallback(async (code: string) => {
    try {
      const data = await getAccessToken(code);
      setToken(data.access_token, data.refresh_token);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }, [setToken]);

  const logout = useCallback(() => {
    setTokenState(null);
    setRefreshTokenState(null);
    localStorage.removeItem('spotify_token');
    localStorage.removeItem('spotify_refresh_token');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        refreshToken,
        isAuthenticated: !!token,
        login,
        logout,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};