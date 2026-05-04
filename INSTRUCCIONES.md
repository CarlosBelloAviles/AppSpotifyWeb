# 🎵 Spotify Web Explorer - Guía de Instalación y Ejecución

## ✅ Estructura Completada

He creado una aplicación web completa con la API de Spotify usando:
- **React 19** + **TypeScript**
- **Tanstack Query v5** para gestión de datos
- **Axios** para llamadas HTTP
- **Autenticación sin PKC** (Client Credentials Flow)

## 📦 Dependencias a instalar

```bash
npm install
```

O específicamente:
```bash
npm install @tanstack/react-query axios
```

## 🔑 Configuración

### 1. Variables de Entorno
Asegúrate de que tu archivo `.env` tenga:

```
VITE_CLIENT_ID=ef7e2259c19c460280907b8e68ee701c
VITE_CLIENT_SECRET=7f9183fd770c432baed62e1dd430f600
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

Esto iniciará un servidor en `http://localhost:5173` (o el puerto que indique Vite)

## 🏗️ Estructura del Proyecto

```
src/
├── Api/
│   └── spotify.ts                 # Funciones API con Axios
├── Components/
│   ├── Artistas.tsx              # Tarjeta individual de artista
│   ├── ArtistList.tsx            # Lista grid de artistas
│   ├── Login.tsx                 # Componente de autenticación
│   └── Callback.tsx              # Maneja callback de Spotify
├── contexts/
│   └── AuthContext.tsx           # Context + Provider de autenticación
├── hooks/
│   ├── useAuth.ts                # Hook para acceder al contexto
│   └── useArtistData.ts          # Hooks con Tanstack Query
├── styles/
│   ├── Artists.css
│   ├── ArtistList.css
│   └── Login.css
├── types/
│   └── spotify.ts                # Tipos TypeScript
├── App.tsx                       # Componente principal
└── main.tsx                      # Punto de entrada
```

## 🔐 Flujo de Autenticación

1. Usuario hace click en "Iniciar sesión"
2. Se redirige a Spotify (sin PKC)
3. Usuario autoriza la aplicación
4. Spotify redirige con código
5. App intercambia código por token
6. Token se guarda en localStorage
7. Componentes pueden acceder al token vía `useAuth()`

## 🎯 Características Implementadas

✅ **Login/Logout** - Autenticación con Spotify
✅ **Exploración de Artistas** - Visualiza 23 artistas populares
✅ **Álbumes** - Ver álbumes de cada artista
✅ **Top Tracks** - Canciones principales con preview
✅ **Tanstack Query** - Caché inteligente de datos
✅ **Axios** - Llamadas HTTP centralizadas
✅ **Responsive** - Diseño adaptable a móvil
✅ **TypeScript** - Tipado completo

## 📡 Endpoints de API Utilizados

- `GET /artists/{id}` - Información de artista
- `GET /artists/{id}/albums` - Álbumes de artista
- `GET /artists/{id}/top-tracks` - Top tracks
- `GET /artists?ids=...` - Múltiples artistas
- `GET /me` - Información del usuario actual

## 🚀 Pasos Siguientes

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Verificar variables de entorno:**
   - Abre `.env` y confirma que tenga CLIENT_ID y CLIENT_SECRET

3. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador:**
   - Ir a `http://localhost:5173`

5. **Hacer login:**
   - Click en "Iniciar sesión"
   - Autorizar la aplicación
   - ¡Disfrutar explorando artistas!

## 🛠️ Troubleshooting

### Error: "Cannot find module '@tanstack/react-query'"
```bash
npm install @tanstack/react-query axios
```

### Error: "Spotify API returns 401"
- Verifica que CLIENT_ID y CLIENT_SECRET sean correctos
- Confirma que el token no haya expirado

### Error: CORS
- Si ves errores de CORS, asegúrate de que estés usando la API de Spotify correctamente
- Los headers Authorization deben estar presentes

## 📝 Notas Técnicas

- **Sin PKC**: Usamos flujo de autorización tradicional (Authorization Code Flow)
- **Tokens en localStorage**: Persistencia entre sesiones
- **Tanstack Query**: Caché automático + refetch inteligente
- **Error handling**: Manejo de errores en hooks y componentes
- **TypeScript**: Tipos completos para API y componentes

## 🎨 Personalización

Para agregar más artistas, edita `src/App.tsx`:

```typescript
const ARTIST_IDS = [
  "id_del_artista_1",
  "id_del_artista_2",
  // ... más IDs
];
```

## 📞 Soporte

Si algo no funciona:
1. Verifica que npm install haya completado sin errores
2. Confirma que el puerto 5173 esté disponible
3. Borra node_modules y node_lock, reinstala
4. Verifica credenciales de Spotify en .env

¡Listo para comenzar! 🚀
