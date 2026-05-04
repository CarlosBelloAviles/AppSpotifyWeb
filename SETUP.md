# 🎵 Spotify Music Explorer

Una aplicación web moderna para explorar artistas, álbumes y canciones de Spotify usando React, Tanstack Query y Axios.

## 📋 Características

- ✅ Autenticación con Spotify (sin PKC)
- ✅ Exploración de artistas
- ✅ Visualización de álbumes
- ✅ Reproducción de vista previa de canciones
- ✅ Gestión eficiente de datos con Tanstack Query
- ✅ Interfaz moderna y responsiva
- ✅ API calls con Axios

## 🔧 Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Variables de entorno** (`.env`):
```
VITE_CLIENT_ID=tu_client_id
VITE_CLIENT_SECRET=tu_client_secret
```

3. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── Api/
│   └── spotify.ts              # Funciones API de Spotify con Axios
├── Components/
│   ├── Artistas.tsx            # Componente de tarjeta de artista
│   ├── ArtistList.tsx          # Componente de lista de artistas
│   ├── Login.tsx               # Componente de login
│   └── Callback.tsx            # Componente para manejar callback
├── contexts/
│   └── AuthContext.tsx         # Contexto de autenticación
├── hooks/
│   └── useArtistData.ts        # Hooks personalizados con Tanstack Query
├── styles/
│   ├── Artists.css             # Estilos de artistas
│   ├── ArtistList.css          # Estilos de lista
│   └── Login.css               # Estilos de login
├── types/
│   └── spotify.ts              # Tipos TypeScript
├── App.tsx                     # Componente principal
└── main.tsx                    # Punto de entrada
```

## 🔐 Autenticación

La aplicación usa el flujo de autorización de Spotify sin PKCE:

1. Redirige al usuario a `https://accounts.spotify.com/authorize`
2. El usuario inicia sesión y autoriza la aplicación
3. Spotify redirige de vuelta con un código de autorización
4. Se intercambia el código por un token de acceso

## 🎯 Uso de Tanstack Query

```typescript
import { useArtistComplete } from '@/hooks/useArtistData';

const { data, loading, error } = useArtistComplete(['artistId']);
```

## 📡 Llamadas a la API

Todas las llamadas a la API están centralizadas en `src/Api/spotify.ts`:

- `getArtist()` - Obtener información de artista
- `getArtistAlbums()` - Obtener álbumes de artista
- `getArtistTopTracks()` - Obtener top tracks
- `getMultipleArtists()` - Obtener múltiples artistas

## 🚀 Build para producción

```bash
npm run build
```

## 📝 Requisitos

- Node.js 16+
- npm o yarn
- Credenciales de Spotify Developer

## 🎨 Diseño

La aplicación utiliza gradientes y colores de Spotify:
- Verde Spotify: #1db954
- Fondos oscuros para mejor experiencia de usuario
- Diseño responsivo para móvil y escritorio

## 📄 Licencia

MIT
