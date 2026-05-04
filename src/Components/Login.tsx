/* import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/Login.css';

export const Login = () => {
  const { isAuthenticated, logout, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const hasCalledRef = useRef(false);

  useEffect(() => {
    // Evitar llamadas múltiples
    if (hasCalledRef.current) return;

    // Verificar si hay un código de autorización en la URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code && !isAuthenticated) {
      hasCalledRef.current = true;
      const handleCallback = async () => {
        setLoading(true);
        try {
          await login(code);
          // Limpiar la URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error) {
          console.error('Error durante la autenticación:', error);
        } finally {
          setLoading(false);
        }
      };
      handleCallback();
    }
  }, [isAuthenticated, login]);

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/`;
    const scopes = ['user-read-private', 'user-read-email'];
    
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', clientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', scopes.join(' '));
    
    window.location.href = authUrl.toString();
  };

  if (loading) {
    return (
      <div className="auth-container">
        <div className="loader">Autenticando...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="auth-container">
        <button onClick={logout} className="logout-btn">
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <button onClick={handleLogin} className="login-btn">
        Iniciar sesión
      </button>
    </div>
  );
}; */


import { useAuth } from '../hooks/useAuth';
import { getRedirectUri } from '../config/vercel';
import '../styles/Login.css';

export const Login = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = getRedirectUri();
    const scopes = ['user-read-private', 'user-read-email'];

    const authUrl = new URL('https://accounts.spotify.com/authorize');

    authUrl.searchParams.append('client_id', clientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', scopes.join(' '));

    window.location.href = authUrl.toString();
  };

  if (isAuthenticated) {
    return (
      <div className="auth-container">
        <button onClick={logout} className="logout-btn">
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <button onClick={handleLogin} className="login-btn">
        Iniciar sesión
      </button>
    </div>
  );
};