import { useArtistComplete } from '../hooks/useArtistData';
import { Artistas } from './Artistas';
import type { Artist } from '../types/spotify';
import '../styles/ArtistList.css';

interface ArtistListProps {
  artistIds: string[];
}

export const ArtistList = ({ artistIds }: ArtistListProps) => {
  const { data, loading, error } = useArtistComplete(artistIds);

  if (!artistIds || artistIds.length === 0) {
    return <div className="message">No hay artistas para mostrar</div>;
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando artistas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error al cargar los artistas</p>
      </div>
    );
  }

  if (!data.artists || data.artists.length === 0) {
    return <div className="message">No se encontraron artistas</div>;
  }

  return (
    <div className="artist-list-container">
      <h2>Artistas Principales</h2>
      <div className="artists-grid">
        {data.artists.map((artist: Artist) => (
          <Artistas key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};
