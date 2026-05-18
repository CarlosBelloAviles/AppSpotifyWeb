import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks/useAuth';
import { ArtistList } from './Components/ArtistList';
import { Login } from './Components/Login';
import './App.css';
import { AuthProvider } from './contexts/AuthProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      gcTime: 1000 * 60 * 10, // 10 minutos (antes cacheTime)
    },
  },
});

const ARTIST_IDS = [
  "5BViLZRXrRfhPDokkbYiMy", // Dua Lipa
  "7K3zpFXBvPcvzhj7zlGJdO", // The Weeknd
  "1wGIhYkKWSq4yACtTkCkSX", // Billie Eilish
  "5BC3lvcEEOqVrqMaPjYrgu", // Ariana Grande
  "6ZLTlhejhndI4Rh53vYhrY", // Bad Bunny
  "711MCceyCBcFnzjGY4Q7Un", // Harry Styles
  "2DaxqgrOhkeH0fpeiQq2f4", // Olivia Rodrigo
  "2wlAmzYHzTIzffpfqUc4Pz", // Khalid
  "3WbMTcYVLy8BJXZOP1uPnD", // Shawn Mendes
  "5DbzvrfeTWRy2XP39CmmTS", // Travis Scott
  "6XyY86QOPPrYVGvF9ch6wz", // Post Malone
  "5eAWCfyUhZtHHtBdNk56l1", // Ed Sheeran
  "5M52tdBnJaKSvOpJGz8mfZ", // Taylor Swift
  "07XSN3sPlIlB2L2XNcTwJw", // The Chainsmokers
  "36QJpDe2go2KgaRleHCDTp", // Zedd
  "4MVyzYMgTwdP7Z49wAZHx0", // Calvin Harris
  "2tRsMl4eGxwoNabM08Dm4I", // Kaytranada
  "5ZNxiPcbKgaNcBrERMpqeu", // Marshmello
  "3hMTlMf2UGZTeP6DSUUl09", // DJ Snake
  "3854DTPVGm3wxqNeRMnKqn", // Diplo
  "632M26jlmnCrL8CqD5i7Kd", // David Guetta
  "2qzYtiwABDEql4L7JpZ59Y", // Skrillex
  "2ZUIJQdnxHYN1pssKbtwh5", // Major Lazer
];

const AppContent = () => {
  const { isAuthenticated, login } = useAuth();
  const callbackHandledRef = useRef(false);

  // Manejar el callback de Spotify
  useEffect(() => {
    if (callbackHandledRef.current) return;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const error = params.get('error');

    if (error) {
      console.error('Error de Spotify:', error);
      callbackHandledRef.current = true;
      return;
    }

    if (code && !isAuthenticated) {
      callbackHandledRef.current = true;
      const handleCallback = async () => {
        try {
          await login(code);
          // Limpiar la URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (err) {
          console.error('Error al autenticar:', err);
        }
      };
      handleCallback();
    }
  }, [isAuthenticated, login]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎵 Spotify Music Explorer</h1>
        <Login />
      </header>

      {isAuthenticated ? (
        <main className="app-main">
          <ArtistList artistIds={ARTIST_IDS} />
        </main>
      ) : (
        <div className="not-authenticated">
          <p>Por favor, inicia sesión para explorar artistas</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;