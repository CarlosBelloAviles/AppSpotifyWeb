import { useQuery } from '@tanstack/react-query';
import { getMultipleArtists, getArtistAlbums, getArtistTopTracks } from '../Api/spotify';
import { useAuth } from './useAuth';
import type { Artist, Album, Track } from '../types/spotify';

// Función para obtener múltiples artistas
export const fetchArtists = async (artistIds: string[], token: string): Promise<Artist[]> => {
  const chunks = [];
  for (let i = 0; i < artistIds.length; i += 50) {
    chunks.push(artistIds.slice(i, i + 50));
  }
  const responses = await Promise.all(
    chunks.map(chunk => 
      getMultipleArtists(chunk, token)
    )
  );
  return responses.flat();
};

// Función para obtener álbumes de artistas
export const fetchAlbumsForArtists = async (artistIds: string[], token: string): Promise<Album[]> => {
  const allAlbums: Album[] = [];
  for (const id of artistIds) {
    try {
      const albums = await getArtistAlbums(id, token);
      allAlbums.push(...(albums || []));
    } catch (err) {
      console.warn(`Error fetching albums for artist ${id}:`, err);
    }
  }
  return allAlbums;
};

// Función para obtener top tracks
export const fetchTopTracks = async (artistIds: string[], token: string): Promise<Track[]> => {
  const allTracks: Track[] = [];
  for (const id of artistIds) {
    try {
      const tracks = await getArtistTopTracks(id, token);
      allTracks.push(...(tracks || []));
    } catch (err) {
      console.warn(`Error fetching top tracks for artist ${id}:`, err);
    }
  }
  return allTracks;
};

// Hook para obtener artistas
export const useArtists = (artistIds: string[]) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['artists', artistIds, token],
    queryFn: () => fetchArtists(artistIds, token!),
    enabled: artistIds.length > 0 && !!token,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

// Hook para obtener álbumes
export const useAlbums = (artistIds: string[]) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['albums', artistIds, token],
    queryFn: () => fetchAlbumsForArtists(artistIds, token!),
    enabled: artistIds.length > 0 && !!token,
    staleTime: 1000 * 60 * 5,
  });
};

// Hook para obtener top tracks
export const useTracks = (artistIds: string[]) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['tracks', artistIds, token],
    queryFn: () => fetchTopTracks(artistIds, token!),
    enabled: artistIds.length > 0 && !!token,
    staleTime: 1000 * 60 * 5,
  });
};

// Hook combinado para obtener todo (artistas, álbumes y tracks)
export const useArtistComplete = (artistIds: string[]) => {
  const artistsQuery = useArtists(artistIds);
  const albumsQuery = useAlbums(artistIds);
  const tracksQuery = useTracks(artistIds);

  return {
    data: {
      artists: artistsQuery.data || [],
      albums: albumsQuery.data || [],
      topTracks: tracksQuery.data || [],
    },
    loading: artistsQuery.isLoading || albumsQuery.isLoading || tracksQuery.isLoading,
    error: artistsQuery.error || albumsQuery.error || tracksQuery.error,
  };
};
