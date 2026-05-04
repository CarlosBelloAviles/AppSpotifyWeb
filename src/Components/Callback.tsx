/* import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Callback = () => {
  const { login } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const error = params.get('error');

      if (error) {
        console.error('Error de autenticación:', error);
        window.location.href = '/';
        return;
      }

      if (code) {
        try {
          await login(code);
          // Limpiar la URL y redirigir
          window.history.replaceState({}, document.title, window.location.pathname);
          window.location.href = '/';
        } catch (err) {
          console.error('Error durante la autenticación:', err);
          window.location.href = '/';
        }
      }
    };

    handleCallback();
  }, [login]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      fontSize: '1.2rem'
    }}>
      <p>Autenticando...</p>
    </div>
  );
}; */


import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const Callback = () => {
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      console.error("Error de Spotify:", error);
      window.location.href = "/";
      return;
    }

    if (code) {
      const handleLogin = async () => {
        try {
          await login(code);

          // limpiar URL
          window.history.replaceState({}, document.title, "/");

          // redirigir
          window.location.href = "/";
        } catch (err) {
          console.error("Error al autenticar:", err);
          window.location.href = "/";
        }
      };

      handleLogin();
    }
  }, [login]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p>Autenticando...</p>
    </div>
  );
};