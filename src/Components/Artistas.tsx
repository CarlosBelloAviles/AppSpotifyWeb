import { useState } from 'react';
import { useArtistComplete } from '../hooks/useArtistData';
import type { Artist, Album, Track } from "../types/spotify";
import '../styles/Artists.css';

interface Props {
  artist: Artist;
}

export const Artistas = ({ artist }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { data, loading, error } = useArtistComplete([artist.id]);

  if (error) {
    return (
      <div className="artist-card error">
        <p>Error cargando detalles</p>
      </div>
    );
  }

  return (
    <div className="artist-card">
      <div className="artist-header">
        <img
          src={artist.images[0]?.url || 'https://via.placeholder.com/200'}
          alt={artist.name}
          className="artist-image"
        />
        <div className="artist-info">
          <h3>{artist.name}</h3>
          <p className="followers">
            👥 {artist.followers?.total?.toLocaleString() || 0} seguidores
          </p>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="details-btn"
          >
            {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="artist-details">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              {data.albums && data.albums.length > 0 && (
                <div className="detail-section">
                  <h4>Álbumes ({data.albums.length})</h4>
                  <div className="albums-grid">
                    {data.albums.slice(0, 6).map((album: Album) => (
                      <div key={album.id} className="album-card">
                        <img
                          src={album.images[0]?.url || 'https://via.placeholder.com/100'}
                          alt={album.name}
                          className="album-image"
                        />
                        <p className="album-name">{album.name}</p>
                        <p className="album-date">{album.release_date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.topTracks && data.topTracks.length > 0 && (
                <div className="detail-section">
                  <h4>Top Tracks ({data.topTracks.length})</h4>
                  <div className="tracks-list">
                    {data.topTracks.slice(0, 5).map((track: Track, index: number) => (
                      <div key={track.id} className="track-item">
                        <span className="track-number">{index + 1}</span>
                        <div className="track-info">
                          <p className="track-name">{track.name}</p>
                          <p className="track-duration">
                            {Math.floor(track.duration_ms / 60000)}:
                            {String((track.duration_ms % 60000) / 1000).padStart(2, '0')}
                          </p>
                        </div>
                        {track.preview_url && (
                          <audio controls className="track-audio">
                            <source src={track.preview_url} type="audio/mpeg" />
                          </audio>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};