export interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  followers: { total: number };
}

export interface Album {
  id: string;
  name: string;
  release_date: string;
  images: { url: string }[];
}

export interface AlbumsProps {
  albums: Album[];
}

export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  explicit: boolean;
  artists: Artist[];
  album: Album;
  preview_url: string | null;
}

export interface TracksProps {
  tracks: Track[];
}

export type ArtistCompleteData = {
  artist: Artist | null;
  albums: Album[];
  topTracks: Track[];
};

export type UseArtistCompleteResult = {
  data: ArtistCompleteData;
  loading: boolean;
  error: Error | null;
};