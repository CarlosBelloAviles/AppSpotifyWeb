import axios from 'axios';

const API_BASE_URL = 'https://api.spotify.com/v1';

export const spotifyApi = axios.create({
  baseURL: API_BASE_URL,
});

// Función para obtener el token de acceso usando el backend
export const getAccessToken = async (code: string) => {
  const response = await axios.post('/api/auth/callback', { code });
  return response.data;
};

// Función para refrescar el token usando el backend
export const refreshAccessToken = async (refreshToken: string) => {
  const response = await axios.post('/api/auth/refresh', { refreshToken });
  return response.data;
};

// Obtener información de un artista
export const getArtist = async (artistId: string, token: string) => {
  const response = await spotifyApi.get(`/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Obtener álbumes de un artista
export const getArtistAlbums = async (artistId: string, token: string) => {
  const response = await spotifyApi.get(`/artists/${artistId}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      limit: 50,
    },
  });
  return response.data.items;
};

// Obtener top tracks de un artista
export const getArtistTopTracks = async (artistId: string, token: string) => {
  const response = await spotifyApi.get(`/artists/${artistId}/top-tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      market: 'US',
    },
  });
  return response.data.tracks;
};

// Obtener múltiples artistas
export const getMultipleArtists = async (artistIds: string[], token: string) => {
  const response = await spotifyApi.get('/artists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      ids: artistIds.join(','),
    },
  });
  return response.data.artists;
};

// Obtener información del usuario actual
export const getCurrentUser = async (token: string) => {
  const response = await spotifyApi.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
